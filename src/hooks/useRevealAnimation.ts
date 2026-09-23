'use client';
import { useEffect } from 'react';

/**
 * Adds the 'in' class to elements with className 'rev'
 * when they enter the viewport, triggering reveal animations.
 */
export function useRevealAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    );

    const revealElements = document.querySelectorAll('.rev');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
