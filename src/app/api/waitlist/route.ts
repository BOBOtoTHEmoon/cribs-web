import { NextResponse } from "next/server";
import { Resend } from "resend";
import { waitlistEmail } from "@/lib/waitlistEmail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SEGMENTS = { tenant: "Cribs Waitlist: Tenants", landlord: "Cribs Waitlist: Landlords" } as const;

/* Light per-IP rate limit (per server instance): 5 attempts every 10 minutes */
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

/* Find or create the Resend segment for this role, cached per instance */
const segmentCache: Record<string, string> = {};
async function getSegmentId(resend: Resend, name: string) {
  if (segmentCache[name]) return segmentCache[name];
  const list = await resend.segments.list();
  const found = list.data?.data.find((s) => s.name === name);
  if (found) return (segmentCache[name] = found.id);
  const created = await resend.segments.create({ name });
  if (created.data) return (segmentCache[name] = created.data.id);
  throw new Error(created.error?.message ?? "Could not create segment");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "The waitlist isn't open yet. Please try again soon." }, { status: 503 });
  }

  const body = await req.json().catch(() => null);
  const email = String(body?.email ?? "").trim().toLowerCase();
  const role: "tenant" | "landlord" = body?.role === "landlord" ? "landlord" : "tenant";

  // Honeypot: real people never fill this hidden field
  if (body?.company) return NextResponse.json({ ok: true });

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many attempts. Please try again in a few minutes." }, { status: 429 });
  }

  const resend = new Resend(apiKey);

  // Already on the list?
  const existing = await resend.contacts.get({ email });
  if (existing.data) return NextResponse.json({ ok: true, already: true });

  let segmentId: string | undefined;
  try {
    segmentId = await getSegmentId(resend, SEGMENTS[role]);
  } catch (e) {
    console.error("[waitlist] segment error", e);
  }

  let created = await resend.contacts.create({ email, ...(segmentId ? { segments: [{ id: segmentId }] } : {}) });
  if (created.error && segmentId) {
    // Fall back to saving the contact without a segment
    created = await resend.contacts.create({ email });
  }
  if (created.error) {
    console.error("[waitlist] contact error", created.error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  const { subject, html, text } = waitlistEmail(role);
  const sent = await resend.emails.send({
    from: process.env.WAITLIST_FROM || "Cribs <hello@cribshq.app>",
    to: email,
    replyTo: process.env.WAITLIST_REPLY_TO || "hello@cribshq.app",
    subject,
    html,
    text,
  });
  if (sent.error) console.error("[waitlist] email error", sent.error);

  return NextResponse.json({ ok: true });
}
