import Link from "next/link";
import { Search, HousePlus, BadgeCheck, ShieldCheck, MessagesSquare } from "lucide-react";
import HeroBg from "./HeroBg";
import IPhone from "./IPhone";
import { HomeScreen, ChatScreen } from "./AppScreens";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBg />
      <div className="relative z-[2] max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-12 items-center pt-[140px] lg:pt-[160px] pb-[100px] lg:pb-[120px]">
          {/* content */}
          <div className="reveal text-center lg:text-left">
            <h1 className="text-[clamp(2.7rem,5.2vw,4.3rem)] font-extrabold leading-[1.05] tracking-[-1.5px] mb-6" style={{ color: "var(--cream)" }}>
              The smarter way to rent and <span style={{ color: "var(--gold)" }}>list properties.</span>
            </h1>

            <p className="text-[1.05rem] leading-[1.7] max-w-[430px] mb-9 mx-auto lg:mx-0" style={{ color: "var(--text-2)" }}>
              Cribs makes renting and property management simple. Verified listings, secure payments, and everything you need in one place.
            </p>

            <div className="flex gap-[0.6rem] sm:gap-[0.85rem] justify-center lg:justify-start">
              <Link href="/tenants" className="btn-gold"><Search size={18} /> Find a Home</Link>
              <Link href="/landlords" className="btn-ghost"><HousePlus size={18} /> List Your Property</Link>
            </div>

            {/* trust row */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              {[
                { icon: BadgeCheck, label: "Verified\nListings Only" },
                { icon: ShieldCheck, label: "Safe, Secure\n& Transparent" },
                { icon: MessagesSquare, label: "Direct Chat\nwith Landlords" },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.label} className="group flex flex-col items-center lg:items-start gap-2">
                    <div className="w-11 h-11 rounded-[12px] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-[3px] group-hover:bg-[var(--gold)] group-hover:text-[var(--bg)]" style={{ background: "var(--gold-dim)", border: "1px solid rgba(200,168,78,0.2)", color: "var(--gold)" }}>
                      <Icon size={20} />
                    </div>
                    <div className="text-[0.72rem] font-semibold leading-tight text-center lg:text-left whitespace-pre-line" style={{ color: "var(--text-2)" }}>{t.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* phones */}
          <div className="reveal reveal-d2 relative flex justify-center items-center lg:pr-10">
            <div className="relative">
              <div className="float-slow relative z-[2]">
                <IPhone width={250} className="sm:hidden"><HomeScreen /></IPhone>
                <IPhone width={280} className="hidden sm:block"><HomeScreen /></IPhone>
              </div>
              <div className="hidden lg:block absolute z-[1] top-[12%] left-[62%] float-slower" style={{ filter: "brightness(0.82)" }}>
                <IPhone width={236} style={{ transform: "rotate(4deg)" }}><ChatScreen /></IPhone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
