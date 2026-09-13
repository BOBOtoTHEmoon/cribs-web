import SimplePage, { Block } from "@/components/SimplePage";

export default function Help() {
  return (
    <SimplePage eyebrow="Help Center" title="How can we help?" desc="Answers to the most common questions from tenants and landlords.">
      <Block heading="How do I know a listing is real?">
        Every property on Cribs is inspected and verified by our team before it goes live. Look for the verified badge on each listing.
      </Block>
      <Block heading="Are there any agent fees?">
        No. Cribs connects you directly with landlords, so there are no agent or middleman fees, ever.
      </Block>
      <Block heading="How do payments work?">
        Payments are made securely through the platform and held safely until you confirm move-in, protecting both tenants and landlords.
      </Block>
      <Block heading="How do I list my property?">
        Head to the For Landlords page and tap List Your Property. It's free and takes under five minutes.
      </Block>
      <Block heading="Still need help?">
        Reach us anytime at support@cribs.ng and we'll get back to you quickly.
      </Block>
    </SimplePage>
  );
}