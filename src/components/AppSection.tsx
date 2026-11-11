import { IcBell, IcHeart, IcWallet } from "./CribsIcons";
import IPhone from "./IPhone";
import WaitlistForm from "./WaitlistForm";
import { MapScreen } from "./AppScreens";

const FEATURES = [
  { icon: IcBell, title: "Instant Notifications", desc: "Get real-time updates on new listings and messages." },
  { icon: IcHeart, title: "Save Favorites", desc: "Save properties you love and come back anytime." },
  { icon: IcWallet, title: "Property Management", desc: "Landlords collect rent, draft quick notices, and manage tenants with ease." },
];

function StoreBadge({ store }: { store: "apple" | "google" }) {
  return (
    <div
      className="group inline-flex items-center gap-[0.6rem] px-[1.1rem] py-[0.7rem] rounded-[10px] cursor-default transition-all duration-300 hover:-translate-y-[2px] whitespace-nowrap"
      style={{ background: "var(--cream)", color: "var(--bg)" }}
      aria-label={`Coming soon on ${store === "apple" ? "the App Store" : "Google Play"}`}
    >
      {store === "apple" ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M17.05 12.04c-.03-2.65 2.17-3.92 2.27-3.98-1.24-1.81-3.17-2.06-3.85-2.09-1.64-.17-3.2.96-4.03.96-.83 0-2.11-.94-3.47-.91-1.79.03-3.44 1.04-4.36 2.64-1.86 3.23-.48 8.01 1.33 10.63.88 1.28 1.93 2.72 3.31 2.67 1.33-.05 1.83-.86 3.44-.86 1.6 0 2.06.86 3.47.83 1.43-.02 2.34-1.31 3.22-2.6 1.01-1.49 1.43-2.93 1.45-3.01-.03-.01-2.79-1.07-2.82-4.25zM14.53 3.9c.73-.89 1.22-2.12 1.09-3.35-1.05.04-2.32.7-3.08 1.58-.68.78-1.27 2.03-1.11 3.23 1.17.09 2.37-.59 3.1-1.46z" /></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 512 512" style={{ flexShrink: 0 }}><path fill="#EA4335" d="M325.3 234.3 104.6 13l280.8 161.2z" /><path fill="#FBBC04" d="M410.9 165.1 355 133l-61.6 61.6 61.6 61.6 57-32.1c17-11 17-53 0-64z" transform="translate(-30 0)" /><path fill="#4285F4" d="M104.6 13c-4.7 2.4-8 7-8 13.7v458.6c0 6.7 3.3 11.3 8 13.7l230.7-230.7z" /><path fill="#34A853" d="M104.6 499l280.8-161.2-60.1-60.1z" /></svg>
      )}
      <span className="text-left leading-tight">
        <span className="block text-[0.5rem] font-semibold uppercase tracking-[1px] opacity-60">Coming soon</span>
        <span className="text-[0.8rem] font-bold">{store === "apple" ? "App Store" : "Google Play"}</span>
      </span>
    </div>
  );
}

export default function AppSection() {
  return (
    <section id="download" className="py-[clamp(4.5rem,10vh,7.5rem)] scroll-mt-[90px]" style={{ borderTop: "1px solid var(--card-border)" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="reveal panel-h relative overflow-hidden rounded-[24px] p-[clamp(2.5rem,5vw,4rem)] grid lg:grid-cols-[auto_1fr_1fr] gap-12 items-center" style={{ background: "linear-gradient(160deg, var(--card-2) 0%, var(--card) 100%)", border: "1px solid var(--card-border)" }}>

          {/* phone */}
          <div className="relative z-[2] mx-auto float-slow">
            <IPhone width={240}><MapScreen /></IPhone>
          </div>

          {/* text */}
          <div className="relative z-[2] text-center lg:text-left">
            <div className="text-[0.65rem] font-bold uppercase tracking-[2.5px] mb-4" style={{ color: "var(--gold)" }}>Join the Waitlist</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.2] tracking-[-0.5px] mb-4" style={{ color: "var(--cream)" }}>Everything you need, right in your pocket.</h2>
            <p className="text-[0.9rem] leading-[1.7] mb-6 max-w-[360px] mx-auto lg:mx-0" style={{ color: "var(--text-2)" }}>The Cribs app is coming soon to iOS and Android. Join the waitlist and be the first to know when it&apos;s live.</p>
            <WaitlistForm />
            <div className="flex gap-3 justify-center lg:justify-start mt-3">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
          </div>

          {/* features */}
          <div className="relative z-[2] flex flex-col gap-6 max-w-[340px] mx-auto lg:mx-0">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group flex gap-[0.9rem] items-start">
                  <span className="ic flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-[2px]"><Icon size={30} /></span>
                  <div>
                    <div className="text-[0.85rem] font-bold mb-[0.2rem]" style={{ color: "var(--cream)" }}>{f.title}</div>
                    <div className="text-[0.76rem] leading-[1.5]" style={{ color: "var(--text)" }}>{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
