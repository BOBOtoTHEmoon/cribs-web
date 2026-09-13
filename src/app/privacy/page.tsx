import SimplePage, { Block } from "@/components/SimplePage";

export default function Privacy() {
  return (
    <SimplePage eyebrow="Legal" title="Privacy Policy" desc="How we collect, use, and protect your information.">
      <Block heading="Information We Collect">
        We collect information you provide directly, such as your name, contact details, and listing information, plus usage data to improve the platform.
      </Block>
      <Block heading="How We Use It">
        Your information is used to operate the platform, connect tenants and landlords, process payments, and keep the service secure.
      </Block>
      <Block heading="Data Protection">
        We use industry-standard security measures to protect your data. Your conversations and personal details are never sold.
      </Block>
      <Block heading="Your Rights">
        You can access, update, or request deletion of your personal data at any time by contacting support@cribs.ng.
      </Block>
      <Block heading="Contact">
        Questions about privacy? Email privacy@cribs.ng.
      </Block>
    </SimplePage>
  );
}