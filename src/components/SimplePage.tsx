import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[1.15rem] font-bold mb-3" style={{ color: "var(--cream)" }}>{heading}</h2>
      <div style={{ color: "var(--text-2)" }}>{children}</div>
    </div>
  );
}

export default function SimplePage({ eyebrow, title, desc, children }: { eyebrow: string; title: string; desc: string; children?: React.ReactNode }) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} desc={desc} />
      <section className="max-w-[820px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="reveal text-[0.95rem] leading-[1.9]" style={{ color: "var(--text-2)" }}>
          {children}
        </div>
      </section>
    </PageShell>
  );
}