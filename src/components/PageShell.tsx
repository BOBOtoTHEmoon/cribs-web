"use client";
import { useReveal } from "./useReveal";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <>
      <Navbar />
      <main className="pt-[68px]">{children}</main>
      <Footer />
    </>
  );
}