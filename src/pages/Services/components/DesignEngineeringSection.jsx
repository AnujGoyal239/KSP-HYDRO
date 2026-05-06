import React, { useRef } from 'react';
import { Ban, Search, ClipboardList, Lightbulb, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { designEngineeringData } from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const DesignEngineeringSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Element Selection via Structure
    const container = containerRef.current.querySelector('.container');
    if (!container) return;

    // Section 1: Header
    const headerBlock = container.children[0];
    const headerIconWrapper = headerBlock.children[0];
    const headerTitle = headerBlock.children[1];
    const headerDesc = headerBlock.children[2];

    // Section 2: Cards
    const cardsGrid = container.children[1];
    const serviceCards = gsap.utils.toArray(cardsGrid.children);

    // Section 3: Process
    const processStrip = container.children[2];
    const processStepsGrid = processStrip.querySelector('.grid');
    const processStepsEls = processStepsGrid ? gsap.utils.toArray(processStepsGrid.children) : [];

    // Initial States
    const allElements = [headerIconWrapper, headerTitle, headerDesc, ...serviceCards, processStrip];

    if (prefersReduced) {
      gsap.set(allElements, { opacity: 0 });
    } else {
      gsap.set(allElements, { opacity: 0 });
      // Y values set inside matchMedia for responsiveness
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      const headerY = isDesktop ? 22 : 14;
      const cardY = isDesktop ? 28 : 16;
      const processY = isDesktop ? 20 : 14;

      if (!prefersReduced) {
        gsap.set([headerIconWrapper, headerTitle, headerDesc], { y: headerY });
        gsap.set(serviceCards, { y: cardY });
        gsap.set(processStrip, { y: processY });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      // 1. Header Reveal
      if (!prefersReduced) {
        tl.to(headerIconWrapper, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(headerTitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
          .to(headerDesc, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
      } else {
        tl.to([headerIconWrapper, headerTitle, headerDesc], { opacity: 1, duration: 0.6, stagger: 0.1 });
      }

      // 2. Cards Reveal
      if (!prefersReduced) {
        tl.to(serviceCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(serviceCards, { opacity: 1, duration: 0.8, stagger: 0.14 }, "-=0.2");
      }

      // 3. Process Strip Reveal
      if (!prefersReduced) {
        tl.to(processStrip, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(processStrip, { opacity: 1, duration: 0.8 }, "-=0.2");
      }

      // Micro-interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        // Service Cards Hover
        serviceCards.forEach(card => {
          const iconWrapper = card.querySelector('div'); // First div is icon wrapper

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -4,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // shadow-xl
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: -3, scale: 1.05, duration: 0.25, ease: "power2.out" });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // shadow-lg (original)
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" });
            }
          });
        });

        // Process Steps Hover
        processStepsEls.forEach(step => {
          const numberEl = step.querySelector('p'); // Number is first p
          if (numberEl) {
            step.addEventListener('mouseenter', () => {
              gsap.to(numberEl, { scale: 1.06, duration: 0.25, ease: "power2.out" });
            });
            step.addEventListener('mouseleave', () => {
              gsap.to(numberEl, { scale: 1, duration: 0.25, ease: "power2.out" });
            });
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="design-engineering" className="relative w-full py-12 overflow-hidden lg:py-16">

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className="inline-flex items-center justify-center mb-6 w-14 h-14 rounded-xl"
            style={{ background: 'linear-gradient(180deg, #155DFC 0%, #0092B8 100%)' }}
          >
            <Ban className="text-white w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
            {designEngineeringData.title}
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg">
            {designEngineeringData.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {designEngineeringData.cards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-lg"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #155DFC 0%, #0092B8 100%)' }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1f36] mb-4">
                {card.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                {card.description}
              </p>
              <div>
                <p className="font-semibold text-[#1a1f36] mb-3">Key Activities:</p>
                <ul className="space-y-2">
                  {card.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Our Consultancy Process */}
        <div className="p-8 bg-white shadow-lg rounded-xl md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1f36] text-center mb-12">
            Our Consultancy Process
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {designEngineeringData.processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#0066cc] mb-3">
                  {step.number}
                </p>
                <h4 className="text-lg font-bold text-[#1a1f36] mb-2">
                  {step.title}
                </h4>
                {step.description && (
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignEngineeringSection;
