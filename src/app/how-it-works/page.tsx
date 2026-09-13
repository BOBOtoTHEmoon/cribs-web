import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Search, CalendarCheck, KeyRound, MessagesSquare, ShieldCheck, CreditCard } from "lucide-react";

const STEPS = [
  { icon: Search, n: "01", title: "Search & Discover", desc: "Browse thousands of verified listings filtered by location, budget, and property type. Every listing is inspected before it goes live." },
  { icon: MessagesSquare, n: "02", title: "Connect Directly", desc: "Chat with landlords directly through the app. Ask questions, negotiate terms, and schedule inspections with no agents in between." },
  { icon: CalendarCheck, n: "03", title: "Inspect & Verify", desc: "Take a virtual tour or book a physical inspection in one tap. See the actual property before you commit to anything." },
  { icon: CreditCard, n: "04", title: "Pay Securely", desc: "Make payments through the platform with full protection. Your money is held safely until you confirm move-in." },
  { icon: KeyRound, n: "05", title: "Move In", desc: "Get your keys and settle in. Access move-in support services like cleaning and logistics right from the app." },
  { icon: ShieldCheck, n: "06", title: "Stay Protected", desc: "Ongoing support for maintenance, disputes, and renewals. We're with you through the whole tenancy, not just the deal." },
];

export default function HowItWorks() {
  return (
    <PageShell>
      <PageHero eyebrow="How It Works" title="Renting made simple, from search to move-in" desc="Cribs removes the friction, the middlemen, and the guesswork. Here's how it works from start to finish." />
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className={`reveal ${i % 3 === 1 ? "reveal-d1" : i % 3 === 2 ? "reveal-d2" : ""} p-8 rounded-[16px] relative`} style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-[52px] h-[52px] rounded-[13px] flex items-center justify-center" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}><Icon size={24} /></div>
                  <span className="text-[2rem] font-extrabold" style={{ color: "var(--card-border-hover)" }}>{s.n}</span>
                </div>
                <div className="text-[1.05rem] font-bold mb-2" style={{ color: "var(--cream)" }}>{s.title}</div>
                <div className="text-[0.85rem] leading-[1.65]" style={{ color: "var(--text)" }}>{s.desc}</div>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}