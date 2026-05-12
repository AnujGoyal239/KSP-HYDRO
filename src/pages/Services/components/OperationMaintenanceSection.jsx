import React, { useRef } from 'react';
import { Settings, CalendarCheck, Activity, HeadphonesIcon, CheckCircle, Clock, TrendingUp, Shield, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { operationMaintenanceData } from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const OperationMaintenanceSection = () => {
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
    const omCards = gsap.utils.toArray(cardsGrid.children);

    // Section 3: Benefits Strip
    const benefitsStrip = container.children[2];
    const benefitsGrid = benefitsStrip.querySelector('.grid');
    const benefitsItems = benefitsGrid ? gsap.utils.toArray(benefitsGrid.children) : [];

    // Initial States
    const allElements = [headerIconWrapper, headerTitle, headerDesc, ...omCards, benefitsStrip];

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
      const cardY = isDesktop ? 28 : 16;
      const stripY = isDesktop ? 20 : 14;

      if (!prefersReduced) {
        gsap.set([headerIconWrapper, headerTitle, headerDesc], { y: headerY });
        gsap.set(omCards, { y: cardY });
        gsap.set(benefitsStrip, { y: stripY });
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

      // 2. O&M Cards Reveal
      if (!prefersReduced) {
        tl.to(omCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(omCards, { opacity: 1, duration: 0.8, stagger: 0.14 }, "-=0.2");
      }

      // 3. Benefits Strip Reveal
      if (!prefersReduced) {
        tl.to(benefitsStrip, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(benefitsStrip, { opacity: 1, duration: 0.8 }, "-=0.2");
      }

      // Micro-interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        // O&M Cards Hover
        omCards.forEach(card => {
          const iconWrapper = card.querySelector('div'); // First div is icon wrapper

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -3,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // shadow-xl
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
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // shadow-lg (original)
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" });
            }
          });
        });

        // Benefits Items Hover
        benefitsItems.forEach(item => {
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
    <section ref={containerRef} id="operation-maintenance" className="w-full py-16 lg:py-24">
      <div className="container px-4 mx-auto lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center justify-center mb-6 w-14 h-14 bg-emerald-500 rounded-xl">
            <Settings className="text-white w-7 h-7" />
          </div>
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">
            {operationMaintenanceData.title}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
            {operationMaintenanceData.description}
          </p>
        </div>

        {/* Primary Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {operationMaintenanceData.cards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg lg:p-8"
            >
              <div
                className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #00A63E 0%, #155DFC 100%)' }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {card.title}
              </h3>

              <p className="mb-5 leading-relaxed text-gray-500">
                {card.description}
              </p>

              <p className="mb-3 text-sm font-semibold text-slate-900">
                Includes:
              </p>

              <ul className="space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className={`flex items-start gap-2 ${itemIndex === 3 ? 'hidden md:flex' : ''}`}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AMC Benefits Section */}
        <div className="p-8 shadow-sm bg-gray-50 rounded-lg lg:p-12">
          <h3 className="mb-10 text-2xl font-bold text-center text-slate-900">
            AMC Benefits Section
          </h3>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {operationMaintenanceData.benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                  style={{ background: 'linear-gradient(180deg, #00A63E 0%, #155DFC 100%)' }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900">
                  {benefit.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationMaintenanceSection;
