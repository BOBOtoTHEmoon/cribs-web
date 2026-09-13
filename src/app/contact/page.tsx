import SimplePage, { Block } from "@/components/SimplePage";

export default function Contact() {
  return (
    <SimplePage eyebrow="Contact Us" title="Get in touch" desc="Questions, feedback, or need a hand? We're here to help.">
      <Block heading="Email">
        General enquiries: hello@cribs.ng<br />
        Support: support@cribs.ng
      </Block>
      <Block heading="Phone">
        +234 800 000 0000 (Mon–Fri, 9am–6pm WAT)
      </Block>
      <Block heading="Office">
        Lagos, Nigeria
      </Block>
    </SimplePage>
  );
}