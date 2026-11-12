import { pageMeta } from "@/lib/seo";
import SimplePage, { Block } from "@/components/SimplePage";

export const metadata = pageMeta({
  title: "Help Center",
  description: "Answers to the most common questions from tenants and landlords using Cribs.",
  path: "/help",
});

export default function Help() {
  return (
    <SimplePage eyebrow="Help Center" title="How can we help?" desc="Answers to the most common questions from tenants and landlords.">
      <Block heading="How do I know a listing is real?">
        Every property on Cribs is inspected and verified by our team before it goes live. Look for the verified badge on each listing.
      </Block>
      <Block heading="Are there agent fees?">
        Some properties are listed by verified agents and some directly by landlords. Where an agent fee applies, it is shown clearly on the listing before you inspect, so there are never any surprises.
      </Block>
      <Block heading="How do payments work?">
        Payments are made securely through the platform and held safely until you confirm move-in, protecting both tenants and landlords.
      </Block>
      <Block heading="How do I list my property?">
        Head to the For Landlords page and tap List Your Property. It's free and takes under five minutes.
      </Block>
      <Block heading="Still need help?">
        Reach us anytime at support@cribshq.app and we'll get back to you quickly.
      </Block>
    </SimplePage>
  );
}