'use client';
import React from 'react';
import { processSteps } from '@/data/process';

// Duplicate items to create an infinite-scrolling carousel effect without manual JSX repetition
const carouselSteps = [...processSteps, ...processSteps, ...processSteps, ...processSteps];

export default function Process() {
  return (
    <section id="process" className="sec">
      <div className="secWrap">
        <h2 className="secTitle rev d1">De idea a <em>realidad</em> en 4 pasos</h2>
      </div>

      <div className="processCarousel">
        <div className="processConnector" />
        <div className="processTrack" id="processTrack">
          {carouselSteps.map((step, index) => (
            <div key={index} className="processCard procCard">
              <div className="pOrb">{step.num}</div>
              <div className="pTitle">{step.title.replace(/^\d+ - /, '')}</div>
              <div className="pDesc">{step.desc}</div>
              <div className="pDetail">{step.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
