import { Apple, Play, Bell, Heart, Lock, MapPin } from "lucide-react";

const FEATURES = [
  { icon: Bell, title: "Instant Notifications", desc: "Get real-time updates on new listings and messages." },
  { icon: Heart, title: "Save Favorites", desc: "Save properties you love and come back anytime." },
  { icon: Lock, title: "Secure & Private", desc: "Your data and conversations are always protected." },
];

export default function AppSection() {
  return (
    <section className="py-[clamp(4.5rem,10vh,7.5rem)]" style={{ borderTop: "1px solid var(--card-border)" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="reveal relative overflow-hidden rounded-[24px] p-[clamp(2.5rem,5vw,4rem)] grid lg:grid-cols-[auto_1fr_1fr] gap-12 items-center" style={{ background: "linear-gradient(160deg, var(--card-2) 0%, var(--card) 100%)", border: "1px solid var(--card-border)" }}>
          <div className="absolute top-[-40%] left-[10%] w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, var(--gold-glow), transparent 70%)" }} />

          {/* phone */}
          <div className="w-[230px] relative z-[2] mx-auto rounded-[34px]" style={{ background: "linear-gradient(160deg,#18181B,#121214)", border: "1.5px solid var(--card-border)", boxShadow: "0 40px 90px rgba(0,0,0,0.6)" }}>
            <div className="w-[90px] h-[24px] mx-auto rounded-b-[16px]" style={{ background: "#000" }} />
            <div className="p-[0.7rem]">
              <div className="h-[115px] rounded-[10px] mb-[0.6rem] overflow-hidden relative flex items-center justify-center" style={{ background: "var(--card-border)" }}>
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80" alt="" className="w-full h-full object-cover opacity-50" />
                <MapPin size={24} className="absolute" style={{ color: "var(--gold)", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }} />
              </div>
              <div className="flex gap-[0.6rem] p-[0.6rem] rounded-[10px]" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                <div className="w-[54px] h-[46px] rounded-[7px] overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[0.62rem] font-bold" style={{ color: "var(--cream)" }}>2 Bedroom Flat</div>
                  <div className="text-[0.62rem] font-bold mt-[3px]" style={{ color: "var(--gold)" }}>₦800,000 /yr</div>
                  <div className="text-[0.5rem] mt-[3px] flex gap-[0.4rem]" style={{ color: "var(--dim)" }}><span>2 beds</span>·<span>2 baths</span>·<span>Parking</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* text */}
          <div className="relative z-[2] text-center lg:text-left">
            <div className="text-[0.65rem] font-bold uppercase tracking-[2.5px] mb-4" style={{ color: "var(--gold)" }}>Take Renting Further</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.2] tracking-[-0.5px] mb-4" style={{ color: "var(--cream)" }}>Everything you need, right in your pocket.</h2>
            <p className="text-[0.9rem] leading-[1.7] mb-7 max-w-[340px] mx-auto lg:mx-0" style={{ color: "var(--text-2)" }}>Download the Cribs app and enjoy a seamless experience anytime, anywhere.</p>
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <button className="inline-flex items-center gap-[0.6rem] px-[1.3rem] py-[0.7rem] rounded-[10px] border-0 cursor-pointer transition-transform hover:-translate-y-[2px]" style={{ background: "var(--cream)", color: "var(--bg)" }}>
                <Apple size={24} />
                <span className="text-left"><span className="block text-[0.55rem] font-medium opacity-70">Download on the</span><span className="text-[0.82rem] font-bold">App Store</span></span>
              </button>
              <button className="inline-flex items-center gap-[0.6rem] px-[1.3rem] py-[0.7rem] rounded-[10px] border-0 cursor-pointer transition-transform hover:-translate-y-[2px]" style={{ background: "var(--cream)", color: "var(--bg)" }}>
                <Play size={24} />
                <span className="text-left"><span className="block text-[0.55rem] font-medium opacity-70">Get it on</span><span className="text-[0.82rem] font-bold">Google Play</span></span>
              </button>
            </div>
          </div>

          {/* features */}
          <div className="relative z-[2] flex flex-col gap-6 max-w-[340px] mx-auto lg:mx-0">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-[0.9rem] items-start">
                  <div className="w-10 h-10 rounded-[11px] flex-shrink-0 flex items-center justify-center" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}><Icon size={18} /></div>
                  <div>
                    <div className="text-[0.85rem] font-bold mb-[0.2rem]" style={{ color: "var(--cream)" }}>{f.title}</div>
                    <div className="text-[0.76rem] leading-[1.5]" style={{ color: "var(--text)" }}>{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}