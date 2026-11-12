import {
  Search, Hand, Heart, MapPin, BedDouble, Bath, Car, BadgeCheck, SlidersHorizontal, House, MessageCircle, User,
  ChevronLeft, Navigation, Phone, Send, CalendarDays, Clock, ShieldCheck, CreditCard, KeyRound, Truck, Brush, Wrench, Droplets, Zap, Check,
} from "lucide-react";

/* Light app theme. All sizes are in em so screens scale with the IPhone frame. */
const C = {
  bg: "#FFFFFF",
  surface: "#F5F4F0",
  border: "#ECE9E2",
  text: "#141414",
  sub: "#6E6A61",
  dim: "#A29E94",
  gold: "#C8A84E",
  goldText: "#9C7A22",
  goldTint: "rgba(200,168,78,0.16)",
};

const IMG_HOUSE = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop";
const IMG_FLAT = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&auto=format&fit=crop";
const IMG_MAP = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format&fit=crop";

function Screen({ children, pad = "0 1em" }: { children: React.ReactNode; pad?: string }) {
  return <div className="h-full relative" style={{ padding: pad, background: C.bg, color: C.text }}>{children}</div>;
}

function TabBar({ active = 0 }: { active?: number }) {
  const tabs = [House, Search, Heart, MessageCircle, User];
  return (
    <div className="absolute left-0 right-0 bottom-0 flex justify-around items-center" style={{ padding: "0.6em 0.8em 1.35em", background: "rgba(255,255,255,0.96)", borderTop: `1px solid ${C.border}` }}>
      {tabs.map((Icon, i) => (
        <span key={i} className="flex flex-col items-center" style={{ color: i === active ? C.goldText : C.dim, gap: "0.2em" }}>
          <Icon size="1.15em" strokeWidth={2.2} />
          <span style={{ width: "0.25em", height: "0.25em", borderRadius: "50%", background: i === active ? C.gold : "transparent" }} />
        </span>
      ))}
    </div>
  );
}

function TopBar({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="flex items-center" style={{ gap: "0.6em", margin: "0.35em 0 0.9em" }}>
      <span className="flex items-center justify-center flex-shrink-0" style={{ width: "2em", height: "2em", borderRadius: "0.6em", background: C.surface }}><ChevronLeft size="1em" /></span>
      <div>
        <div className="font-bold" style={{ fontSize: "0.82em" }}>{title}</div>
        {sub && <div style={{ fontSize: "0.58em", color: C.sub }}>{sub}</div>}
      </div>
    </div>
  );
}

function PrimaryBtn({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center font-bold" style={{ gap: "0.4em", padding: "0.8em", borderRadius: "0.75em", background: C.gold, color: C.text, fontSize: "0.72em" }}>
      {children}
    </div>
  );
}

