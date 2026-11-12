import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { IcSpray, IcTruck } from "./CribsIcons";
import { CLEANING, MOVING } from "@/lib/services";

const CARDS = [
  { icon: IcSpray, title: "Cleaning", desc: "Professional cleaners for your move-in, your move-out, and every week after.", items: CLEANING.map((c) => c.title) },
  { icon: IcTruck, title: "Moving", desc: "Packing, a van, loaders and setup. We move everything from your old house to your new home.", items: MOVING.map((m) => m.title) },
];

export default function ServicesSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4.5rem,10vh,7.5rem)]">
      <div className="reveal text-center mb-12">
        <div className="text-[0.68rem] font-bold uppercase tracking-[2.5px] mb-4" style={{ color: "var(--gold)" }}>More Than a Listing</div>
        <h2 className="text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold tracking-[-1px] mb-[0.85rem]" style={{ color: "var(--cream)" }}>We help you move in, too</h2>
        <p className="text-base max-w-[500px] mx-auto leading-[1.7]" style={{ color: "var(--text-2)" }}>Found your new home? Cribs takes care of the cleaning and the moving, so you can just settle in.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {CARDS.map((c, i) => {
          const Icon = c.icon;
          return (
            <Link key={c.title} href="/services" className={`reveal card-h ${i === 1 ? "reveal-d1" : ""} group block rounded-[20px] p-6 sm:p-8`} style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
              <span className="ic mb-5"><Icon size={40} /></span>
              <h3 className="text-[1.35rem] font-extrabold tracking-[-0.3px] mb-2" style={{ color: "var(--cream)" }}>{c.title}</h3>
              <p className="text-[0.88rem] leading-[1.65] mb-5 max-w-[420px]" style={{ color: "var(--text)" }}>{c.desc}</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 list-none">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-[0.82rem]" style={{ color: "var(--text-2)" }}>
                    <Check size={15} strokeWidth={2.6} style={{ color: "var(--gold)", flexShrink: 0 }} /> {it}
                  </li>
                ))}
              </ul>
              <span className="arrow-link">Explore services <ArrowRight size={16} /></span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
