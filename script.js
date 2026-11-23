"use strict";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }

      entry.target.classList.add("scene-active");
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.18 });

  for (const scene of document.querySelectorAll("[data-scene]")) {
    observer.observe(scene);
  }
}
