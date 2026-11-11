import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import Bento, { ListingVisual, RentVisual } from "@/components/Bento";
import type { BentoItem } from "@/components/Bento";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { IcBuilding, IcUsers, IcWallet, IcChart, IcToolbox, IcDocCheck, IcDoc, IcBell } from "@/components/CribsIcons";
const BENEFITS: BentoItem[] = [
  { icon: IcBuilding, title: "List in Minutes", desc: "Add your property with photos and details in a few taps. Free to list, always.", visual: <ListingVisual /> },
  { icon: IcUsers, title: "Verified Tenants", desc: "We screen every applicant so you only deal with serious, trustworthy renters." },
  { icon: IcChart, title: "Listing Insights", desc: "See views, inquiries, and performance data for every property you list." },
  { icon: IcToolbox, title: "Maintenance Hub", desc: "Manage repair requests and track resolutions all in one dashboard." },
  { icon: IcDocCheck, title: "Digital Agreements", desc: "Handle tenancy agreements and documents securely within the platform." },
  { icon: IcWallet, title: "Automated Rent", desc: "Collect rent on time, every time, with automatic reminders and tracking for every unit.", visual: <RentVisual /> },
];

export const metadata = pageMeta({
  title: "For Landlords",
  description: "List your Lagos property for free, reach verified tenants, and manage rent, notices and reminders in one place. No agents taking a cut.",
  path: "/landlords",
});

export default function Landlords() {
  return (
    <PageShell>
      <PageHero eyebrow="For Landlords" title="Quality tenants, zero stress" desc="List your property, reach verified tenants, and manage everything from one place. No agents taking a cut." />
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <Bento items={BENEFITS} />
      </section>
      {/* Property Management highlight */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <div className="reveal rounded-[20px] p-[clamp(2rem,4vw,3.5rem)] grid lg:grid-cols-[1fr_1fr] gap-10 items-center panel-h" style={{ background: "linear-gradient(160deg, var(--card-2), var(--card))", border: "1px solid var(--card-border)" }}>
          <div>
            <div className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[2px] mb-4 px-[0.7rem] py-[0.3rem] rounded-[6px]" style={{ color: "var(--gold)", background: "var(--gold-dim)" }}>
              <IcWallet size={15} /> Property Management
            </div>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.2] tracking-[-0.5px] mb-4" style={{ color: "var(--cream)" }}>Manage your properties without the headache</h2>
            <p className="text-[0.9rem] leading-[1.7] mb-6 max-w-[440px]" style={{ color: "var(--text-2)" }}>
              Cribs does more than list your property. We help you run it, from collecting rent to handling paperwork, so you can focus on what matters.
            </p>
            <Link href="/how-it-works" className="arrow-link">Learn more <ArrowRight size={16} /></Link>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: IcWallet, title: "Rent Collection", desc: "Collect rent on time with automatic reminders and payment tracking." },
              { icon: IcDoc, title: "Quick Notices", desc: "Draft and send tenancy notices in minutes using ready-made templates." },
              { icon: IcBell, title: "Tenant Reminders", desc: "Keep tenants informed about renewals, payments, and inspections." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card-h flex gap-4 items-start p-4 rounded-[14px]" style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
                  <span className="ic flex-shrink-0"><Icon size={30} /></span>
                  <div>
                    <div className="text-[0.9rem] font-bold mb-1" style={{ color: "var(--cream)" }}>{f.title}</div>
                    <div className="text-[0.8rem] leading-[1.5]" style={{ color: "var(--text)" }}>{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="reveal rounded-[20px] p-[clamp(2.5rem,5vw,4rem)] text-center relative overflow-hidden panel-h" style={{ background: "linear-gradient(160deg, var(--card-2), var(--card))", border: "1px solid var(--card-border)" }}>
          <h2 className="relative text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold mb-4" style={{ color: "var(--cream)" }}>List your property today</h2>
          <p className="relative text-[0.95rem] mb-7 max-w-[420px] mx-auto" style={{ color: "var(--text-2)" }}>It's free to list and takes less than five minutes. The Cribs app is launching soon.</p>
          <Link href="/#download" className="btn-gold relative">Join the Waitlist <ArrowRight size={18} /></Link>
        </div>
      </section>
    </PageShell>
  );
}