import { pageMeta } from "@/lib/seo";
import SimplePage, { Block } from "@/components/SimplePage";

export const metadata = pageMeta({
  title: "Contact Us",
  description: "Questions, feedback or need a hand? Get in touch with the Cribs team.",
  path: "/contact",
});

export default function Contact() {
  return (
    <SimplePage eyebrow="Contact Us" title="Get in touch" desc="Questions, feedback, or need a hand? We're here to help.">
      <Block heading="Email">
        General enquiries: <a href="mailto:hello@cribshq.app" className="arrow-link !inline !text-[0.95rem] !font-semibold">hello@cribshq.app</a><br />
        Support: <a href="mailto:support@cribshq.app" className="arrow-link !inline !text-[0.95rem] !font-semibold">support@cribshq.app</a>
      </Block>
      <Block heading="Response time">
        We reply to every message within one working day (Monday to Friday, 9am to 6pm WAT).
      </Block>
      <Block heading="Office">
        Lagos, Nigeria
      </Block>
    </SimplePage>
  );
}