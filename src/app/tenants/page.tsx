import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Search, Heart, MessagesSquare, ShieldCheck, Wallet, MapPin, ArrowRight } from "lucide-react";

const BENEFITS = [
  { icon: Search, title: "Smart Search", desc: "Filter by location, price, bedrooms, and amenities to find exactly what you need." },
  { icon: ShieldCheck, title: "Verified Listings", desc: "Every property is inspected by our team. No fake photos, no scams." },
  { icon: MessagesSquare, title: "Talk to Landlords", desc: "Message property owners directly. No agents adding fees or confusion." },
  { icon: Heart, title: "Save Favorites", desc: "Bookmark homes you love and compare them side by side anytime." },
  { icon: Wallet, title: "No Hidden Fees", desc: "Transparent pricing from the start. What you see is what you pay." },
  { icon: MapPin, title: "Virtual Tours", desc: "Inspect properties remotely before you ever leave your house." },
];

export default function Tenants() {
  return (
    <PageShell>
      <PageHero eyebrow="For Tenants" title="Find a place you'll actually love" desc="Stop wasting weekends on fake listings and unreliable agents. Cribs gives you verified homes and direct access to landlords." />
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
          <h2 className="relative text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold mb-4" style={{ color: "var(--cream)" }}>Ready to find your next home?</h2>
          <p className="relative text-[0.95rem] mb-7 max-w-[420px] mx-auto" style={{ color: "var(--text-2)" }}>Join thousands of tenants who found their perfect place on Cribs.</p>
          <button className="relative inline-flex items-center gap-2 px-[1.9rem] py-[0.95rem] rounded-[11px] text-[0.92rem] font-bold border-0 cursor-pointer" style={{ background: "var(--gold)", color: "var(--bg)" }}>Start Searching <ArrowRight size={18} /></button>
        </div>
      </section>
    </PageShell>
  );
}