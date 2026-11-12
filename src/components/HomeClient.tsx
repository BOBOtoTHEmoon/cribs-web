"use client";
import { useReveal } from "@/components/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Dual from "@/components/Dual";
import AppSection from "@/components/AppSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function HomeClient() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Dual />
        <ServicesSection />
        <AppSection />
      </main>
      <Footer />
    </>
  );
}
