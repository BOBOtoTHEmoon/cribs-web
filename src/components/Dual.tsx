import { UserSearch, Building2, Check, ArrowRight, Search } from "lucide-react";

export default function Dual() {
  return (
    <section id="tenants" className="max-w-[1200px] mx-auto px-5 sm:px-10">
      <div className="grid lg:grid-cols-2 gap-6 pb-[clamp(4.5rem,10vh,7.5rem)]">
        {/* TENANTS */}
        <div className="reveal p-10 rounded-[20px] grid sm:grid-cols-[1.15fr_0.85fr] gap-6 items-center transition-colors" style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
          <div>
            <div className="inline-flex items-center gap-[0.4rem] text-[0.62rem] font-bold uppercase tracking-[2px] mb-4 px-[0.7rem] py-[0.3rem] rounded-[6px]" style={{ color: "var(--gold)", background: "var(--gold-dim)" }}>
              <UserSearch size={13} /> For Tenants
            </div>
            <h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-extrabold leading-[1.2] tracking-[-0.5px] mb-[0.9rem]" style={{ color: "var(--cream)" }}>Find a place you&apos;ll love.</h3>
            <p className="text-[0.85rem] leading-[1.7] mb-6" style={{ color: "var(--text)" }}>Search thousands of homes and apartments across your favorite locations. Connect directly with landlords and move in with ease.</p>
            <ul className="list-none mb-7">
              {["Search by location, price & more", "View photos, details & amenities", "Chat directly with landlords", "No hidden fees"].map((li) => (
                <li key={li} className="text-[0.82rem] py-[0.45rem] flex items-center gap-[0.6rem]" style={{ color: "var(--text-2)" }}>
                  <span className="w-5 h-5 rounded-[6px] flex items-center justify-center flex-shrink-0" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}><Check size={13} /></span>
                  {li}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-[0.45rem] text-[0.85rem] font-bold" style={{ color: "var(--gold)" }}>Find a Home <ArrowRight size={16} /></a>
          </div>
          <div className="rounded-[16px] overflow-hidden aspect-[3/4] relative" style={{ background: "var(--surface)", border: "1px solid var(--card-border)" }}>
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80" alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to top, rgba(10,10,11,0.95), transparent)" }}>
              <div className="flex items-center gap-[0.4rem] rounded-[10px] px-[0.75rem] py-[0.6rem] text-[0.7rem]" style={{ background: "rgba(20,20,22,0.9)", backdropFilter: "blur(8px)", border: "1px solid var(--card-border)", color: "var(--text)" }}>
                <Search size={14} style={{ color: "var(--gold)" }} /> Where do you want to live?
              </div>
            </div>
          </div>
        </div>

        {/* LANDLORDS */}
        <div id="landlords" className="reveal reveal-d1 p-10 rounded-[20px] grid sm:grid-cols-[1.15fr_0.85fr] gap-6 items-center transition-colors" style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
          <div>
            <div className="inline-flex items-center gap-[0.4rem] text-[0.62rem] font-bold uppercase tracking-[2px] mb-4 px-[0.7rem] py-[0.3rem] rounded-[6px]" style={{ color: "var(--gold)", background: "var(--gold-dim)" }}>
              <Building2 size={13} /> For Landlords
            </div>
            <h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-extrabold leading-[1.2] tracking-[-0.5px] mb-[0.9rem]" style={{ color: "var(--cream)" }}>List your property. Find the right tenant.</h3>
            <p className="text-[0.85rem] leading-[1.7] mb-6" style={{ color: "var(--text)" }}>Reach thousands of potential tenants looking for quality homes. List your property, manage inquiries and close deals faster.</p>
            <ul className="list-none mb-7">
              {["List your property in minutes", "Showcase with photos & details", "Receive inquiries directly", "Manage everything in one place"].map((li) => (
                <li key={li} className="text-[0.82rem] py-[0.45rem] flex items-center gap-[0.6rem]" style={{ color: "var(--text-2)" }}>
                  <span className="w-5 h-5 rounded-[6px] flex items-center justify-center flex-shrink-0" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}><Check size={13} /></span>
                  {li}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-[0.45rem] text-[0.85rem] font-bold" style={{ color: "var(--gold)" }}>List Your Property <ArrowRight size={16} /></a>
          </div>
          <div className="rounded-[16px] overflow-hidden aspect-[3/4] flex items-center justify-center" style={{ background: "linear-gradient(160deg, var(--card-2), var(--surface))", border: "1px solid var(--card-border)" }}>
            <div className="text-center px-6 py-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--gold)", color: "var(--bg)", boxShadow: "0 0 30px var(--gold-glow)" }}><Check size={26} /></div>
              <div className="text-base font-bold mb-2" style={{ color: "var(--cream)" }}>Property Listed!</div>
              <div className="text-[0.72rem] leading-[1.5] mb-4" style={{ color: "var(--text)" }}>Your property is live and visible to thousands of potential tenants.</div>
              <span className="inline-block text-[0.72rem] font-semibold px-4 py-[0.45rem] rounded-[7px]" style={{ color: "var(--gold)", border: "1px solid rgba(200,168,78,0.3)" }}>View Listing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}