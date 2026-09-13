import { House, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const COLS = [
  { title: "Explore", links: ["How it works", "For Tenants", "For Landlords", "About Us", "Blog"] },
  { title: "Support", links: ["Help Center", "Safety Tips", "Terms of Use", "Privacy Policy", "Contact Us"] },
  { title: "Get Started", links: ["Find a Home", "List Property", "Download App", "Create Account"] },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--card-border)" }} className="pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 pb-12">
          <div>
            <div className="flex items-center gap-2 text-[1.35rem] font-extrabold mb-[0.85rem]" style={{ color: "var(--cream)" }}>
              <span className="w-7 h-7 rounded-[7px] flex items-center justify-center" style={{ background: "var(--gold)", color: "var(--bg)" }}><House size={16} /></span>
              Cribs
            </div>
            <p className="text-[0.8rem] leading-[1.6] max-w-[250px]" style={{ color: "var(--dim)" }}>Bridging the gap between landlords and tenants for better living.</p>
            <div className="flex gap-[0.6rem] mt-5">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center transition-all" style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--text)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "none"; }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="text-[0.62rem] font-bold uppercase tracking-[2px] mb-4" style={{ color: "var(--dim)" }}>{col.title}</div>
              {col.links.map((l) => (
                <a key={l} href="#" className="block text-[0.82rem] mb-[0.55rem] transition-colors" style={{ color: "var(--text)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}>{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="pt-6 flex justify-between flex-wrap gap-2 text-[0.75rem]" style={{ borderTop: "1px solid var(--card-border)", color: "var(--dim)" }}>
          <span>© 2026 Cribs. All rights reserved.</span>
          <span>Made in Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}