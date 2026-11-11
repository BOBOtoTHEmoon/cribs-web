"use client";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            el.classList.add("vis");
            obs.unobserve(el);
            // drop the stagger delay once revealed so hover effects respond instantly
            window.setTimeout(() => el.classList.add("done"), 1000);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
