import Skyline from "./Skyline";

export default function HeroBg({ height = 240, opacity = 1 }: { height?: number; opacity?: number }) {
  return (
    <div className="hero-bg" aria-hidden="true">
      <Skyline height={height} opacity={opacity} />
    </div>
  );
}
