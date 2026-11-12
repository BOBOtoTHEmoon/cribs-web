import Link from "next/link";
import { Check, ArrowRight, Search, BadgeCheck, Star } from "lucide-react";
import { IcSearchHome, IcBuilding, IcBadgeAgent } from "./CribsIcons";

const CARDS = [
  {
    key: "tenants",
    badge: "For Tenants",
    icon: IcSearchHome,
    title: "Find a place you'll love.",
    desc: "Search verified homes across Lagos, chat with landlords and verified agents, and see every fee upfront.",
    points: ["Search by location, price & more", "Chat with landlords & agents", "Fees shown upfront"],
    link: { href: "/tenants", label: "Find a Home" },
    visual: "tenant",
  },
  {
    key: "landlords",
    badge: "For Landlords",
    icon: IcBuilding,
    title: "List your property. Find the right tenant.",
    desc: "Reach serious, verified tenants. List on your own or with an agent you trust, and manage it all in one place.",
    points: ["List your property in minutes", "Verified, serious tenants", "Rent and reminders built in"],
    link: { href: "/landlords", label: "List Your Property" },
    visual: "landlord",
  },
  {
    key: "agents",
    badge: "For Agents",
    icon: IcBadgeAgent,
    title: "Grow your business with trust.",
    desc: "List the properties you manage, earn a verified agent badge, and get serious tenant leads with your fee shown upfront.",
    points: ["Verified agent badge", "Serious tenant leads", "Transparent, upfront fees"],
    link: { href: "/agents", label: "Join as an Agent" },
    visual: "agent",
  },
] as const;

function Visual({ kind }: { kind: "tenant" | "landlord" | "agent" }) {
  if (kind === "tenant") {
    return (
      <div className="relative h-full group/img">
        <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format&fit=crop" alt="Bright modern living room" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
        <div className="absolute inset-x-0 bottom-0 p-3" style={{ background: "linear-gradient(to top, rgba(10,10,11,0.95), transparent)" }}>
          <div className="flex items-center gap-[0.4rem] rounded-[10px] px-3 py-[0.55rem] text-[0.72rem]" style={{ background: "rgba(20,20,22,0.92)", border: "1px solid var(--card-border)", color: "var(--text)" }}>
            <Search size={14} style={{ color: "var(--gold)" }} /> Where do you want to live?
          </div>
        </div>
      </div>
    );
  }
  if (kind === "landlord") {
    return (
      <div className="h-full flex items-center justify-center text-center px-6" style={{ background: "linear-gradient(160deg, var(--card-2), var(--surface))" }}>
        <div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "var(--gold)", color: "var(--bg)" }}><Check size={24} /></div>
          <div className="text-[0.95rem] font-bold mb-1" style={{ color: "var(--cream)" }}>Property Listed!</div>
          <div className="text-[0.72rem] leading-[1.5]" style={{ color: "var(--text)" }}>Live and visible to verified tenants across Lagos.</div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full flex items-center justify-center px-5" style={{ background: "linear-gradient(160deg, var(--card-2), var(--surface))" }}>
      <div className="w-full max-w-[260px] rounded-[14px] p-4" style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-[0.75rem] font-bold" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}>TA</div>
          <div>
            <div className="text-[0.82rem] font-bold flex items-center gap-1" style={{ color: "var(--cream)" }}>Tunde Adebayo <BadgeCheck size={14} style={{ color: "var(--gold)" }} /></div>
            <div className="text-[0.66rem]" style={{ color: "var(--gold)" }}>Verified Agent</div>
          </div>
        </div>
        <div className="flex justify-between text-[0.68rem] pt-3" style={{ borderTop: "1px solid var(--card-border)", color: "var(--text)" }}>
          <span><b style={{ color: "var(--cream)" }}>12</b> listings</span>
          <span className="flex items-center gap-1"><Star size={11} fill="currentColor" style={{ color: "var(--gold)" }} /> <b style={{ color: "var(--cream)" }}>4.9</b> rating</span>
          <span>Fee upfront</span>
        </div>
      </div>
    </div>
  );
}

export default function Dual() {
  return (
    <section id="tenants" className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4.5rem,10vh,7.5rem)]">
      <div className="reveal text-center mb-12">
        <div className="text-[0.68rem] font-bold uppercase tracking-[2.5px] mb-4" style={{ color: "var(--gold)" }}>One Platform, Everyone Wins</div>
        <h2 className="text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold tracking-[-1px] mb-[0.85rem]" style={{ color: "var(--cream)" }}>Built for tenants, landlords and agents</h2>
        <p className="text-base max-w-[520px] mx-auto leading-[1.7]" style={{ color: "var(--text-2)" }}>Whether you&apos;re looking for a home, renting one out, or helping people do both, Cribs has a place for you.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {CARDS.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={c.key} className={`reveal card-h ${i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""} rounded-[20px] overflow-hidden flex flex-col`} style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
              <div className="hidden md:block h-[180px] overflow-hidden" style={{ borderBottom: "1px solid var(--card-border)" }}>
                <Visual kind={c.visual} />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="inline-flex self-start items-center gap-[0.4rem] text-[0.62rem] font-bold uppercase tracking-[2px] mb-4 px-[0.7rem] py-[0.3rem] rounded-[6px]" style={{ color: "var(--gold)", background: "var(--gold-dim)" }}>
                  <Icon size={15} /> {c.badge}
                </div>
                <h3 className="text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.3px] mb-3" style={{ color: "var(--cream)" }}>{c.title}</h3>
                <p className="text-[0.84rem] leading-[1.65] mb-5" style={{ color: "var(--text)" }}>{c.desc}</p>
                <ul className="list-none mb-6">
                  {c.points.map((li) => (
                    <li key={li} className="text-[0.82rem] py-[0.35rem] flex items-center gap-[0.6rem]" style={{ color: "var(--text-2)" }}>
                      <span className="w-5 h-5 rounded-[6px] flex items-center justify-center flex-shrink-0" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}><Check size={13} /></span>
                      {li}
                    </li>
                  ))}
                </ul>
                <Link href={c.link.href} className="arrow-link mt-auto">{c.link.label} <ArrowRight size={16} /></Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
