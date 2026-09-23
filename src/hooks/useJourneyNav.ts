'use client';
import { useEffect } from 'react';

/**
 * Observes sections and activates the corresponding .jStop dot
 * in the JourneyNav sidebar as the user scrolls through the page.
 * Also attaches click-to-scroll behaviour to each .jStop element.
 */
export function useJourneyNav() {
  useEffect(() => {
    const stops = Array.from(document.querySelectorAll('.jStop'));
    const sections = Array.from(document.querySelectorAll('section'));

    const journeyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx === -1) return;
            stops.forEach((s) => s.classList.remove('active'));
            if (stops[idx]) stops[idx].classList.add('active');
          }
        });
      },
      { threshold: 0, rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((sec) => journeyObserver.observe(sec));

    // Click-to-scroll
    const handlers: Array<[Element, EventListener]> = [];
    stops.forEach((stop) => {
      const handler: EventListener = (e) => {
        const targetId = (e.currentTarget as HTMLElement).getAttribute('data-target');
        if (targetId) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      stop.addEventListener('click', handler);
      handlers.push([stop, handler]);
    });

    return () => {
      sections.forEach((sec) => journeyObserver.unobserve(sec));
      journeyObserver.disconnect();
      handlers.forEach(([el, handler]) => el.removeEventListener('click', handler));
    };
  }, []);
}
