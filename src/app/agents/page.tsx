import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import Bento, { AgentVisual, FeeVisual } from "@/components/Bento";
import type { BentoItem } from "@/components/Bento";
import PageHero from "@/components/PageHero";
import { IcBadgeAgent, IcBuilding, IcUsers, IcCalendar, IcStar, IcWallet } from "@/components/CribsIcons";

const BENEFITS: BentoItem[] = [
  { icon: IcBadgeAgent, title: "Verified Agent Badge", desc: "Get verified once and carry a trust badge on every listing and in every chat. Tenants know you're the real deal.", visual: <AgentVisual /> },
  { icon: IcBuilding, title: "List Managed Properties", desc: "Add every property you manage for landlords, with photos, details and availability." },
  { icon: IcUsers, title: "Serious Tenant Leads", desc: "Inquiries from real, verified tenants go straight to you. Less time wasted, more deals closed." },
  { icon: IcCalendar, title: "Inspections Made Easy", desc: "Tenants book inspection slots in the app, so your calendar stays organised." },
  { icon: IcStar, title: "Build Your Reputation", desc: "Collect reviews from tenants and landlords and stand out as a top agent in your area." },
  { icon: IcWallet, title: "Transparent Fees", desc: "Your agent fee is shown upfront on every listing, before anyone inspects. No awkward surprises, more trust, faster deals.", visual: <FeeVisual /> },
];

export const metadata = pageMeta({
  title: "For Agents",
  description: "Grow your agency with Cribs. Get a verified agent badge, list the properties you manage, receive serious tenant leads, and show your fee upfront.",
  path: "/agents",
});

export default function Agents() {
  return (
    <PageShell>
      <PageHero eyebrow="For Agents" title="Grow your agency with trust" desc="Cribs works with honest agents, not against them. Get verified, list the properties you manage, and close deals faster with serious tenants." />
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <Bento items={BENEFITS} />
      </section>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="reveal panel-h rounded-[20px] p-[clamp(2.5rem,5vw,4rem)] text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--card-2), var(--card))", border: "1px solid var(--card-border)" }}>
          <h2 className="relative text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold mb-4" style={{ color: "var(--cream)" }}>Be one of our first verified agents</h2>
          <p className="relative text-[0.95rem] mb-7 max-w-[460px] mx-auto" style={{ color: "var(--text-2)" }}>Join the waitlist as an agent and we&apos;ll get you verified before launch.</p>
          <Link href="/#download" className="btn-gold relative">Get the App <ArrowRight size={18} /></Link>
        </div>
      </section>
    </PageShell>
  );
}
