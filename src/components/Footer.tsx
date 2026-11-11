import Link from "next/link";
import Logo from "./Logo";

const EXPLORE = [
  { label: "How it works", href: "/how-it-works" },
  { label: "For Tenants", href: "/tenants" },
  { label: "For Landlords", href: "/landlords" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Get the App", href: "/#download" },
];

const SUPPORT = [
  { label: "Help Center", href: "/help" },
  { label: "Safety Tips", href: "/safety" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="pt-14 pb-8" style={{ borderTop: "1px solid var(--card-border)" }}>
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 text-center">
        <div className="flex justify-center">
          <Logo size="lg" />
        </div>
        <p className="text-[0.85rem] leading-[1.6] max-w-[320px] mx-auto mt-3" style={{ color: "var(--dim)" }}>
          Bridging the gap between landlords and tenants for better living.
        </p>

        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 mt-8">
          {EXPLORE.map((l) => (
            <Link key={l.label} href={l.href} className="lnk text-[0.88rem] font-semibold">{l.label}</Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
          {SUPPORT.map((l) => (
            <Link key={l.label} href={l.href} className="lnk text-[0.78rem]">{l.label}</Link>
          ))}
        </div>

        <div className="mt-10 pt-6 text-[0.75rem]" style={{ borderTop: "1px solid var(--card-border)", color: "var(--dim)" }}>
          © {new Date().getFullYear()} Cribs. All rights reserved. Made in Lagos, Nigeria.
        </div>
      </div>
    </footer>
  );
}
