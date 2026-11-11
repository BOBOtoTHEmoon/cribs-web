/**
 * Realistic iPhone frame (titanium rim, side buttons, Dynamic Island,
 * status bar, home indicator and glass glare). Pure CSS/SVG so it stays
 * razor sharp at any size. Pass the app screen as children.
 */
export default function IPhone({
  width = 270,
  children,
  className = "",
  style,
}: {
  width?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const s = width / 270; // scale factor based on a 270px reference
  const rim = 3 * s;
  const bezel = 9 * s;
  const outerR = 46 * s;
  const screenR = outerR - rim - bezel + 2 * s;

  const btn = (side: "left" | "right", top: number, h: number) => (
    <span
      className="absolute"
      style={{
        [side]: -2.5 * s,
        top: `${top}%`,
        width: 3 * s,
        height: `${h}%`,
        borderRadius: 2 * s,
        background: "linear-gradient(90deg,#2a2a2e,#6b6b72,#2a2a2e)",
      }}
    />
  );

  return (
    <div className={`relative ${className}`} style={{ width, ...style }}>
      {btn("left", 17, 4)}
      {btn("left", 25, 8)}
      {btn("left", 35, 8)}
      {btn("right", 27, 12)}

      {/* titanium rim */}
      <div
        className="relative"
        style={{
          padding: rim,
          borderRadius: outerR,
          background:
            "linear-gradient(145deg,#6a6a70 0%,#2b2b2f 18%,#1b1b1e 45%,#3c3c41 70%,#77777e 100%)",
          boxShadow:
            "0 60px 120px -30px rgba(0,0,0,0.85), 0 30px 60px -30px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* black bezel */}
        <div style={{ padding: bezel, borderRadius: outerR - rim, background: "#050506", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}>
          {/* screen */}
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: screenR, aspectRatio: "9 / 19.5", background: "#FFFFFF", fontSize: 16 * s }}
          >
            {/* status bar */}
            <div className="absolute top-0 left-0 right-0 z-[5] flex items-center justify-between" style={{ height: 40 * s, padding: `0 ${18 * s}px ${0}px ${24 * s}px`, color: "#141414", background: "rgba(255,255,255,0.0)" }}>
              <span style={{ fontSize: 12 * s, fontWeight: 700, letterSpacing: 0.2 }}>9:41</span>
              <span className="flex items-center" style={{ gap: 4 * s }}>
                <svg width={15 * s} height={10 * s} viewBox="0 0 15 10" fill="currentColor"><rect x="0" y="7" width="2.6" height="3" rx=".6" /><rect x="4" y="5" width="2.6" height="5" rx=".6" /><rect x="8" y="2.5" width="2.6" height="7.5" rx=".6" /><rect x="12" y="0" width="2.6" height="10" rx=".6" /></svg>
                <svg width={14 * s} height={10 * s} viewBox="0 0 14 10" fill="currentColor"><path d="M7 2.2c2 0 3.8.8 5.1 2l1.1-1.1A8.8 8.8 0 0 0 7 .6 8.8 8.8 0 0 0 .8 3.1l1.1 1.1A7.2 7.2 0 0 1 7 2.2Zm0 3.1c1.1 0 2.2.4 3 1.2l1.1-1.1A5.8 5.8 0 0 0 7 3.7a5.8 5.8 0 0 0-4.1 1.7L4 6.5a4.2 4.2 0 0 1 3-1.2Zm0 3.1c-.4 0-.8.2-1 .4L7 9.8l1-1c-.2-.2-.6-.4-1-.4Z" /></svg>
                <svg width={22 * s} height={10 * s} viewBox="0 0 24 11"><rect x=".5" y=".5" width="20" height="10" rx="3" fill="none" stroke="currentColor" strokeOpacity=".45" /><rect x="2" y="2" width="15" height="7" rx="1.8" fill="currentColor" /><rect x="21.7" y="3.6" width="1.6" height="3.8" rx=".8" fill="currentColor" fillOpacity=".45" /></svg>
              </span>
            </div>

            {/* dynamic island */}
            <div className="absolute left-1/2 -translate-x-1/2 z-[6]" style={{ top: 9 * s, width: 74 * s, height: 22 * s, borderRadius: 20 * s, background: "#000" }}>
              <span className="absolute rounded-full" style={{ right: 9 * s, top: "50%", transform: "translateY(-50%)", width: 8 * s, height: 8 * s, background: "radial-gradient(circle at 35% 35%,#2b3a55,#0a0d14 70%)" }} />
            </div>

            {/* app content */}
            <div className="absolute inset-0" style={{ paddingTop: 44 * s, background: "#FFFFFF" }}>{children}</div>

            {/* home indicator */}
            <div className="absolute left-1/2 -translate-x-1/2 z-[6] rounded-full" style={{ bottom: 7 * s, width: 100 * s, height: 4 * s, background: "rgba(20,20,20,0.85)" }} />

            {/* glass glare */}
            <div className="absolute inset-0 z-[7] pointer-events-none" style={{ background: "linear-gradient(115deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 28%, transparent 42%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
