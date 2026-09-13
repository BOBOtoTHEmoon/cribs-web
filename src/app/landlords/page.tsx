import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Building2, Users, Wallet, BarChart3, Wrench, FileCheck, ArrowRight } from "lucide-react";

const BENEFITS = [
  { icon: Building2, title: "List in Minutes", desc: "Add your property with photos and details in a few taps. Free to list, always." },
  { icon: Users, title: "Verified Tenants", desc: "We screen every applicant so you only deal with serious, trustworthy renters." },
  { icon: Wallet, title: "Automated Rent", desc: "Collect rent on time, every time, with automatic reminders and tracking." },
  { icon: BarChart3, title: "Listing Insights", desc: "See views, inquiries, and performance data for every property you list." },
  { icon: Wrench, title: "Maintenance Hub", desc: "Manage repair requests and track resolutions all in one dashboard." },
  { icon: FileCheck, title: "Digital Agreements", desc: "Handle tenancy agreements and documents securely within the platform." },
];

export default function Landlords() {
  return (
    <PageShell>
      <PageHero eyebrow="For Landlords" title="Quality tenants, zero stress" desc="List your property, reach thousands of verified tenants, and manage everything from one place. No agents taking a cut." />
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className={`reveal ${i % 3 === 1 ? "reveal-d1" : i % 3 === 2 ? "reveal-d2" : ""} p-8 rounded-[16px]`} style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
                <div className="w-[52px] h-[52px] rounded-[13px] flex items-center justify-center mb-5" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}><Icon size={24} /></div>
                <div className="text-[1.05rem] font-bold mb-2" style={{ color: "var(--cream)" }}>{b.title}</div>
                <div className="text-[0.85rem] leading-[1.65]" style={{ color: "var(--text)" }}>{b.desc}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="reveal rounded-[20px] p-[clamp(2.5rem,5vw,4rem)] text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--card-2), var(--card))", border: "1px solid var(--card-border)" }}>
          <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, var(--gold-glow), transparent 70%)" }} />
          <h2 className="relative text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold mb-4" style={{ color: "var(--cream)" }}>List your property today</h2>
          <p className="relative text-[0.95rem] mb-7 max-w-[420px] mx-auto" style={{ color: "var(--text-2)" }}>It's free to list and takes less than five minutes to get started.</p>
          <button className="relative inline-flex items-center gap-2 px-[1.9rem] py-[0.95rem] rounded-[11px] text-[0.92rem] font-bold border-0 cursor-pointer" style={{ background: "var(--gold)", color: "var(--bg)" }}>List Your Property <ArrowRight size={18} /></button>
        </div>
      </section>
    </PageShell>
  );
}