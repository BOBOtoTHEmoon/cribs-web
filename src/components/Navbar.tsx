"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Smartphone, Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "For Tenants", href: "/tenants" },
  { label: "For Landlords", href: "/landlords" },
  { label: "About Us", href: "/about" },
];

const MOBILE_LINKS = [...LINKS, { label: "Blog", href: "/blog" }, { label: "Help Center", href: "/help" }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-colors duration-300"
      style={{
        background: open ? "rgba(10,10,11,0.97)" : scrolled ? "rgba(10,10,11,0.8)" : "transparent",
        backdropFilter: scrolled || open ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled || open ? "blur(24px)" : "none",
        borderBottom: `1px solid ${scrolled || open ? "var(--card-border)" : "transparent"}`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 h-[68px] flex items-center justify-between">
        <Logo onClick={close} />

        <div className="hidden md:flex gap-9">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-lnk text-[0.85rem] font-medium ${pathname === l.href ? "on" : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/#download" className="btn-gold hidden sm:inline-flex !px-[1.4rem] !py-[0.6rem] !text-[0.85rem] !rounded-[9px]">
            <Smartphone size={16} /> Get the App
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-[42px] h-[42px] rounded-[10px] flex items-center justify-center transition-colors"
            style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--cream)" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`mnav md:hidden ${open ? "open" : ""}`}>
        <div>
          <div className="px-5 pt-2 pb-6">
            <div className="grid grid-cols-2 gap-2">
              {MOBILE_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="px-4 py-[0.85rem] rounded-[11px] text-[0.9rem] font-semibold transition-colors"
                  style={{
                    background: pathname === l.href ? "var(--gold-dim)" : "var(--card)",
                    border: `1px solid ${pathname === l.href ? "rgba(200,168,78,0.35)" : "var(--card-border)"}`,
                    color: pathname === l.href ? "var(--gold)" : "var(--cream)",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link href="/#download" onClick={close} className="btn-gold w-full mt-3">
              <Smartphone size={16} /> Get the App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
