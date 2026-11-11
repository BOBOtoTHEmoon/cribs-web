import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { IcFlag, IcHorizon, IcGem } from "@/components/CribsIcons";

const VALUES = [
  { icon: IcFlag, title: "Our Mission", desc: "To make renting in Nigeria transparent, safe, and stress-free by connecting tenants and landlords directly, cutting out the middlemen who make housing harder than it should be." },
  { icon: IcHorizon, title: "Our Vision", desc: "A future where anyone can find a home or list a property with total confidence, backed by verification, technology, and trust at every step." },
  { icon: IcGem, title: "Our Values", desc: "Honesty over hustle. Transparency over shortcuts. People over profit. We build for the renter and the landlord, not the agent taking a cut." },
];

export const metadata = pageMeta({
  title: "About Us",
  description: "Cribs is fixing how Nigeria rents: verified listings, real landlords and no middlemen. Learn about our mission, vision and values.",
  path: "/about",
});

export default function About() {
  return (
    <PageShell>
      <PageHero eyebrow="About Us" title="We're fixing how Nigeria rents" desc="Cribs was born out of frustration with a broken system. We're building the platform we always wished existed." />
      <section className="max-w-[900px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <div className="reveal text-[1.05rem] leading-[1.9] text-center" style={{ color: "var(--text-2)" }}>
          Finding a home in Lagos shouldn't mean chasing agents, paying fees for properties that don't exist, or being shown apartments that look nothing like the photos. We lived that frustration, and we knew there had to be a better way. So we built Cribs, a platform where every listing is verified, every landlord is real, and every naira is protected. No middlemen. No games. Just homes and the people who need them.
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="reveal panel-h rounded-[20px] overflow-hidden grid md:grid-cols-3" style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className={`group flex md:flex-col gap-4 md:gap-0 p-5 sm:p-8 transition-colors duration-300 hover:bg-[var(--card-2)] ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""}`}
                style={{ borderColor: "var(--card-border)" }}
              >
                <span className="ic flex-shrink-0 md:mb-5 transition-transform duration-500 group-hover:-translate-y-[3px]"><Icon size={34} /></span>
                <div>
                  <div className="text-[1.02rem] sm:text-[1.1rem] font-bold mb-[0.35rem]" style={{ color: "var(--cream)" }}>{v.title}</div>
                  <div className="text-[0.84rem] sm:text-[0.88rem] leading-[1.6]" style={{ color: "var(--text)" }}>{v.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}