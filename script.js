"use strict";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const visibleFraction = 0.18;
const focusedFraction = 0.5;

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const threshold = entry.target.dataset.scene === "focus" ? focusedFraction : visibleFraction;
      if (entry.intersectionRatio < threshold) {
        continue;
      }

      entry.target.classList.add("scene-active");
      observer.unobserve(entry.target);
    }
  }, { threshold: [visibleFraction, focusedFraction] });

  for (const scene of document.querySelectorAll("[data-scene]")) {
    observer.observe(scene);
  }
}
