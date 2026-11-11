import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import HowItWorksStepper from "@/components/HowItWorksStepper";

export const metadata = pageMeta({
  title: "How It Works",
  description: "From search to move-in: find verified homes, chat with landlords, inspect, pay securely and move in with Cribs.",
  path: "/how-it-works",
});

export default function HowItWorks() {
  return (
    <PageShell>
      <PageHero eyebrow="How It Works" title="Renting made simple, from search to move-in" desc="Cribs removes the friction, the middlemen, and the guesswork. Here's how it works from start to finish." />
      <section className="max-w-[1100px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <HowItWorksStepper />
      </section>
    </PageShell>
  );
}
