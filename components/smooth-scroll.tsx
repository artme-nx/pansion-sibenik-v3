"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Content is visible by default (see .reveal in globals.css) and stays
    // that way — `immediateRender: false` stops gsap.from() from snapping
    // elements to opacity:0 the instant this effect runs; the "from" state
    // is only ever applied once ScrollTrigger actually starts the tween. If
    // ScrollTrigger never fires for an element (JS failure, odd render
    // context, automated full-page capture, etc.) the element simply stays
    // at its natural, fully visible state instead of getting stuck hidden.
    const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    const triggers = targets.map((el) =>
      gsap.from(el, {
        opacity: 0,
        y: 22,
        duration: 1.1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      })
    );

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      triggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, []);

  return <>{children}</>;
}
