/**
 * Animated Lagos-style skyline: two layers of buildings, the back layer
 * drifts slowly and random windows switch on and off in gold.
 * Generated from a fixed seed so server and client render the same SVG.
 */

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Win = { x: number; y: number; mode: 0 | 1 | 2; d: number; dl: number };
type Bld = { x: number; w: number; h: number; ant: boolean; wins: Win[] };

const W = 1600;
const H = 260;

function build(seed: number, minH: number, maxH: number, minW: number, maxW: number, withWindows: boolean): Bld[] {
  const r = rng(seed);
  const out: Bld[] = [];
  let x = -20;
  while (x < W + 20) {
    const w = Math.round(minW + r() * (maxW - minW));
    const h = Math.round(minH + r() * (maxH - minH));
    const wins: Win[] = [];
    if (withWindows) {
      const cols = Math.floor((w - 12) / 13);
      const rows = Math.floor((h - 18) / 17);
      const offX = (w - cols * 13) / 2 + 3;
      for (let c = 0; c < cols; c++) {
        for (let row = 0; row < rows; row++) {
          const p = r();
          wins.push({
            x: x + offX + c * 13,
            y: H - h + 14 + row * 17,
            mode: p < 0.1 ? 2 : p < 0.24 ? 1 : 0,
            d: 6 + r() * 10,
            dl: -r() * 16,
          });
        }
      }
    }
    out.push({ x, w, h, ant: r() < 0.18, wins });
    x += w + Math.round(2 + r() * 10);
  }
  return out;
}

const FAR = build(7, 90, 220, 46, 110, false);
const NEAR = build(42, 50, 160, 54, 130, true);

export default function Skyline({ height = 240, opacity = 1 }: { height?: number; opacity?: number }) {
  return (
    <div className="sky absolute left-0 right-0 bottom-0 pointer-events-none" style={{ height, opacity }} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" className="w-full h-full block">
        <g className="sky-far">
          {FAR.map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={H - b.h} width={b.w} height={b.h} fill="#101012" />
              {b.ant && <rect x={b.x + b.w / 2 - 1} y={H - b.h - 18} width={2} height={18} fill="#101012" />}
            </g>
          ))}
        </g>
        <g>
          {NEAR.map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={H - b.h} width={b.w} height={b.h} fill="#141416" />
              <rect x={b.x} y={H - b.h} width={b.w} height={2} fill="#1C1C1F" />
              {b.ant && <rect x={b.x + 8} y={H - b.h - 14} width={2} height={14} fill="#141416" />}
              {b.wins.map((w, j) =>
                w.mode === 2 ? (
                  <rect key={j} className="sky-win" x={w.x} y={w.y} width={6} height={9} rx={1} fill="#C8A84E" style={{ animationDuration: `${w.d.toFixed(1)}s`, animationDelay: `${w.dl.toFixed(1)}s` }} />
                ) : (
                  <rect key={j} x={w.x} y={w.y} width={6} height={9} rx={1} fill="#C8A84E" opacity={w.mode === 1 ? 0.42 : 0.05} />
                )
              )}
            </g>
          ))}
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-[40%]" style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }} />
    </div>
  );
}
