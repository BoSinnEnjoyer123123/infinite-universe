"use strict";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const visibleFraction = 0.18;

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.intersectionRatio < visibleFraction) {
        continue;
      }

      entry.target.classList.add("scene-active");
      observer.unobserve(entry.target);
    }
  }, { threshold: visibleFraction });

  for (const scene of document.querySelectorAll("[data-scene]")) {
    observer.observe(scene);
  }
}
