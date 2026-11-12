import { IcUsers, IcSearchHome, IcShield, IcChat } from "./CribsIcons";

const CARDS = [
  { icon: IcUsers, title: "Everyone Connected", desc: "Tenants, landlords and verified agents on one platform. Every fee shown upfront.", d: "" },
  { icon: IcSearchHome, title: "Easy Search", desc: "Find the right home in the right location, faster.", d: "reveal-d1" },
  { icon: IcShield, title: "Verified & Trusted", desc: "Every listing is verified for your safety and peace of mind.", d: "reveal-d2" },
  { icon: IcChat, title: "Seamless Communication", desc: "Chat, negotiate and close deals all in one place.", d: "reveal-d3" },
];

export default function Experience() {
  return (
    <section id="how" className="py-[clamp(4.5rem,10vh,7.5rem)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="reveal text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[2.5px] mb-4" style={{ color: "var(--gold)" }}>
             Built to Bridge the Gap
          </div>
          <h2 className="text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold tracking-[-1px] mb-[0.85rem]" style={{ color: "var(--cream)" }}>
            A better experience for everyone
          </h2>
          <p className="text-base max-w-[480px] mx-auto leading-[1.7]" style={{ color: "var(--text-2)" }}>
            Cribs makes renting simple, efficient and stress-free for both tenants and landlords.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className={`reveal card-h ${c.d} p-5 sm:p-9 sm:px-6 rounded-[16px] relative overflow-hidden`} style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
                <span className="ic mb-4 sm:mb-5"><Icon size={34} /></span>
                <div className="text-[0.9rem] sm:text-[0.95rem] font-bold mb-2 leading-snug" style={{ color: "var(--cream)" }}>{c.title}</div>
                <div className="text-[0.78rem] sm:text-[0.82rem] leading-[1.6]" style={{ color: "var(--text)" }}>{c.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}