/* ---------- 1. Home ---------- */
export function HomeScreen() {
  return (
    <Screen>
      <div className="flex justify-between items-center" style={{ margin: "0.35em 0 0.9em" }}>
        <div>
          <div className="flex items-center font-bold" style={{ fontSize: "0.95em", gap: "0.3em" }}>
            Hello, Sarah <Hand size="0.9em" style={{ color: C.gold }} />
          </div>
          <div style={{ fontSize: "0.68em", color: C.sub, marginTop: "0.15em" }}>Find your next home</div>
        </div>
        <div className="flex items-center justify-center font-bold rounded-full" style={{ width: "2.1em", height: "2.1em", fontSize: "0.72em", background: C.text, color: C.gold }}>SA</div>
      </div>

      <div className="flex items-center" style={{ gap: "0.45em", marginBottom: "0.8em" }}>
        <div className="flex-1 flex items-center" style={{ gap: "0.45em", padding: "0.62em 0.75em", borderRadius: "0.7em", background: C.surface, fontSize: "0.7em", color: C.dim }}>
          <Search size="1.1em" style={{ color: C.goldText }} /> Search by location
        </div>
        <div className="flex items-center justify-center" style={{ width: "2.35em", height: "2.35em", borderRadius: "0.7em", background: C.text, color: C.gold }}>
          <SlidersHorizontal size="1em" />
        </div>
      </div>

      <div className="flex" style={{ gap: "0.35em", marginBottom: "0.95em" }}>
        {(["Lekki", "Ikoyi", "Yaba", "Surulere"] as const).map((t, i) => (
          <span key={t} className="font-semibold whitespace-nowrap" style={{ fontSize: "0.6em", padding: "0.5em 0.95em", borderRadius: "0.6em", ...(i === 0 ? { background: C.gold, color: C.text } : { background: C.surface, color: C.sub }) }}>
            {t}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-baseline" style={{ marginBottom: "0.55em" }}>
        <span className="font-bold" style={{ fontSize: "0.75em" }}>Recommended for you</span>
        <span className="font-semibold" style={{ fontSize: "0.6em", color: C.goldText }}>See all</span>
      </div>

      <div className="overflow-hidden" style={{ borderRadius: "0.85em", background: C.bg, border: `1px solid ${C.border}`, boxShadow: "0 0.5em 1.4em rgba(20,20,20,0.06)" }}>
        <div className="relative overflow-hidden" style={{ height: "7.4em", background: C.surface }}>
          <img src={IMG_HOUSE} alt="3 bedroom apartment in Lekki" className="w-full h-full object-cover" loading="eager" decoding="async" />
          <span className="absolute flex items-center font-bold" style={{ top: "0.55em", left: "0.55em", gap: "0.25em", fontSize: "0.55em", padding: "0.35em 0.6em", borderRadius: "0.5em", background: "rgba(255,255,255,0.92)", color: C.goldText }}>
            <BadgeCheck size="1.2em" /> Verified
          </span>
          <span className="absolute flex items-center justify-center rounded-full" style={{ top: "0.5em", right: "0.5em", width: "1.6em", height: "1.6em", background: "rgba(255,255,255,0.92)", color: C.text }}>
            <Heart size="0.8em" />
          </span>
        </div>
        <div style={{ padding: "0.65em 0.75em 0.7em" }}>
          <div className="font-bold" style={{ fontSize: "0.82em", color: C.goldText }}>
            ₦1,200,000 <span className="font-normal" style={{ fontSize: "0.72em", color: C.dim }}>/year</span>
          </div>
          <div className="font-semibold" style={{ fontSize: "0.72em", marginTop: "0.15em" }}>3 Bedroom Apartment</div>
          <div className="flex items-center" style={{ fontSize: "0.6em", color: C.sub, gap: "0.3em", marginTop: "0.15em" }}><MapPin size="1em" /> Lekki Phase 1, Lagos</div>
          <div className="flex" style={{ gap: "0.75em", marginTop: "0.5em", paddingTop: "0.5em", borderTop: `1px solid ${C.border}`, fontSize: "0.58em", color: C.sub }}>
            <span className="flex items-center" style={{ gap: "0.3em" }}><BedDouble size="1.1em" style={{ color: C.goldText }} /> 3 Beds</span>
            <span className="flex items-center" style={{ gap: "0.3em" }}><Bath size="1.1em" style={{ color: C.goldText }} /> 2 Baths</span>
            <span className="flex items-center" style={{ gap: "0.3em" }}><Car size="1.1em" style={{ color: C.goldText }} /> Parking</span>
          </div>
        </div>
      </div>

      <div className="flex items-center" style={{ gap: "0.6em", marginTop: "0.6em", padding: "0.5em", borderRadius: "0.8em", border: `1px solid ${C.border}` }}>
        <div className="overflow-hidden flex-shrink-0" style={{ width: "3.2em", height: "2.8em", borderRadius: "0.5em", background: C.surface }}>
          <img src={IMG_FLAT} alt="2 bedroom flat in Yaba" className="w-full h-full object-cover" loading="eager" decoding="async" />
        </div>
        <div>
          <div className="font-semibold" style={{ fontSize: "0.65em" }}>2 Bedroom Flat, Yaba</div>
          <div className="font-bold" style={{ fontSize: "0.65em", color: C.goldText, marginTop: "0.1em" }}>₦850,000 /yr</div>
        </div>
      </div>

      <TabBar active={0} />
    </Screen>
  );
}

/* ---------- Chat list ---------- */
export function ChatScreen() {
  const chats = [
    ["MA", "Mr. Adeyemi", "Yes, the 3-bed in Lekki is still available.", "2m", 2],
    ["SJ", "Sarah Johnson", "Great! I'll come for inspection on Saturday.", "1h", 0],
    ["DO", "David O.", "The rent includes service charge.", "3h", 1],
    ["EB", "Esther B.", "When can we schedule the virtual tour?", "Mon", 0],
    ["KA", "Kunle A.", "Sent you the tenancy agreement.", "Sun", 0],
  ] as const;
  return (
    <Screen pad="0 0.95em">
      <div className="font-extrabold" style={{ fontSize: "1.15em", margin: "0.4em 0 0.6em" }}>Messages</div>
      <div className="flex items-center" style={{ gap: "0.45em", padding: "0.6em 0.75em", borderRadius: "0.7em", background: C.surface, fontSize: "0.68em", color: C.dim, marginBottom: "0.6em" }}>
        <Search size="1.1em" /> Search conversations
      </div>
      {chats.map(([i, n, m, t, u]) => (
        <div key={n} className="flex items-center" style={{ gap: "0.6em", padding: "0.6em 0", borderBottom: `1px solid ${C.border}` }}>
          <div className="flex-shrink-0 flex items-center justify-center font-bold rounded-full" style={{ width: "2.4em", height: "2.4em", fontSize: "0.68em", background: C.goldTint, color: C.goldText }}>{i}</div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between">
              <span className="font-bold" style={{ fontSize: "0.66em" }}>{n}</span>
              <span style={{ fontSize: "0.55em", color: u ? C.goldText : C.dim }}>{t}</span>
            </div>
            <div className="flex justify-between items-center" style={{ gap: "0.4em" }}>
              <span className="truncate" style={{ fontSize: "0.6em", color: C.sub }}>{m}</span>
              {u ? <span className="flex-shrink-0 flex items-center justify-center font-bold rounded-full" style={{ width: "1.5em", height: "1.5em", fontSize: "0.52em", background: C.gold, color: C.text }}>{u}</span> : null}
            </div>
          </div>
        </div>
      ))}
      <TabBar active={3} />
    </Screen>
  );
}

/* ---------- Map ---------- */
export function MapScreen() {
  const pins = [
    { top: "24%", left: "26%", p: "₦850k" },
    { top: "36%", left: "60%", p: "₦1.2m" },
    { top: "50%", left: "36%", p: "₦2.5m" },
  ];
  return (
    <div className="h-full relative" style={{ background: "#EDEBE5", color: C.text }}>
      <div className="absolute inset-0" style={{ top: "-3em" }}>
        <img src={IMG_MAP} alt="" className="w-full h-full object-cover" style={{ opacity: 0.55, filter: "grayscale(1) brightness(1.25)" }} loading="eager" decoding="async" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.75), transparent 25%, transparent 60%, rgba(255,255,255,0.9))" }} />
      </div>
      <div className="relative flex items-center" style={{ gap: "0.5em", padding: "0.3em 0.9em" }}>
        <span className="flex items-center justify-center" style={{ width: "2em", height: "2em", borderRadius: "0.6em", background: C.bg, boxShadow: "0 0.3em 0.8em rgba(0,0,0,0.08)" }}><ChevronLeft size="1em" /></span>
        <div className="flex-1 flex items-center" style={{ gap: "0.4em", padding: "0.55em 0.7em", borderRadius: "0.65em", background: C.bg, fontSize: "0.65em", color: C.sub, boxShadow: "0 0.3em 0.8em rgba(0,0,0,0.08)" }}>
          <MapPin size="1.1em" style={{ color: C.goldText }} /> Lekki, Lagos
        </div>
      </div>
      {pins.map((p, i) => (
        <span key={i} className="absolute flex items-center font-bold" style={{ top: p.top, left: p.left, gap: "0.25em", fontSize: "0.58em", padding: "0.4em 0.65em", borderRadius: "0.55em", background: i === 1 ? C.text : C.bg, color: i === 1 ? C.gold : C.text, boxShadow: "0 0.4em 1em rgba(0,0,0,0.15)" }}>
          <House size="1.1em" /> {p.p}
        </span>
      ))}
      <span className="absolute flex items-center justify-center rounded-full" style={{ right: "0.9em", top: "60%", width: "2.1em", height: "2.1em", background: C.bg, color: C.goldText, boxShadow: "0 0.3em 0.8em rgba(0,0,0,0.12)" }}><Navigation size="1em" /></span>

      <div className="absolute left-0 right-0" style={{ bottom: "4.6em", padding: "0 0.8em" }}>
        <div className="flex items-center" style={{ gap: "0.65em", padding: "0.6em", borderRadius: "0.9em", background: C.bg, boxShadow: "0 0.5em 1.5em rgba(0,0,0,0.12)" }}>
          <div className="overflow-hidden flex-shrink-0" style={{ width: "3.6em", height: "3.1em", borderRadius: "0.55em", background: C.surface }}>
            <img src={IMG_FLAT} alt="2 bedroom flat" className="w-full h-full object-cover" loading="eager" decoding="async" />
          </div>
          <div className="min-w-0">
            <div className="font-bold" style={{ fontSize: "0.66em" }}>2 Bedroom Flat</div>
            <div className="font-bold" style={{ fontSize: "0.66em", color: C.goldText, marginTop: "0.1em" }}>₦1,200,000 /yr</div>
            <div style={{ fontSize: "0.52em", color: C.sub, marginTop: "0.15em" }}>2 beds · 2 baths · Parking</div>
          </div>
        </div>
      </div>
      <TabBar active={1} />
    </div>
  );
}

/* ---------- 2. Chat thread ---------- */
export function ChatThreadScreen() {
  const msgs: [boolean, string][] = [
    [false, "Good afternoon. Is the 3 bedroom in Lekki still available?"],
    [true, "Yes it is. Rent is ₦1.2m per year, service charge included."],
    [false, "Great. Can I come for inspection this Saturday?"],
    [true, "Saturday works. 11am?"],
    [false, "Perfect, see you then."],
  ];
  return (
    <Screen pad="0 0.85em">
      <div className="flex items-center" style={{ gap: "0.55em", margin: "0.35em 0 0.8em", paddingBottom: "0.7em", borderBottom: `1px solid ${C.border}` }}>
        <ChevronLeft size="1.1em" />
        <div className="flex items-center justify-center font-bold rounded-full" style={{ width: "2.3em", height: "2.3em", fontSize: "0.66em", background: C.goldTint, color: C.goldText }}>MA</div>
        <div className="flex-1">
          <div className="font-bold flex items-center" style={{ fontSize: "0.72em", gap: "0.25em" }}>Mr. Adeyemi <BadgeCheck size="1.05em" style={{ color: C.goldText }} /></div>
          <div style={{ fontSize: "0.55em", color: C.sub }}>Verified landlord</div>
        </div>
        <Phone size="1em" style={{ color: C.goldText }} />
      </div>
      <div className="flex flex-col" style={{ gap: "0.5em" }}>
        {msgs.map(([me, m], i) => (
          <div key={i} className={`flex ${me ? "justify-start" : "justify-end"}`}>
            <div style={{ maxWidth: "78%", fontSize: "0.62em", lineHeight: 1.45, padding: "0.65em 0.85em", borderRadius: me ? "0.2em 1em 1em 1em" : "1em 0.2em 1em 1em", background: me ? C.surface : C.text, color: me ? C.text : "#F5F4F0" }}>{m}</div>
          </div>
        ))}
      </div>
      <div className="absolute left-0 right-0 flex items-center" style={{ bottom: "1.6em", padding: "0 0.85em", gap: "0.45em" }}>
        <div className="flex-1" style={{ padding: "0.65em 0.8em", borderRadius: "0.8em", background: C.surface, fontSize: "0.62em", color: C.dim }}>Type a message</div>
        <span className="flex items-center justify-center" style={{ width: "2.2em", height: "2.2em", borderRadius: "0.7em", background: C.gold, color: C.text }}><Send size="0.95em" /></span>
      </div>
    </Screen>
  );
}

/* ---------- 3. Inspect ---------- */
export function InspectScreen() {
  const days = [["Thu", 14], ["Fri", 15], ["Sat", 16], ["Sun", 17], ["Mon", 18]] as const;
  const times = ["9:00 am", "11:00 am", "1:00 pm", "3:00 pm"];
  return (
    <Screen>
      <TopBar title="Book inspection" sub="3 Bedroom Apartment, Lekki" />
      <div className="flex gap-[0.4em]" style={{ marginBottom: "0.9em" }}>
        <div className="flex-1 font-bold text-center" style={{ fontSize: "0.6em", padding: "0.7em", borderRadius: "0.6em", background: C.text, color: C.gold }}>In person</div>
        <div className="flex-1 font-semibold text-center" style={{ fontSize: "0.6em", padding: "0.7em", borderRadius: "0.6em", background: C.surface, color: C.sub }}>Virtual tour</div>
      </div>
      <div className="flex items-center font-bold" style={{ fontSize: "0.68em", gap: "0.35em", marginBottom: "0.5em" }}><CalendarDays size="1.1em" style={{ color: C.goldText }} /> November</div>
      <div className="flex" style={{ gap: "0.35em", marginBottom: "0.9em" }}>
        {days.map(([d, n]) => (
          <div key={n} className="flex-1 flex flex-col items-center" style={{ padding: "0.55em 0", borderRadius: "0.7em", background: n === 16 ? C.gold : C.surface }}>
            <span style={{ fontSize: "0.52em", color: n === 16 ? C.text : C.sub }}>{d}</span>
            <span className="font-bold" style={{ fontSize: "0.78em" }}>{n}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center font-bold" style={{ fontSize: "0.68em", gap: "0.35em", marginBottom: "0.5em" }}><Clock size="1.1em" style={{ color: C.goldText }} /> Available times</div>
      <div className="grid grid-cols-2" style={{ gap: "0.4em", marginBottom: "1em" }}>
        {times.map((t) => (
          <div key={t} className="text-center font-semibold" style={{ fontSize: "0.6em", padding: "0.75em", borderRadius: "0.7em", background: t === "11:00 am" ? C.goldTint : C.bg, border: `1px solid ${t === "11:00 am" ? C.gold : C.border}`, color: t === "11:00 am" ? C.goldText : C.text }}>{t}</div>
        ))}
      </div>
      <div style={{ padding: "0.7em 0.8em", borderRadius: "0.8em", background: C.surface, marginBottom: "0.9em" }}>
        <div style={{ fontSize: "0.55em", color: C.sub }}>Your inspection</div>
        <div className="font-bold" style={{ fontSize: "0.68em" }}>Saturday 16 Nov, 11:00 am</div>
      </div>
      <PrimaryBtn>Confirm inspection</PrimaryBtn>
    </Screen>
  );
}

/* ---------- 4. Pay ---------- */
export function PayScreen() {
  const rows = [["Annual rent", "₦1,200,000"], ["Service charge", "Included"], ["Hidden charges", "₦0"]];
  return (
    <Screen>
      <TopBar title="Secure payment" sub="3 Bedroom Apartment, Lekki" />
      <div className="text-center" style={{ padding: "1.1em 0.8em", borderRadius: "1em", background: C.text, color: "#F5F4F0", marginBottom: "0.9em" }}>
        <div style={{ fontSize: "0.58em", opacity: 0.6 }}>Total to pay</div>
        <div className="font-extrabold" style={{ fontSize: "1.45em", color: C.gold, letterSpacing: "-0.02em" }}>₦1,200,000</div>
        <div style={{ fontSize: "0.55em", opacity: 0.6 }}>for 12 months</div>
      </div>
      {rows.map(([a, b]) => (
        <div key={a} className="flex justify-between" style={{ fontSize: "0.64em", padding: "0.6em 0", borderBottom: `1px solid ${C.border}` }}>
          <span style={{ color: C.sub }}>{a}</span>
          <span className="font-semibold" style={{ color: b === "₦0" ? C.goldText : C.text }}>{b}</span>
        </div>
      ))}
      <div className="flex items-start" style={{ gap: "0.55em", padding: "0.75em", borderRadius: "0.8em", background: C.goldTint, margin: "0.9em 0" }}>
        <ShieldCheck size="1.2em" style={{ color: C.goldText, flexShrink: 0 }} />
        <div style={{ fontSize: "0.58em", lineHeight: 1.45, color: C.text }}>Your money is held safely by Cribs and released to the landlord only after you confirm move-in.</div>
      </div>
      <div className="flex items-center" style={{ gap: "0.55em", padding: "0.65em 0.75em", borderRadius: "0.8em", border: `1px solid ${C.border}`, marginBottom: "0.9em" }}>
        <CreditCard size="1.15em" style={{ color: C.goldText }} />
        <span className="flex-1 font-semibold" style={{ fontSize: "0.62em" }}>Card ending 4821</span>
        <span style={{ fontSize: "0.56em", color: C.goldText }}>Change</span>
      </div>
      <PrimaryBtn>Pay ₦1,200,000</PrimaryBtn>
    </Screen>
  );
}

/* ---------- 5. Move in ---------- */
export function MoveInScreen() {
  const services = [
    { icon: Brush, t: "Deep cleaning", s: "Before you arrive" },
    { icon: Truck, t: "Movers", s: "Book a moving van" },
    { icon: Zap, t: "Utilities", s: "Electricity and water set up" },
  ];
  return (
    <Screen>
      <div className="text-center" style={{ paddingTop: "1em" }}>
        <div className="mx-auto flex items-center justify-center rounded-full" style={{ width: "3.6em", height: "3.6em", background: C.gold, color: C.text, marginBottom: "0.7em" }}>
          <KeyRound size="1.6em" />
        </div>
        <div className="font-extrabold" style={{ fontSize: "1.1em" }}>Welcome home, Sarah</div>
        <div style={{ fontSize: "0.62em", color: C.sub, marginTop: "0.2em" }}>Your keys are ready for collection.</div>
      </div>
      <div className="flex items-center" style={{ gap: "0.6em", marginTop: "1em", padding: "0.55em", borderRadius: "0.85em", border: `1px solid ${C.border}` }}>
        <div className="overflow-hidden flex-shrink-0" style={{ width: "3.2em", height: "2.8em", borderRadius: "0.5em", background: C.surface }}>
          <img src={IMG_HOUSE} alt="" className="w-full h-full object-cover" loading="eager" decoding="async" />
        </div>
        <div>
          <div className="font-bold" style={{ fontSize: "0.65em" }}>3 Bedroom Apartment</div>
          <div style={{ fontSize: "0.55em", color: C.sub }}>Move-in: Monday 2 Dec</div>
        </div>
      </div>
      <div className="font-bold" style={{ fontSize: "0.68em", margin: "1em 0 0.5em" }}>Move-in services</div>
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.t} className="flex items-center" style={{ gap: "0.6em", padding: "0.55em 0", borderBottom: `1px solid ${C.border}` }}>
            <span className="flex items-center justify-center flex-shrink-0" style={{ width: "2.1em", height: "2.1em", borderRadius: "0.6em", background: C.goldTint, color: C.goldText }}><Icon size="1em" /></span>
            <div className="flex-1">
              <div className="font-semibold" style={{ fontSize: "0.62em" }}>{s.t}</div>
              <div style={{ fontSize: "0.52em", color: C.sub }}>{s.s}</div>
            </div>
            <span className="font-bold" style={{ fontSize: "0.56em", color: C.goldText }}>Book</span>
          </div>
        );
      })}
    </Screen>
  );
}

