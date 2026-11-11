import Link from "next/link";

export function LogoMark({ strokeWidth = 5, className = "" }: { strokeWidth?: number; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round">
        <path d="M50 94 L23.9 60.2 A33 33 0 1 1 76.1 60.2 Z" />
        <path d="M28.5 44 L50 24.5 L71.5 44" />
        <path d="M35 38.5 V62 H45 V55 A5 5 0 0 1 55 55 V62 H65 V38.5" />
      </g>
    </svg>
  );
}

export default function Logo({ size = "md", onClick }: { size?: "md" | "lg"; onClick?: () => void }) {
  const lg = size === "lg";
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Cribs home"
      className="group inline-flex items-center gap-[0.55rem]"
      style={{ color: "var(--gold)" }}
    >
      <span className={`${lg ? "w-[40px] h-[40px]" : "w-[34px] h-[34px]"} block transition-transform duration-500 group-hover:-translate-y-[3px]`}>
        <LogoMark strokeWidth={5.5} />
      </span>
      <span className={`font-anton ${lg ? "text-[2rem]" : "text-[1.7rem]"} leading-none tracking-[0.5px] flex items-end`}>
        CRIBS
        <span className={`${lg ? "w-[7px] h-[7px]" : "w-[6px] h-[6px]"} rounded-full ml-[3px] mb-[3px]`} style={{ background: "var(--gold)" }} />
      </span>
    </Link>
  );
}
