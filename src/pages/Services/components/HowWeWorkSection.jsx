import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { howWeWorkData } from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const HowWeWorkSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Selectors
    const heading = 'h2';
    const description = 'p';

    // Initial setup handled within matchMedia for responsiveness or globally
    if (prefersReduced) {
      gsap.set([heading, description], { opacity: 0 });
    } else {
      gsap.set(description, { opacity: 0, y: 8 });
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;
      const headingY = isDesktop ? 20 : 12;

      if (!prefersReduced) {
        gsap.set(heading, { opacity: 0, y: headingY });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (!prefersReduced) {
        tl.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        })
          .to(description, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.6");
      } else {
        tl.to(heading, { opacity: 1, duration: 0.6 })
          .to(description, { opacity: 1, duration: 0.6 }, "-=0.4");
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-8">
            {howWeWorkData.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {howWeWorkData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