/* ---------- 6. Support ---------- */
export function SupportScreen() {
  const reqs = [
    { icon: Droplets, t: "Leaking kitchen tap", s: "Plumber visiting tomorrow", st: "In progress", c: C.goldText },
    { icon: Zap, t: "Bedroom socket", s: "Fixed on 20 Nov", st: "Resolved", c: "#3E8E5B" },
    { icon: CalendarDays, t: "Rent renewal", s: "Due in 9 months", st: "Scheduled", c: C.sub },
  ];
  return (
    <Screen>
      <TopBar title="My home" sub="3 Bedroom Apartment, Lekki" />
      <div className="grid grid-cols-2" style={{ gap: "0.45em", marginBottom: "0.9em" }}>
        <div style={{ padding: "0.75em", borderRadius: "0.85em", background: C.text, color: "#F5F4F0" }}>
          <Wrench size="1.1em" style={{ color: C.gold }} />
          <div className="font-bold" style={{ fontSize: "0.62em", marginTop: "0.5em" }}>Report an issue</div>
        </div>
        <div style={{ padding: "0.75em", borderRadius: "0.85em", background: C.surface }}>
          <MessageCircle size="1.1em" style={{ color: C.goldText }} />
          <div className="font-bold" style={{ fontSize: "0.62em", marginTop: "0.5em" }}>Chat support</div>
        </div>
      </div>
      <div className="font-bold" style={{ fontSize: "0.68em", marginBottom: "0.4em" }}>Requests</div>
      {reqs.map((r) => {
        const Icon = r.icon;
        return (
          <div key={r.t} className="flex items-center" style={{ gap: "0.6em", padding: "0.6em 0", borderBottom: `1px solid ${C.border}` }}>
            <span className="flex items-center justify-center flex-shrink-0" style={{ width: "2.1em", height: "2.1em", borderRadius: "0.6em", background: C.surface, color: C.text }}><Icon size="1em" /></span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold" style={{ fontSize: "0.62em" }}>{r.t}</div>
              <div style={{ fontSize: "0.52em", color: C.sub }}>{r.s}</div>
            </div>
            <span className="font-bold" style={{ fontSize: "0.52em", color: r.c }}>{r.st}</span>
          </div>
        );
      })}
      <div className="flex items-center" style={{ gap: "0.5em", marginTop: "0.9em", padding: "0.7em", borderRadius: "0.8em", background: C.goldTint }}>
        <Check size="1.1em" style={{ color: C.goldText }} />
        <span style={{ fontSize: "0.58em" }}>Your tenancy is protected by Cribs</span>
      </div>
      <TabBar active={4} />
    </Screen>
  );
}
