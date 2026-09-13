import { House, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const EXPLORE = [
  { label: "How it works", href: "/how-it-works" },
  { label: "For Tenants", href: "/tenants" },
  { label: "For Landlords", href: "/landlords" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const SUPPORT = [
  { label: "Help Center", href: "/help" },
  { label: "Safety Tips", href: "/safety" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact Us", href: "/contact" },
];

const GET_STARTED = [
  { label: "Find a Home", href: "/tenants" },
  { label: "List Property", href: "/landlords" },
  { label: "Download App", href: "#" },
  { label: "Create Account", href: "#" },
];

function LinkCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="text-[0.62rem] font-bold uppercase tracking-[2px] mb-4" style={{ color: "var(--dim)" }}>{title}</div>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="block text-[0.82rem] mb-[0.55rem] transition-colors" style={{ color: "var(--text)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}>{l.label}</Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--card-border)" }} className="pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-x-6 gap-y-10 pb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-[1.35rem] font-extrabold mb-[0.85rem]" style={{ color: "var(--cream)" }}>
              <span className="w-7 h-7 rounded-[7px] flex items-center justify-center" style={{ background: "var(--gold)", color: "var(--bg)" }}><House size={16} /></span>
              Cribs
            </Link>
            <p className="text-[0.8rem] leading-[1.6] max-w-[250px]" style={{ color: "var(--dim)" }}>Bridging the gap between landlords and tenants for better living.</p>
            <div className="flex gap-[0.6rem] mt-5">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center transition-all" style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--text)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "none"; }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links — 2x2 grid on mobile, inline row on desktop */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:contents">
            <LinkCol title="Explore" links={EXPLORE} />
            <LinkCol title="Support" links={SUPPORT} />
            <div className="col-span-2 md:col-auto">
              <LinkCol title="Get Started" links={GET_STARTED} />
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[0.75rem] text-center" style={{ borderTop: "1px solid var(--card-border)", color: "var(--dim)" }}>
          <span>© 2026 Cribs. All rights reserved.</span>
          <span>Made in Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}