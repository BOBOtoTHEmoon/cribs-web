import { BadgeCheck, ShieldCheck, MessagesSquare } from "lucide-react";

const ITEMS = [
  { icon: BadgeCheck, label: "Thousands of Verified Listings", sub: "Every property inspected and verified by our team", d: "" },
  { icon: ShieldCheck, label: "Safe, Secure & Transparent", sub: "Secure payments and verified landlord identities", d: "reveal-d1" },
  { icon: MessagesSquare, label: "Direct Chat with Landlords", sub: "No agents in the middle, communicate directly", d: "reveal-d2" },
];

export default function Trust() {
  return (
    <section className="py-14" style={{ borderTop: "1px solid var(--card-border)", borderBottom: "1px solid var(--card-border)" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.label} className={`reveal ${it.d} flex items-center gap-4 p-5 rounded-[14px] transition-all`} style={{ background: "var(--card)", border: "1px solid var(--card-border)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--card-border-hover)"; e.currentTarget.style.transform = "translateY(-3px)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "none"; }}>
                <div className="w-12 h-12 rounded-[12px] flex-shrink-0 flex items-center justify-center" style={{ background: "var(--gold-dim)", border: "1px solid rgba(200,168,78,0.2)", color: "var(--gold)" }}>
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-[0.9rem] font-bold mb-[0.2rem]" style={{ color: "var(--cream)" }}>{it.label}</div>
                  <div className="text-[0.78rem] leading-[1.45]" style={{ color: "var(--text)" }}>{it.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}