import SimplePage from "@/components/SimplePage";

export default function Blog() {
  return (
    <SimplePage eyebrow="Blog" title="Coming soon" desc="We're working on guides, market insights, and renting tips for Lagos. Check back shortly.">
      <div className="text-center py-8" style={{ color: "var(--text)" }}>
        Our first articles are on the way. In the meantime, follow us on social media for updates.
      </div>
    </SimplePage>
  );
}