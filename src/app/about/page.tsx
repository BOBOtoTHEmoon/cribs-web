import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Target, Eye, Heart } from "lucide-react";

const VALUES = [
  { icon: Target, title: "Our Mission", desc: "To make renting in Nigeria transparent, safe, and stress-free by connecting tenants and landlords directly, cutting out the middlemen who make housing harder than it should be." },
  { icon: Eye, title: "Our Vision", desc: "A future where anyone can find a home or list a property with total confidence, backed by verification, technology, and trust at every step." },
  { icon: Heart, title: "Our Values", desc: "Honesty over hustle. Transparency over shortcuts. People over profit. We build for the renter and the landlord, not the agent taking a cut." },
];

export default function About() {
  return (
    <PageShell>
      <PageHero eyebrow="About Us" title="We're fixing how Nigeria rents" desc="Cribs was born out of frustration with a broken system. We're building the platform we always wished existed." />
      <section className="max-w-[900px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <div className="reveal text-[1.05rem] leading-[1.9] text-center" style={{ color: "var(--text-2)" }}>
          Finding a home in Lagos shouldn't mean chasing agents, paying fees for properties that don't exist, or being shown apartments that look nothing like the photos. We lived that frustration, and we knew there had to be a better way. So we built Cribs, a platform where every listing is verified, every landlord is real, and every naira is protected. No middlemen. No games. Just homes and the people who need them.
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className={`reveal ${i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""} p-8 rounded-[16px]`} style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
                <div className="w-[52px] h-[52px] rounded-[13px] flex items-center justify-center mb-5" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}><Icon size={24} /></div>
                <div className="text-[1.05rem] font-bold mb-2" style={{ color: "var(--cream)" }}>{v.title}</div>
                <div className="text-[0.85rem] leading-[1.65]" style={{ color: "var(--text)" }}>{v.desc}</div>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}