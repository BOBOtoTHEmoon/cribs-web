import { Search, MapPin, Play, ImagePlus, BadgeCheck, Building2, Star, MessageCircle } from "lucide-react";

export type BentoItem = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  desc: string;
  visual?: React.ReactNode; // items with a visual become wide cards
};

export default function Bento({ items }: { items: BentoItem[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
      {items.map((it, i) => {
        const Icon = it.icon;
        const wide = !!it.visual;
        const delay = i % 3 === 1 ? "reveal-d1" : i % 3 === 2 ? "reveal-d2" : "";
        return (
          <div
            key={it.title}
            className={`reveal card-h ${delay} ${wide ? "col-span-2" : ""} rounded-[18px] overflow-hidden flex ${wide ? "flex-col sm:flex-row" : "flex-col"}`}
            style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
          >
            <div className={`p-5 sm:p-7 flex flex-col ${wide ? "sm:w-[46%] sm:justify-center" : ""}`}>
              <span className="ic mb-4"><Icon size={34} /></span>
              <div className={`${wide ? "text-[1.05rem] sm:text-[1.2rem]" : "text-[0.92rem] sm:text-[1rem]"} font-bold mb-2 leading-snug`} style={{ color: "var(--cream)" }}>{it.title}</div>
              <div className="text-[0.78rem] sm:text-[0.84rem] leading-[1.6]" style={{ color: "var(--text)" }}>{it.desc}</div>
            </div>
            {wide && (
              <div className="flex-1 px-5 pb-5 sm:p-6 sm:pl-0 flex items-center">
                <div className="w-full">{it.visual}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Visual snippets ---------- */

const panel: React.CSSProperties = { background: "var(--surface)", border: "1px solid var(--card-border)" };

export function SearchVisual() {
  return (
    <div className="rounded-[14px] p-4" style={panel}>
      <div className="flex items-center gap-2 rounded-[10px] px-3 py-[0.6rem] text-[0.78rem] mb-3" style={{ background: "var(--card-2)", border: "1px solid var(--card-border)", color: "var(--cream)" }}>
        <Search size={15} style={{ color: "var(--gold)" }} /> Lekki Phase 1, Lagos
      </div>
      <div className="flex flex-wrap gap-[0.4rem] mb-3">
        {[["3 Beds", true], ["₦800k to ₦1.5m", true], ["Parking", false], ["Furnished", false]].map(([t, on]) => (
          <span key={t as string} className="text-[0.68rem] font-semibold px-[0.65rem] py-[0.35rem] rounded-[7px]" style={on ? { background: "var(--gold)", color: "var(--bg)" } : { background: "var(--card-2)", color: "var(--text)", border: "1px solid var(--card-border)" }}>{t as string}</span>
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-[10px] p-[0.55rem]" style={{ background: "var(--card-2)" }}>
        <div className="w-11 h-9 rounded-[7px] overflow-hidden flex-shrink-0" style={{ background: "var(--card-border)" }}>
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="min-w-0">
          <div className="text-[0.72rem] font-bold" style={{ color: "var(--cream)" }}>3 Bedroom Apartment</div>
          <div className="text-[0.66rem] flex items-center gap-1" style={{ color: "var(--dim)" }}><MapPin size={10} /> Lekki Phase 1</div>
        </div>
        <div className="ml-auto text-[0.72rem] font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>₦1.2m/yr</div>
      </div>
    </div>
  );
}

export function TourVisual() {
  return (
    <div className="relative rounded-[14px] overflow-hidden aspect-[16/10] group/tour" style={panel}>
      <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80&auto=format&fit=crop" alt="Living room virtual tour" className="w-full h-full object-cover transition-transform duration-700 group-hover/tour:scale-105" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,11,0.85), transparent 55%)" }} />
      <span className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/tour:scale-110" style={{ background: "var(--gold)", color: "var(--bg)" }}>
        <Play size={20} fill="currentColor" />
      </span>
      <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between text-[0.7rem]">
        <span className="font-bold" style={{ color: "var(--cream)" }}>Virtual tour</span>
        <span style={{ color: "var(--text-2)" }}>3 Bedroom, Lekki</span>
      </div>
    </div>
  );
}

export function ListingVisual() {
  return (
    <div className="rounded-[14px] p-4" style={panel}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.78rem] font-bold" style={{ color: "var(--cream)" }}>New listing</span>
        <span className="text-[0.68rem] font-semibold" style={{ color: "var(--gold)" }}>Step 3 of 4</span>
      </div>
      <div className="h-[5px] rounded-[3px] mb-4 overflow-hidden" style={{ background: "var(--card-2)" }}>
        <div className="h-full w-3/4 rounded-[3px]" style={{ background: "var(--gold)" }} />
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[
          "photo-1600596542815-ffad4c1539a9",
          "photo-1600585154340-be6161a56a0c",
          "photo-1502672260266-1c1ef2d93688",
        ].map((id) => (
          <div key={id} className="aspect-square rounded-[8px] overflow-hidden" style={{ background: "var(--card-border)" }}>
            <img src={`https://images.unsplash.com/${id}?w=160&q=70&auto=format&fit=crop`} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
        <div className="aspect-square rounded-[8px] flex items-center justify-center" style={{ border: "1px dashed var(--card-border-hover)", color: "var(--gold)" }}>
          <ImagePlus size={18} />
        </div>
      </div>
      <div className="flex items-center gap-2 text-[0.7rem]" style={{ color: "var(--text-2)" }}>
        <Building2 size={14} style={{ color: "var(--gold)" }} /> 3 Bedroom Apartment, Lekki
      </div>
    </div>
  );
}

export function RentVisual() {
  const rows = [
    ["Flat 2A", "Paid", "₦1.2m", "#6FBF8B"],
    ["Flat 3B", "Due in 5 days", "₦950k", "var(--gold)"],
    ["Flat 4C", "Paid", "₦1.2m", "#6FBF8B"],
  ];
  return (
    <div className="rounded-[14px] p-4" style={panel}>
      <div className="flex items-end justify-between mb-3">
        <div>
          <div className="text-[0.66rem]" style={{ color: "var(--dim)" }}>Collected this year</div>
          <div className="text-[1.25rem] font-extrabold tracking-[-0.5px]" style={{ color: "var(--cream)" }}>₦3,350,000</div>
        </div>
        <span className="flex items-center gap-1 text-[0.66rem] font-semibold" style={{ color: "var(--gold)" }}><BadgeCheck size={13} /> Auto reminders on</span>
      </div>
      {rows.map(([u, st, amt, c]) => (
        <div key={u} className="flex items-center justify-between py-[0.5rem] text-[0.72rem]" style={{ borderTop: "1px solid var(--card-border)" }}>
          <span className="font-semibold" style={{ color: "var(--cream)" }}>{u}</span>
          <span className="font-semibold" style={{ color: c }}>{st}</span>
          <span style={{ color: "var(--text-2)" }}>{amt}</span>
        </div>
      ))}
    </div>
  );
}

export function AgentVisual() {
  return (
    <div className="rounded-[14px] p-4" style={panel}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full flex items-center justify-center text-[0.8rem] font-bold" style={{ background: "var(--gold-dim)", color: "var(--gold)" }}>TA</div>
        <div className="min-w-0">
          <div className="text-[0.85rem] font-bold flex items-center gap-1" style={{ color: "var(--cream)" }}>Tunde Adebayo <BadgeCheck size={15} style={{ color: "var(--gold)" }} /></div>
          <div className="text-[0.7rem]" style={{ color: "var(--gold)" }}>Verified Agent, Lekki and Ikoyi</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[["12", "Listings"], ["4.9", "Rating"], ["38", "Reviews"]].map(([n, l]) => (
          <div key={l} className="rounded-[10px] py-2 text-center" style={{ background: "var(--card-2)" }}>
            <div className="text-[0.95rem] font-extrabold flex items-center justify-center gap-1" style={{ color: "var(--cream)" }}>{l === "Rating" && <Star size={12} fill="currentColor" style={{ color: "var(--gold)" }} />}{n}</div>
            <div className="text-[0.62rem]" style={{ color: "var(--dim)" }}>{l}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-[10px] px-3 py-[0.55rem] text-[0.72rem]" style={{ background: "var(--card-2)", color: "var(--text-2)" }}>
        <MessageCircle size={14} style={{ color: "var(--gold)" }} /> 3 new tenant inquiries today
      </div>
    </div>
  );
}

export function FeeVisual() {
  const rows = [["Annual rent", "₦1,200,000"], ["Service charge", "Included"], ["Agent fee", "₦120,000"]];
  return (
    <div className="rounded-[14px] p-4" style={panel}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.78rem] font-bold" style={{ color: "var(--cream)" }}>3 Bedroom Apartment, Lekki</span>
        <span className="text-[0.66rem] font-semibold flex items-center gap-1" style={{ color: "var(--gold)" }}><BadgeCheck size={13} /> Shown upfront</span>
      </div>
      {rows.map(([a, b]) => (
        <div key={a} className="flex justify-between py-[0.5rem] text-[0.74rem]" style={{ borderTop: "1px solid var(--card-border)" }}>
          <span style={{ color: "var(--text)" }}>{a}</span>
          <span className="font-semibold" style={{ color: a === "Agent fee" ? "var(--gold)" : "var(--cream)" }}>{b}</span>
        </div>
      ))}
      <div className="flex justify-between pt-[0.6rem] text-[0.82rem] font-bold" style={{ borderTop: "1px solid var(--card-border-hover)", color: "var(--cream)" }}>
        <span>Total before you inspect</span>
        <span>₦1,320,000</span>
      </div>
    </div>
  );
}
