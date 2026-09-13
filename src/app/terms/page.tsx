import SimplePage, { Block } from "@/components/SimplePage";

export default function Terms() {
  return (
    <SimplePage eyebrow="Legal" title="Terms of Use" desc="The rules and guidelines for using the Cribs platform.">
      <Block heading="Acceptance of Terms">
        By accessing or using Cribs, you agree to be bound by these Terms of Use and our Privacy Policy.
      </Block>
      <Block heading="Using the Platform">
        You agree to use Cribs only for lawful purposes and to provide accurate information in your listings and communications.
      </Block>
      <Block heading="Listings & Payments">
        Landlords are responsible for the accuracy of their listings. All payments should be made through the platform to remain protected.
      </Block>
      <Block heading="Account Responsibility">
        You are responsible for keeping your account credentials secure and for all activity under your account.
      </Block>
      <Block heading="Changes to These Terms">
        We may update these terms from time to time. Continued use of Cribs means you accept the updated terms.
      </Block>
    </SimplePage>
  );
}