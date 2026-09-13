"use client";
import { useEffect, useState } from "react";
import { House, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-colors duration-300"
      style={{
        background: "rgba(10,10,11,0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: `1px solid ${scrolled ? "var(--card-border)" : "transparent"}`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[1.4rem] font-extrabold tracking-tight" style={{ color: "var(--cream)" }}>
          <span className="w-[30px] h-[30px] rounded-lg flex items-center justify-center text-base" style={{ background: "var(--gold)", color: "var(--bg)" }}>
            <House size={18} />
          </span>
          Cribs
        </Link>

        <div className="hidden md:flex gap-9">
          {[
            { label: "How it works", href: "/how-it-works" },
            { label: "For Tenants", href: "/tenants" },
            { label: "For Landlords", href: "/landlords" },
            { label: "About Us", href: "/about" },
          ].map((l) => (
            <Link key={l.label} href={l.href} className="text-[0.85rem] font-medium transition-colors" style={{ color: "var(--text)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}>
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="inline-flex items-center gap-2 px-[1.4rem] py-[0.6rem] rounded-[9px] text-[0.85rem] font-bold border-0 cursor-pointer transition-all"
          style={{ background: "var(--gold)", color: "var(--bg)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-hover)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "none"; }}
        >
          <Smartphone size={16} /> Get the App
        </button>
      </div>
    </nav>
  );
}