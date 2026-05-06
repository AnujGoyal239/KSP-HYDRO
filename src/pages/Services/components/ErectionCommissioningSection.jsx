import React, { useRef } from 'react';
import { Wrench, HardHat, ClipboardCheck, Shield, CheckCircle, MonitorPlay, Headphones, FileText, Settings } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { erectionCommissioningData } from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const ErectionCommissioningSection = () => {
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
    const executionCards = gsap.utils.toArray(cardsGrid.children);

    // Section 3: Handover Strip
    const handoverStrip = container.children[2];
    const handoverItemsGrid = handoverStrip.querySelector('.grid');
    const handoverItems = handoverItemsGrid ? gsap.utils.toArray(handoverItemsGrid.children) : [];

    // Initial States
    const allElements = [headerIconWrapper, headerTitle, headerDesc, ...executionCards, handoverStrip];

    if (prefersReduced) {
      gsap.set(allElements, { opacity: 0 });
    } else {
      gsap.set(allElements, { opacity: 0 });
      // Y values set inside matchMedia
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      const headerY = isDesktop ? 22 : 14;
      const cardY = isDesktop ? 30 : 16;
      const stripY = isDesktop ? 20 : 14;

      if (!prefersReduced) {
        gsap.set([headerIconWrapper, headerTitle, headerDesc], { y: headerY });
        gsap.set(executionCards, { y: cardY });
        gsap.set(handoverStrip, { y: stripY });
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

      // 2. Execution Cards Reveal
      if (!prefersReduced) {
        tl.to(executionCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(executionCards, { opacity: 1, duration: 0.8, stagger: 0.14 }, "-=0.2");
      }

      // 3. Handover Strip Reveal
      if (!prefersReduced) {
        tl.to(handoverStrip, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(handoverStrip, { opacity: 1, duration: 0.8 }, "-=0.2");
      }

      // Micro-interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        // Execution Cards Hover
        executionCards.forEach(card => {
          const iconWrapper = card.querySelector('div'); // First div is icon wrapper

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -3,
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)", // slightly increased shadow (default is shadow-sm)
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: -2, scale: 1.05, duration: 0.25, ease: "power2.out" });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", // shadow-sm (original)
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" });
            }
          });
        });

        // Handover Items Hover
        handoverItems.forEach(item => {
          const iconWrapper = item.querySelector('div'); // First div is icon wrapper
          if (iconWrapper) {
            item.addEventListener('mouseenter', () => {
              gsap.to(iconWrapper, { scale: 1.06, duration: 0.25, ease: "power2.out" });
            });
            item.addEventListener('mouseleave', () => {
              gsap.to(iconWrapper, { scale: 1, duration: 0.25, ease: "power2.out" });
            });
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="erection-commissioning" className="w-full py-12 lg:py-16">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div
            className="inline-flex items-center justify-center mb-6 w-14 h-14 rounded-xl"
            style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
          >
            <Wrench className="text-white w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
            {erectionCommissioningData.title}
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg">
            {erectionCommissioningData.description}
          </p>
        </div>

        {/* Primary Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {erectionCommissioningData.cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#fef7f0] rounded-lg p-6 shadow-sm"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1f36] mb-3">
                {card.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {card.description}
              </p>
              <div>
                <p className="font-semibold text-[#1a1f36] text-sm mb-3">What We Do:</p>
                <ul className="space-y-2">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Cards Grid - Handover & Training */}
        <div className="bg-[#fef7f0] rounded-xl p-8 md:p-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a1f36] text-center mb-10">
            Handover & Training
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {erectionCommissioningData.handoverItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                  style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ErectionCommissioningSection;
