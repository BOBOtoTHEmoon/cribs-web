"use client";
import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "done" | "already" | "error";

export default function WaitlistForm({ align = "left" }: { align?: "left" | "center" }) {
  const [role, setRole] = useState<"tenant" | "landlord">("tenant");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus(data.already ? "already" : "done");
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  const center = align === "center";

  if (status === "done" || status === "already") {
    return (
      <div className={`flex items-start gap-3 rounded-[14px] p-4 w-full max-w-[420px] ${center ? "mx-auto text-left" : "mx-auto lg:mx-0 text-left"}`} style={{ background: "var(--gold-dim)", border: "1px solid rgba(200,168,78,0.3)" }}>
        <span className="w-8 h-8 rounded-[9px] flex-shrink-0 flex items-center justify-center" style={{ background: "var(--gold)", color: "var(--bg)" }}>
          <Check size={18} strokeWidth={3} />
        </span>
        <div>
          <div className="text-[0.95rem] font-bold" style={{ color: "var(--cream)" }}>
            {status === "done" ? "You're on the list!" : "You're already on the list."}
          </div>
          <div className="text-[0.82rem] leading-[1.55] mt-[2px]" style={{ color: "var(--text-2)" }}>
            {status === "done" ? "Check your inbox for a confirmation email. We'll let you know the moment Cribs is live." : "No need to sign up again. We'll email you as soon as Cribs launches."}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`w-full max-w-[420px] ${center ? "mx-auto" : "mx-auto lg:mx-0"}`} noValidate>
      {/* role switch */}
      <div className="grid grid-cols-2 gap-1 p-1 rounded-[11px] mb-3" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }} role="radiogroup" aria-label="I am a">
        {(["tenant", "landlord"] as const).map((r) => (
          <button
            key={r}
            type="button"
            role="radio"
            aria-checked={role === r}
            onClick={() => setRole(r)}
            className="py-[0.55rem] rounded-[8px] text-[0.82rem] font-semibold transition-all duration-200"
            style={role === r ? { background: "var(--gold)", color: "var(--bg)" } : { color: "var(--text)" }}
          >
            {r === "tenant" ? "I'm looking to rent" : "I'm a landlord"}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="waitlist-email" className="sr-only">Email address</label>
        <input
          id="waitlist-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
          className="flex-1 min-w-0 px-4 py-[0.8rem] rounded-[11px] outline-none transition-colors focus:border-[var(--gold)]"
          style={{ background: "var(--card-2)", border: "1px solid var(--card-border)", color: "var(--cream)" }}
        />
        {/* honeypot */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          aria-hidden="true"
          className="absolute -left-[9999px] w-px h-px opacity-0"
        />
        <button type="submit" disabled={status === "loading"} className="btn-gold !py-[0.8rem] !px-5 disabled:opacity-70">
          {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <>Join waitlist <ArrowRight size={17} /></>}
        </button>
      </div>

      <div className="min-h-[1.4rem] mt-2 text-[0.78rem]" style={{ color: status === "error" ? "#E07A6A" : "var(--dim)" }} aria-live="polite">
        {status === "error" ? message : "No spam. We'll only email you about the launch."}
      </div>
    </form>
  );
}
