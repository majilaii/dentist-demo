"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Splits a target element's text into per-unit spans wrapped in a
 * clipping mask so each unit can translate up from below its baseline.
 * mode "chars" splits every visible glyph (keeps whole words unbroken for wrapping).
 * mode "words" splits on whitespace.
 */
function splitText(el: HTMLElement, mode: "chars" | "words") {
  if (el.dataset.split === mode) return;
  const text = el.textContent ?? "";
  el.textContent = "";

  const makeUnit = (content: string) => {
    const mask = document.createElement("span");
    mask.className = "word-mask";
    const inner = document.createElement("span");
    inner.className = "word-inner";
    inner.textContent = content;
    mask.appendChild(inner);
    return mask;
  };

  if (mode === "words") {
    text.split(/(\s+)/).forEach((chunk) => {
      if (!chunk) return;
      if (!chunk.trim()) el.appendChild(document.createTextNode(chunk));
      else el.appendChild(makeUnit(chunk));
    });
  } else {
    // chars: wrap each word in inline-block so it stays unbroken, then split chars inside
    text.split(/(\s+)/).forEach((chunk) => {
      if (!chunk) return;
      if (!chunk.trim()) {
        el.appendChild(document.createTextNode(chunk));
        return;
      }
      const wordWrap = document.createElement("span");
      wordWrap.className = "char-word";
      for (const ch of Array.from(chunk)) wordWrap.appendChild(makeUnit(ch));
      el.appendChild(wordWrap);
    });
  }
  el.dataset.split = mode;
}

export default function Animations({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* Set initial hidden states here (not in CSS) so the UI stays visible
       * if JS ever fails to run. useLayoutEffect blocks paint, so no FOUC. */
      gsap.set("[data-ani='navbar']", { yPercent: -101, autoAlpha: 0 });
      gsap.set("[data-ani='hero-bg']", { scale: 1.5 });
      gsap.set("[data-ani='hero-button-group'] > *", { opacity: 0 });
      gsap.set("[data-ani='scroll']", { autoAlpha: 0 });
      gsap.set("[data-ani='stagger'] > *", { autoAlpha: 0 });

      /* ── NAVBAR scroll-shrink state (intro tweened on hero timeline) ── */
      const navbar = document.querySelector<HTMLElement>("[data-ani='navbar']");
      if (navbar) {
        ScrollTrigger.create({
          start: 40,
          end: 99999,
          onUpdate: (self) => {
            navbar.classList.toggle("is-scrolled", self.scroll() > 40);
          },
        });
      }

      /* ── HERO — mirrors Webflow IX3 timeline from the live site ──
       *   position 0.0   bg: scale 1.5 → 1.0 over 3s  (no blur)
       *   position 1.5   navbar slides down (1s)
       *   position 1.5   hero-title chars: y 101% → 0, stagger 0.5
       *   position 2.0   hero-subtitle chars: y 101% → 0, stagger 0.5
       *   position 2.5   hero-description words: 0.75s, stagger 0.5
       *   position 3.25  hero-button-group: 0.75s, stagger 0.5
       */
      const titleEls = gsap.utils.toArray<HTMLElement>("[data-ani='hero-title']");
      titleEls.forEach((el) => splitText(el, "chars"));
      const subtitleEls = gsap.utils.toArray<HTMLElement>("[data-ani='hero-subtitle']");
      subtitleEls.forEach((el) => splitText(el, "chars"));
      const descriptionEls = gsap.utils.toArray<HTMLElement>("[data-ani='hero-description']");
      descriptionEls.forEach((el) => splitText(el, "words"));

      const titleChars = titleEls.flatMap((el) =>
        Array.from(el.querySelectorAll<HTMLElement>(".word-inner"))
      );
      const subtitleChars = subtitleEls.flatMap((el) =>
        Array.from(el.querySelectorAll<HTMLElement>(".word-inner"))
      );
      const descriptionWords = descriptionEls.flatMap((el) =>
        Array.from(el.querySelectorAll<HTMLElement>(".word-inner"))
      );

      /* Hide hero chars/words via GSAP (not CSS) so plain text shows if JS fails. */
      gsap.set([...titleChars, ...subtitleChars, ...descriptionWords], {
        yPercent: 101,
        opacity: 0,
      });

      const heroBg = document.querySelector<HTMLElement>("[data-ani='hero-bg']");
      const heroButtons = document.querySelector<HTMLElement>("[data-ani='hero-button-group']");

      const heroTl = gsap.timeline();

      if (heroBg) {
        heroTl.fromTo(
          heroBg,
          { scale: 1.5 },
          { scale: 1.0, duration: 3, ease: "power2.out" },
          0
        );
      }

      if (navbar) {
        heroTl.fromTo(
          navbar,
          { yPercent: -101, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 1, ease: "power2.out" },
          1.5
        );
      }

      const staggerAmount = (count: number, total: number) =>
        count > 1 ? total / (count - 1) : 0;

      if (titleChars.length) {
        heroTl.fromTo(
          titleChars,
          { yPercent: 101, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            stagger: staggerAmount(titleChars.length, 0.5),
          },
          1.5
        );
      }

      if (subtitleChars.length) {
        heroTl.fromTo(
          subtitleChars,
          { yPercent: 101, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            stagger: staggerAmount(subtitleChars.length, 0.5),
          },
          2.0
        );
      }

      if (descriptionWords.length) {
        heroTl.fromTo(
          descriptionWords,
          { yPercent: 101, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            stagger: staggerAmount(descriptionWords.length, 0.5),
          },
          2.5
        );
      }

      if (heroButtons) {
        heroTl.fromTo(
          heroButtons.children,
          { yPercent: 101, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            stagger: staggerAmount(heroButtons.children.length, 0.3),
          },
          2.4
        );
      }

      /* ── SCROLL-TRIGGERED FADES ── */
      const scrollEls = gsap.utils.toArray<HTMLElement>("[data-ani='scroll']");
      scrollEls.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /* ── STAGGERED CHILDREN ── */
      const staggerParents = gsap.utils.toArray<HTMLElement>("[data-ani='stagger']");
      staggerParents.forEach((parent) => {
        const items = parent.children;
        gsap.fromTo(
          items,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /* ── IMAGE REVEAL — clip-path wipe ── */
      const reveals = gsap.utils.toArray<HTMLElement>("[data-ani='reveal']");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /* ── HEADER LINES — grow from 0 width ── */
      const lines = gsap.utils.toArray<HTMLElement>(".header-line");
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /* ── PARALLAX IMAGES ── */
      const parallaxImages = gsap.utils.toArray<HTMLElement>("[data-ani='parallax']");
      parallaxImages.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
