"use client";
import { useReveal } from "@/components/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Experience from "@/components/Experience";
import Dual from "@/components/Dual";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Experience />
        <Dual />
        <AppSection />
      </main>
      <Footer />
    </>
  );
}