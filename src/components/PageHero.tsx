export default function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-[-30%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, var(--gold-glow) 0%, transparent 65%)" }} />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 py-[clamp(4rem,9vh,7rem)] relative z-[2] text-center">
        <div className="reveal inline-block text-[0.68rem] font-bold uppercase tracking-[2.5px] mb-4" style={{ color: "var(--gold)" }}>{eyebrow}</div>
        <h1 className="reveal reveal-d1 text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold tracking-[-1.5px] mb-5 max-w-[800px] mx-auto" style={{ color: "var(--cream)" }}>{title}</h1>
        <p className="reveal reveal-d2 text-[1.05rem] leading-[1.7] max-w-[520px] mx-auto" style={{ color: "var(--text-2)" }}>{desc}</p>
      </div>
    </section>
  );
}