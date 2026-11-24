"use strict";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const visibleFraction = 0.6;
const holdTime = 400;

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const scenes = document.querySelectorAll("[data-scene]");
  const pending = new Map();

  function visibleArea(scene) {
    const rect = scene.getBoundingClientRect();
    const viewport = document.documentElement;
    const width = Math.max(0, Math.min(rect.right, viewport.clientWidth) - Math.max(rect.left, 0));
    const height = Math.max(0, Math.min(rect.bottom, viewport.clientHeight) - Math.max(rect.top, 0));
    return width * height / (rect.width * rect.height);
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const scene = entry.target;

      if (entry.intersectionRatio < visibleFraction || document.hidden) {
        window.clearTimeout(pending.get(scene));
        pending.delete(scene);
        continue;
      }

      if (pending.has(scene)) {
        continue;
      }

      pending.set(scene, window.setTimeout(() => {
        pending.delete(scene);
        if (!document.hidden && visibleArea(scene) >= visibleFraction) {
          scene.classList.add("scene-active");
          observer.unobserve(scene);
        }
      }, holdTime));
    }
  }, { threshold: visibleFraction });

  function updateObservation() {
    if (document.hidden) {
      observer.disconnect();
      pending.forEach((timer) => window.clearTimeout(timer));
      pending.clear();
      return;
    }

    for (const scene of scenes) {
      if (!scene.classList.contains("scene-active")) {
        observer.observe(scene);
      }
    }
  }

  document.addEventListener("visibilitychange", updateObservation);
  updateObservation();
}
