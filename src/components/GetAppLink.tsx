"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Link to the waitlist section on the home page. A plain <Link href="/#download">
 * does nothing once the URL already ends in #download (for example on a second
 * tap), so on the home page we scroll to the section ourselves every time.
 */
export default function GetAppLink({
  className,
  style,
  onClick,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (pathname !== "/") return; // other pages: normal navigation to /#download
    const el = document.getElementById("download");
    if (!el) return;
    e.preventDefault();
    // wait a frame so a closing mobile menu doesn't interrupt the scroll
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== "#download") history.replaceState(null, "", "/#download");
    });
  }

  return (
    <Link href="/#download" className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
