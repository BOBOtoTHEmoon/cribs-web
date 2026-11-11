/**
 * Cribs custom duotone icon set. Drawn on a 32px grid in the same rounded
 * stroke style as the logo, with a soft gold fill accent on each icon.
 */
type P = { size?: number; className?: string; style?: React.CSSProperties };

function Svg({ size = 30, className = "", style, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const A = { fill: "currentColor", fillOpacity: 0.32, stroke: "none" } as const;

export const IcSearchHome = (p: P) => (
  <Svg {...p}>
    <circle cx="14" cy="14" r="9" {...A} />
    <circle cx="14" cy="14" r="9" />
    <path d="M10 15.4 14 11.8l4 3.6" strokeWidth={1.7} />
    <path d="M11.4 14.3v3.9h5.2v-3.9" strokeWidth={1.7} />
    <path d="M20.7 20.7 27 27" strokeWidth={2.6} />
  </Svg>
);

export const IcShield = (p: P) => (
  <Svg {...p}>
    <path d="M16 4v24c-5.8-2-10-6.5-10-13V8z" {...A} />
    <path d="M16 4 26 8v7c0 6.5-4.2 11-10 13C10.2 26 6 21.5 6 15V8z" />
    <path d="m11.6 15.8 3.2 3.2 5.8-6.2" />
  </Svg>
);

export const IcHomeCheck = (p: P) => (
  <Svg {...p}>
    <path d="M8 12.6V27h16V12.6L16 6z" {...A} />
    <path d="M4.5 14.6 16 5l11.5 9.6" />
    <path d="M8 12.6V27h16V12.6" />
    <path d="m12 18.6 3 3 5.4-5.6" />
  </Svg>
);

export const IcChat = (p: P) => (
  <Svg {...p}>
    <path d="M13 5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-2v3.5L20.5 18H13a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" {...A} />
    <path d="M6 11h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7l-4 3.5V23H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z" />
    <path d="M7.5 16h9M7.5 19.5h5" />
  </Svg>
);

export const IcHeart = (p: P) => (
  <Svg {...p}>
    <path d="M16 27S4 20 4 11.8C4 8 7 5 10.6 5c2.4 0 4.4 1.4 5.4 3.4C17 6.4 19 5 21.4 5 25 5 28 8 28 11.8 28 20 16 27 16 27z" />
    <path d="M16 21.5s-6-3.6-6-7.6c0-1.9 1.4-3.3 3.1-3.3 1.2 0 2.3.7 2.9 1.7.6-1 1.7-1.7 2.9-1.7 1.7 0 3.1 1.4 3.1 3.3 0 4-6 7.6-6 7.6z" {...A} />
  </Svg>
);

export const IcWallet = (p: P) => (
  <Svg {...p}>
    <path d="m7 9 13.5-4.5L22.6 9z" {...A} />
    <path d="m7 9 13.5-4.5L22.6 9" />
    <rect x="4" y="9" width="24" height="17.5" rx="3" />
    <rect x="18.5" y="14.5" width="9.5" height="6.5" rx="2" {...A} />
    <rect x="18.5" y="14.5" width="9.5" height="6.5" rx="2" />
    <circle cx="22.3" cy="17.75" r="1.1" fill="currentColor" stroke="none" />
  </Svg>
);

export const IcTour = (p: P) => (
  <Svg {...p}>
    <rect x="8" y="3.5" width="16" height="25" rx="3.5" />
    <path d="M13.8 12.3 20 16l-6.2 3.7z" fill="currentColor" stroke="none" />
    <circle cx="16" cy="16" r="6.3" {...A} />
    <path d="M14 7h4" />
  </Svg>
);

export const IcUsers = (p: P) => (
  <Svg {...p}>
    <circle cx="21.5" cy="9.8" r="3.7" {...A} />
    <path d="M18.2 16.9c1-.5 2.1-.8 3.3-.8 3.7 0 6.3 2.6 6.3 7H21z" {...A} />
    <circle cx="12" cy="11" r="4.4" />
    <path d="M4.5 26.5c0-5.2 3.3-8 7.5-8s7.5 2.8 7.5 8" />
  </Svg>
);

export const IcBuilding = (p: P) => (
  <Svg {...p}>
    <rect x="19" y="12" width="8" height="15" rx="1" {...A} />
    <path d="M19 12h7a1 1 0 0 1 1 1v14" />
    <rect x="6" y="5" width="13" height="22" rx="1.5" />
    <path d="M10 10h1.6M13.4 10H15M10 14.4h1.6M13.4 14.4H15M10 18.8h1.6M13.4 18.8H15M23 16.5v.01M23 20.5v.01" />
    <path d="M11 27v-4h3v4M3.5 27h25" />
  </Svg>
);

export const IcChart = (p: P) => (
  <Svg {...p}>
    <rect x="5" y="16" width="5.2" height="11" rx="1.2" {...A} />
    <rect x="5" y="16" width="5.2" height="11" rx="1.2" />
    <rect x="13.4" y="10" width="5.2" height="17" rx="1.2" />
    <rect x="21.8" y="5" width="5.2" height="22" rx="1.2" {...A} />
    <rect x="21.8" y="5" width="5.2" height="22" rx="1.2" />
  </Svg>
);

export const IcToolbox = (p: P) => (
  <Svg {...p}>
    <path d="M4 14.5A2.5 2.5 0 0 1 6.5 12h19a2.5 2.5 0 0 1 2.5 2.5V17H4z" {...A} />
    <rect x="4" y="12" width="24" height="14.5" rx="2.5" />
    <path d="M12 12V8.5A1.5 1.5 0 0 1 13.5 7h5A1.5 1.5 0 0 1 20 8.5V12M4 17h24" />
    <rect x="14.3" y="15.2" width="3.4" height="4.2" rx=".9" fill="currentColor" stroke="none" />
  </Svg>
);

export const IcDocCheck = (p: P) => (
  <Svg {...p}>
    <path d="M19 4v6h6z" {...A} />
    <path d="M9 4h10l6 6v16.5a1.5 1.5 0 0 1-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5v-21A1.5 1.5 0 0 1 9 4z" />
    <path d="M19 4v6h6" />
    <path d="m11.6 18.6 3 3 6-6" />
  </Svg>
);

export const IcDoc = (p: P) => (
  <Svg {...p}>
    <path d="M19 4v6h6z" {...A} />
    <path d="M9 4h10l6 6v16.5a1.5 1.5 0 0 1-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5v-21A1.5 1.5 0 0 1 9 4z" />
    <path d="M19 4v6h6M11.5 15.5h9M11.5 19.5h9M11.5 23.5h5" />
  </Svg>
);

export const IcBell = (p: P) => (
  <Svg {...p}>
    <path d="M9 21v-7a7 7 0 0 1 14 0v7l2 3H7z" {...A} />
    <path d="M9 21v-7a7 7 0 0 1 14 0v7l2 3H7z" />
    <path d="M13.5 27a2.5 2.5 0 0 0 5 0M16 4.5V7" />
  </Svg>
);

export const IcCalendar = (p: P) => (
  <Svg {...p}>
    <path d="M5 10a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v3H5z" {...A} />
    <rect x="5" y="7" width="22" height="20" rx="3" />
    <path d="M11 4.5V9M21 4.5V9M5 13h22" />
    <path d="m11.6 19.8 3 3 5.8-5.8" />
  </Svg>
);

export const IcCard = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="12" width="25" height="4" {...A} />
    <rect x="3.5" y="8" width="25" height="17" rx="3" />
    <path d="M3.5 12h25M3.5 16h25M8 21h5" />
  </Svg>
);

export const IcKey = (p: P) => (
  <Svg {...p}>
    <circle cx="10.5" cy="16" r="6.5" {...A} />
    <circle cx="10.5" cy="16" r="6.5" />
    <circle cx="10.5" cy="16" r="2" />
    <path d="M17 16h11M23.5 16v4M27.5 16v3" />
  </Svg>
);

export const IcFlag = (p: P) => (
  <Svg {...p}>
    <path d="M8 5.5h16l-3.5 5 3.5 5H8z" {...A} />
    <path d="M8 5.5h16l-3.5 5 3.5 5H8" />
    <path d="M8 28V4.5" />
  </Svg>
);

export const IcHorizon = (p: P) => (
  <Svg {...p}>
    <path d="M9 21a7 7 0 0 1 14 0z" {...A} />
    <path d="M9 21a7 7 0 0 1 14 0M4 21h24M9 25.5h14M16 7.5v3M7.6 11.6l2 2M24.4 11.6l-2 2" />
  </Svg>
);

export const IcGem = (p: P) => (
  <Svg {...p}>
    <path d="M9 6h14l5 6.5H4z" {...A} />
    <path d="M9 6h14l5 6.5L16 27 4 12.5z" />
    <path d="M4 12.5h24M12.5 6l-2.5 6.5L16 27l6-14.5L19.5 6" />
  </Svg>
);
