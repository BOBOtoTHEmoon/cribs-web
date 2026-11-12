import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import IPhone from "@/components/IPhone";
import { MoveInScreen } from "@/components/AppScreens";
import { CLEANING, MOVING } from "@/lib/services";
import { IcSpray, IcTruck, IcHomeCheck, IcDoorOut, IcCalendar, IcBox, IcSofa, IcShield, IcWallet, IcUsers } from "@/components/CribsIcons";

const CLEAN_ICONS = { "move-in": IcHomeCheck, "move-out": IcDoorOut, regular: IcCalendar } as const;
const MOVE_ICONS = { packing: IcBox, van: IcTruck, door: IcHomeCheck, setup: IcSofa } as const;

const WHY = [
  { icon: IcUsers, title: "Vetted professionals", desc: "Every cleaner and mover is screened and trained." },
  { icon: IcWallet, title: "Clear pricing", desc: "You know the cost before anything is booked." },
  { icon: IcShield, title: "Handled with care", desc: "Your home and your things are treated like ours." },
];

export const metadata = pageMeta({
  title: "Cleaning & Moving Services",
  description: "Move-in cleaning, move-out cleaning, regular cleaning, and full moving services in Lagos: packing, van and loaders, door to door, and setup on arrival.",
  path: "/services",
});

function ServiceGroup({ id, icon: Icon, title, desc, items, icons }: {
  id: string;
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  desc: string;
  items: readonly { key: string; title: string; desc: string }[];
  icons: Record<string, React.ComponentType<{ size?: number }>>;
}) {
  return (
    <div id={id} className="reveal panel-h rounded-[22px] p-6 sm:p-9 scroll-mt-[90px]" style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
      <div className="flex items-center gap-4 mb-3">
        <span className="ic"><Icon size={42} /></span>
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-[-0.5px]" style={{ color: "var(--cream)" }}>{title}</h2>
      </div>
      <p className="text-[0.92rem] leading-[1.7] mb-7 max-w-[560px]" style={{ color: "var(--text-2)" }}>{desc}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((it, i) => {
          const I = icons[it.key];
          const spanFull = items.length % 2 === 1 && i === items.length - 1;
          return (
            <div key={it.key} className={`card-h rounded-[16px] p-5 flex gap-4 ${spanFull ? "sm:col-span-2" : ""}`} style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
              <span className="ic flex-shrink-0"><I size={30} /></span>
              <div>
                <div className="text-[0.98rem] font-bold mb-1" style={{ color: "var(--cream)" }}>{it.title}</div>
                <div className="text-[0.82rem] leading-[1.6]" style={{ color: "var(--text)" }}>{it.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <PageShell>
      <PageHero eyebrow="Services" title="From old house to new home" desc="Finding the place is just the start. Cribs also cleans and moves you in, so settling into your new home is easy." />

      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-5">
        <ServiceGroup id="cleaning" icon={IcSpray} title="Cleaning" desc="Professional cleaning for every stage of your tenancy, done by vetted cleaners who show up on time." items={CLEANING} icons={CLEAN_ICONS} />
      </section>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <ServiceGroup id="moving" icon={IcTruck} title="Moving" desc="Everything you need to move from your old house to your new one, without the stress or the breakages." items={MOVING} icons={MOVE_ICONS} />
      </section>

      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <div>
            <div className="reveal text-[0.68rem] font-bold uppercase tracking-[2.5px] mb-4" style={{ color: "var(--gold)" }}>Why Cribs Services</div>
            <h2 className="reveal text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.8px] leading-[1.15] mb-8" style={{ color: "var(--cream)" }}>Your move, handled by people you can trust</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {WHY.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className={`reveal ${i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""} flex sm:block gap-4`}>
                    <span className="ic flex-shrink-0 sm:mb-3"><Icon size={32} /></span>
                    <div>
                      <div className="text-[0.98rem] font-bold mb-1" style={{ color: "var(--cream)" }}>{w.title}</div>
                      <div className="text-[0.82rem] leading-[1.6]" style={{ color: "var(--text)" }}>{w.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="reveal reveal-d1 hidden lg:flex justify-center">
            <div className="float-slow"><IPhone width={250}><MoveInScreen /></IPhone></div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="reveal panel-h rounded-[20px] p-[clamp(2.5rem,5vw,4rem)] text-center" style={{ background: "linear-gradient(160deg, var(--card-2), var(--card))", border: "1px solid var(--card-border)" }}>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold mb-4" style={{ color: "var(--cream)" }}>Find the home. We&apos;ll handle the move.</h2>
          <p className="text-[0.95rem] mb-7 max-w-[440px] mx-auto" style={{ color: "var(--text-2)" }}>Search, rent, clean and move, all with Cribs.</p>
          <Link href="/#download" className="btn-gold">Get the App <ArrowRight size={18} /></Link>
        </div>
      </section>
    </PageShell>
  );
}
