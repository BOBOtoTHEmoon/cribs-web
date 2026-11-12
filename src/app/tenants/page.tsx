import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import PageShell from "@/components/PageShell";
import Bento, { SearchVisual, TourVisual } from "@/components/Bento";
import type { BentoItem } from "@/components/Bento";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { IcSearchHome, IcHomeCheck, IcChat, IcHeart, IcWallet, IcTour } from "@/components/CribsIcons";

const BENEFITS: BentoItem[] = [
  { icon: IcSearchHome, title: "Smart Search", desc: "Filter by location, price, bedrooms, and amenities to find exactly what you need.", visual: <SearchVisual /> },
  { icon: IcHomeCheck, title: "Verified Listings", desc: "Every property is inspected by our team. No fake photos, no scams." },
  { icon: IcChat, title: "Landlords & Agents", desc: "Chat with property owners and verified agents in one place. No runarounds." },
  { icon: IcHeart, title: "Save Favorites", desc: "Bookmark homes you love and compare them side by side anytime." },
  { icon: IcWallet, title: "Fees Shown Upfront", desc: "Rent, service charge and agent fees are shown before you inspect. What you see is what you pay." },
  { icon: IcTour, title: "Virtual Tours", desc: "Inspect properties remotely before you ever leave your house. Walk through every room from your phone.", visual: <TourVisual /> },
];

export const metadata = pageMeta({
  title: "For Tenants",
  description: "Find verified homes in Lagos, chat with landlords and verified agents, and see every fee upfront. No fake listings, no stress.",
  path: "/tenants",
});

export default function Tenants() {
  return (
    <PageShell>
      <PageHero eyebrow="For Tenants" title="Find a place you'll actually love" desc="Stop wasting weekends on fake listings and surprise fees. Cribs gives you verified homes, verified agents, and every cost upfront." />
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(3rem,7vh,5rem)]">
        <Bento items={BENEFITS} />
      </section>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-10 pb-[clamp(4rem,10vh,7rem)]">
        <div className="reveal rounded-[20px] p-[clamp(2.5rem,5vw,4rem)] text-center relative overflow-hidden panel-h" style={{ background: "linear-gradient(160deg, var(--card-2), var(--card))", border: "1px solid var(--card-border)" }}>
          <h2 className="relative text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold mb-4" style={{ color: "var(--cream)" }}>Ready to find your next home?</h2>
          <p className="relative text-[0.95rem] mb-7 max-w-[420px] mx-auto" style={{ color: "var(--text-2)" }}>Be among the first to find your next home on Cribs. The app is launching soon.</p>
          <Link href="/#download" className="btn-gold relative">Get the App <ArrowRight size={18} /></Link>
        </div>
      </section>
    </PageShell>
  );
}