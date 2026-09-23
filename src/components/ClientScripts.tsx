'use client';
import React, { useState } from 'react';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { useJourneyNav } from '@/hooks/useJourneyNav';
import { processSteps, type ProcessStep } from '@/data/process';
import Modal from '@/components/Modal';

export default function ClientScripts() {
  useRevealAnimation();
  useJourneyNav();

  const [activeStep, setActiveStep] = useState<ProcessStep | null>(null);

  // Attach click handlers to .procCard elements after mount
  React.useEffect(() => {
    const cards = document.querySelectorAll('.procCard');
    const handlers: Array<[Element, EventListener]> = [];

    cards.forEach((card, index) => {
      const handler: EventListener = () => {
        const step = processSteps[index % processSteps.length];
        if (step) setActiveStep(step);
      };
      card.addEventListener('click', handler);
      handlers.push([card, handler]);
    });

    return () => {
      handlers.forEach(([el, handler]) => el.removeEventListener('click', handler));
    };
  }, []);

  return (
    <>
      {activeStep && (
        <Modal step={activeStep} onClose={() => setActiveStep(null)} />
      )}
    </>
  );
}
