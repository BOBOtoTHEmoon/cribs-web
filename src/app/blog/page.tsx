import { pageMeta } from "@/lib/seo";
import SimplePage from "@/components/SimplePage";

export const metadata = pageMeta({
  title: "Blog",
  description: "Guides, market insights and renting tips for Lagos from the Cribs team. Coming soon.",
  path: "/blog",
});

export default function Blog() {
  return (
    <SimplePage eyebrow="Blog" title="Coming soon" desc="We're working on guides, market insights, and renting tips for Lagos. Check back shortly.">
      <div className="text-center py-8" style={{ color: "var(--text)" }}>
        Our first articles are on the way. Check back soon.
      </div>
    </SimplePage>
  );
}