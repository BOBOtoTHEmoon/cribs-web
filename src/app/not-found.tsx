import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import HeroBg from "@/components/HeroBg";
import { LogoMark } from "@/components/Logo";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative overflow-hidden -mt-[68px] pt-[68px]">
        <HeroBg />
        <div className="relative z-[2] max-w-[700px] mx-auto px-5 sm:px-10 py-[clamp(5rem,14vh,9rem)] text-center">
          <div className="w-20 h-20 mx-auto mb-6 float-slow" style={{ color: "var(--gold)" }}>
            <LogoMark strokeWidth={4} />
          </div>
          <div className="font-anton text-[clamp(4rem,10vw,6.5rem)] leading-none mb-3" style={{ color: "var(--gold)" }}>404</div>
          <h1 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-[-0.5px] mb-4" style={{ color: "var(--cream)" }}>
            This crib doesn&apos;t exist
          </h1>
          <p className="text-[1rem] leading-[1.7] max-w-[420px] mx-auto mb-9" style={{ color: "var(--text-2)" }}>
            The page you&apos;re looking for has moved or was never listed. Let&apos;s get you back home.
          </p>
          <Link href="/" className="btn-gold">
            Back to home <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
