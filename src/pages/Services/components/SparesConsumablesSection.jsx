import React, { useRef } from 'react';
import { Package, Droplets, CheckCircle, Truck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SparesConsumablesSection = () => {
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
    const cards = gsap.utils.toArray(cardsGrid.children);

    // Initial States
    const allElements = [headerIconWrapper, headerTitle, headerDesc, ...cards];

    if (prefersReduced) {
      gsap.set(allElements, { opacity: 0 });
    } else {
      gsap.set(allElements, { opacity: 0 });
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      const headerY = isDesktop ? 22 : 14;
      const cardY = isDesktop ? 28 : 16;

      if (!prefersReduced) {
        gsap.set([headerIconWrapper, headerTitle, headerDesc], { y: headerY });
        gsap.set(cards, { y: cardY });
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
        tl.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(cards, { opacity: 1, duration: 0.8, stagger: 0.14 }, "-=0.2");
      }

      // Micro-interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        cards.forEach(card => {
          const iconWrapper = card.querySelector('.icon-wrapper');

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
      }
    });

  }, { scope: containerRef });

  const offerings = [
    {
      icon: Package,
      title: "Spares",
      description: "Genuine spare parts for all water treatment equipment to ensure longevity and reliability.",
      items: [
        "Pumps and Motors",
        "Valves and Actuators",
        "Instrumentation & Sensors",
        "Electrical Components"
      ]
    },
    {
      icon: Droplets,
      title: "Consumables",
      description: "High-quality consumables for optimal plant performance and water quality.",
      items: [
        "Water Treatment Chemicals",
        "Filter Media (Sand, Carbon)",
        "RO & UF Membranes",
        "Cartridge Filters"
      ]
    },
    {
      icon: Truck,
      title: "Logistics & Support",
      description: "Efficient supply chain and technical support for seamless operations.",
      items: [
        "Timely Delivery",
        "Installation Support",
        "Stock Management",
        "Quality Assurance"
      ]
    }
  ];

  return (
    <section ref={containerRef} id="spares-consumables" className="w-full py-16 lg:py-24 bg-gray-50/50">
      <div className="container px-4 mx-auto lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center justify-center mb-6 w-14 h-14 bg-emerald-500 rounded-xl">
            <Package className="text-white w-7 h-7" />
          </div>
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">
            Spares & Consumables
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
            One-stop solution for all your water treatment plant needs, ensuring uninterrupted performance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg lg:p-8"
            >
              <div
                className="icon-wrapper flex items-center justify-center w-12 h-12 mb-5 rounded-xl"
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
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SparesConsumablesSection;
