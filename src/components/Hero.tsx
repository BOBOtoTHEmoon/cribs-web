import { Search, HousePlus, Hand, Heart, MapPin, BedDouble, Bath, Car, BadgeCheck, ShieldCheck, MessagesSquare } from "lucide-react";
export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-10 overflow-hidden">
      <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center pt-[150px] pb-[90px]">
        {/* glow */}
        <div className="absolute top-[5%] right-[-15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] pointer-events-none z-0" style={{ background: "radial-gradient(circle, var(--gold-glow) 0%, transparent 65%)" }} />

        {/* content */}
        <div className="relative z-[2] reveal text-center lg:text-left">
          <h1 className="text-[clamp(2.7rem,5.2vw,4.3rem)] font-extrabold leading-[1.05] tracking-[-1.5px] mb-6" style={{ color: "var(--cream)" }}>
            The smarter way to rent and <span style={{ color: "var(--gold)" }}>list properties.</span>
          </h1>

                  <p className="text-[1.05rem] leading-[1.7] max-w-[430px] mb-9 mx-auto lg:mx-0" style={{ color: "var(--text-2)" }}>
            Cribs makes renting and property management simple. Verified listings, secure payments, and everything you need in one place.
          </p>

          <div className="flex gap-[0.6rem] sm:gap-[0.85rem] justify-center lg:justify-start">
            <button className="inline-flex items-center justify-center gap-2 px-[1.3rem] sm:px-[1.9rem] py-[0.85rem] sm:py-[0.95rem] rounded-[11px] text-[0.85rem] sm:text-[0.92rem] font-bold border-0 cursor-pointer transition-all whitespace-nowrap" style={{ background: "var(--gold)", color: "var(--bg)", boxShadow: "0 8px 30px rgba(200,168,78,0.15)" }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "none"; }}>
              <Search size={18} /> Find a Home
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-[1.3rem] sm:px-[1.9rem] py-[0.85rem] sm:py-[0.95rem] rounded-[11px] text-[0.85rem] sm:text-[0.92rem] font-semibold cursor-pointer transition-all whitespace-nowrap" style={{ background: "var(--card)", color: "var(--cream)", border: "1px solid var(--card-border)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--card-border-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "none"; }}>
              <HousePlus size={18} /> List Your Property
            </button>
          </div>
                    {/* trust row under buttons */}
          <div className="flex gap-8 mt-12 justify-center lg:justify-start flex-wrap">
            {[
              { icon: BadgeCheck, label: "Thousands of\nVerified Listings" },
              { icon: ShieldCheck, label: "Safe, Secure\n& Transparent" },
              { icon: MessagesSquare, label: "Direct Chat\nwith Landlords" },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-11 h-11 rounded-[12px] flex items-center justify-center" style={{ background: "var(--gold-dim)", border: "1px solid rgba(200,168,78,0.2)", color: "var(--gold)" }}>
                    <Icon size={20} />
                  </div>
                  <div className="text-[0.72rem] font-semibold leading-tight text-center lg:text-left whitespace-pre-line" style={{ color: "var(--text-2)" }}>{t.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* phones */}
        <div className="relative z-[2] reveal reveal-d2 flex justify-center items-center min-h-[440px] lg:min-h-[520px]">
          {/* main phone */}
          <div className="w-[260px] z-[2] rounded-[34px] relative" style={{ background: "linear-gradient(160deg,#18181B,#121214)", border: "1.5px solid var(--card-border)", boxShadow: "0 40px 90px rgba(0,0,0,0.6)" }}>
            <div className="w-[90px] h-[24px] mx-auto rounded-b-[16px] relative z-[3]" style={{ background: "#000" }} />
            <div className="p-[0.85rem]">
              <div className="flex justify-between items-center mb-4 pt-1">
                <div>
                  <div className="text-[0.9rem] font-bold flex items-center gap-1" style={{ color: "var(--cream)" }}>
                    Hello, Sarah <Hand size={14} style={{ color: "var(--gold)" }} />
                  </div>
                  <div className="text-[0.72rem] mt-[3px]" style={{ color: "var(--text)" }}>Find your next home</div>
                </div>
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[0.7rem] font-bold" style={{ background: "var(--gold)", color: "var(--bg)" }}>SA</div>
              </div>

              <div className="flex items-center gap-[0.45rem] rounded-[11px] px-[0.8rem] py-[0.65rem] text-[0.72rem] mb-[0.9rem]" style={{ background: "var(--surface)", border: "1px solid var(--card-border)", color: "var(--dim)" }}>
                <Search size={14} style={{ color: "var(--gold)" }} /> Search by location
              </div>

              <div className="flex gap-[0.4rem] mb-4">
                {[["Lekki", true], ["Ikoyi", false], ["Yaba", false], ["Surulere", false]].map(([t, on]) => (
                  <span key={t as string} className="text-[0.62rem] font-semibold px-[0.7rem] py-[0.35rem] rounded-[20px] whitespace-nowrap" style={on ? { background: "var(--gold)", color: "var(--bg)" } : { background: "var(--surface)", color: "var(--text)", border: "1px solid var(--card-border)" }}>
                    {t as string}
                  </span>
                ))}
              </div>

              <div className="text-[0.72rem] font-bold mb-[0.6rem]" style={{ color: "var(--cream)" }}>Recommended for you</div>

              <div className="rounded-[12px] overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                <div className="h-[105px] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80" alt="" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)", color: "var(--cream)" }}>
                    <Heart size={12} />
                  </div>
                </div>
                <div className="px-[0.75rem] py-[0.7rem]">
                  <div className="text-[0.8rem] font-bold" style={{ color: "var(--gold)" }}>₦1,200,000 <span className="font-normal text-[0.6rem]" style={{ color: "var(--dim)" }}>/year</span></div>
                  <div className="text-[0.72rem] font-semibold mt-[3px]" style={{ color: "var(--cream)" }}>3 Bedroom Apartment</div>
                  <div className="text-[0.6rem] mt-[2px] flex items-center gap-1" style={{ color: "var(--dim)" }}><MapPin size={10} /> Lekki Phase 1, Lagos</div>
                  <div className="flex gap-[0.7rem] mt-[0.5rem] pt-[0.5rem] text-[0.58rem]" style={{ borderTop: "1px solid var(--card-border)", color: "var(--text)" }}>
                    <span className="flex items-center gap-1"><BedDouble size={11} style={{ color: "var(--gold)" }} /> 3 Beds</span>
                    <span className="flex items-center gap-1"><Bath size={11} style={{ color: "var(--gold)" }} /> 2 Baths</span>
                    <span className="flex items-center gap-1"><Car size={11} style={{ color: "var(--gold)" }} /> Parking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* side phone */}
          <div className="hidden lg:block absolute w-[215px] right-[-25px] top-1/2 z-[1] opacity-90 rounded-[34px]" style={{ background: "linear-gradient(160deg,#18181B,#121214)", border: "1.5px solid var(--card-border)", boxShadow: "0 40px 90px rgba(0,0,0,0.6)", transform: "translateY(-42%)" }}>
            <div className="w-[90px] h-[24px] mx-auto rounded-b-[16px]" style={{ background: "#000" }} />
            <div className="p-[0.7rem]">
              <div className="text-[0.72rem] font-bold mb-[0.7rem]" style={{ color: "var(--cream)" }}>Messages</div>
              {[["MA", "Mr. Adeyemi", "Hi, is the 3-bed in Lekki still available?"], ["SJ", "Sarah Johnson", "Great! I'll be available for inspection this weekend."], ["DO", "David O.", "Thanks for reaching out. The rent includes service charge."], ["EB", "Esther B.", "When can we schedule the virtual tour?"]].map(([i, n, m]) => (
                <div key={n} className="flex gap-2 items-start mb-[0.7rem]">
                  <div className="w-[26px] h-[26px] rounded-full flex-shrink-0 flex items-center justify-center text-[0.55rem] font-bold" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}>{i}</div>
                  <div className="flex-1 rounded-[9px] px-[0.65rem] py-[0.45rem]" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
                    <div className="text-[0.58rem] font-bold" style={{ color: "var(--cream)" }}>{n}</div>
                    <div className="text-[0.55rem] mt-[2px] leading-[1.45]" style={{ color: "var(--text)" }}>{m}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}