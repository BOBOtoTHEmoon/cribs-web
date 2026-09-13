import SimplePage, { Block } from "@/components/SimplePage";

export default function Safety() {
  return (
    <SimplePage eyebrow="Safety Tips" title="Rent safely on Cribs" desc="Follow these tips to keep your renting experience secure.">
      <Block heading="Always pay through the platform">
        Never send money outside Cribs. Payments made through the app are protected and traceable.
      </Block>
      <Block heading="Inspect before you commit">
        Use virtual tours or book a physical inspection before making any payment. Never rent a place you haven't seen.
      </Block>
      <Block heading="Keep communication in-app">
        Chat with landlords through Cribs so there's a record of everything agreed.
      </Block>
      <Block heading="Watch for red flags">
        Be cautious of deals that seem too good to be true, requests for large upfront cash payments, or landlords who refuse inspections.
      </Block>
      <Block heading="Report anything suspicious">
        If a listing or user seems off, report it in the app or email support@cribs.ng.
      </Block>
    </SimplePage>
  );
}