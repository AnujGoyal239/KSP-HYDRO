import { useRef } from "react";
import { Building2, Factory, Users } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectorsSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Hover Animation Logic (Reusable)
    const setupHoverAnimations = () => {
      const cards = gsap.utils.toArray('.sector-card');

      cards.forEach(card => {
        const iconContainer = card.querySelector('.sector-icon-container');
        const icon = card.querySelector('.sector-icon');

        const hoverTl = gsap.timeline({ paused: true });

        // Card Lift + Shadow
        hoverTl.to(card, {
          y: -6,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out"
        }, 0)

          // Icon Animation
          .to(iconContainer, {
            y: -4,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          }, 0)
          .to(icon, {
            scale: 1.06,
            duration: 0.3,
            ease: "power2.out"
          }, 0);

        card.addEventListener('mouseenter', () => hoverTl.play());
        card.addEventListener('mouseleave', () => hoverTl.reverse());
      });
    };

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isDesktop, reduceMotion } = context.conditions;

      if (reduceMotion) return;

      // 1. SECTION ENTRY
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Header Animation
      tl.fromTo('.sector-header',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )

        // Cards Staggered Entry
        .fromTo('.sector-card',
          {
            y: isDesktop ? 30 : 15,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out"
          },
          "-=0.4"
        );

      // 2. HOVER ANIMATIONS (Desktop Only)
      if (isDesktop) {
        setupHoverAnimations();
      }

    });
  }, { scope: containerRef });

  const sectors = [
    {
      id: 1,
      title: "Government & Municipalities",
      description: "Government departments, municipalities, & airports",
      icon: Building2,
    },
    {
      id: 2,
      title: "Industrial & Commercial",
      description: "Manufacturing plants, industrial facilities, & commercial buildings",
      icon: Factory,
    },
    {
      id: 3,
      title: "Institutions",
      description: "Hospitals, educational institutes, & research facilities",
      icon: Building2,
    },
    {
      id: 4,
      title: "Communities & Hospitality",
      description: "Residential colonies, hotels, malls, & museums",
      icon: Users,
    },
  ];

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden md:py-24 sectors-section">
      {/* Mobile Background Shape - Only visible on mobile */}
      <div className="absolute inset-0 block -z-10 md:hidden">
        <svg
          viewBox="0 0 375 462"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[462]  object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M44.8145 445.968C27 433.12 8 435 -1 458V142.5C21.1412 147.063 32.795 120.507 34.0602 108.34C34.0602 28.6596 164.588 54.6477 170.071 54.6477C248.093 57.805 350.211 51.2958 374.5 0V249.779C367.921 292.971 357 338.5 343 358.5C337.4 366.5 291.91 414.03 250.412 386.655C208.913 359.28 179.56 385.388 170.071 401.864C130.596 480.948 70.1188 464.218 44.8145 445.968Z"
            fill="#EFFAFE"
          />
        </svg>
      </div>

      <div className="px-4 mx-auto my-0 max-w-7xl md:px-8 md:my-0">
        {/* Section Header */}
        <div className="mb-10 text-center opacity-0 md:mb-16 sector-header">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 md:mb-4 md:text-3xl lg:text-5xl">Sectors We Serve</h2>
          <p className="max-w-xs mx-auto text-xl leading-relaxed md:max-w-2xl md:text-lg text-slate-500 md:text-slate-600">
            Delivering reliable water and wastewater solutions across diverse sectors
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 gap-4 p-6 md:p-0 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="p-6 transition-none bg-white border border-gray-100 shadow-md opacity-0 sector-card rounded-lg md:p-8"
              >
                {/* Icon - Centered on mobile, left-aligned on desktop */}
                <div className="flex justify-center mb-6 md:mb-6 md:justify-start">
                  <div className="flex items-center justify-center w-16 h-16 sector-icon-container md:w-16 md:h-16 bg-blue-50 rounded-lg md:bg-blue-100 md:rounded-xl">
                    <Icon className="w-8 h-8 text-blue-600 sector-icon md:w-8 md:h-8 md:text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title - Centered on mobile, left-aligned on desktop */}
                <h3 className="mb-3 text-xl font-bold leading-tight text-center text-gray-900 md:mb-3 md:text-xl md:text-left">
                  {sector.title}
                </h3>

                {/* Description - Centered on mobile, left-aligned on desktop */}
                <p className="text-base leading-relaxed text-center text-slate-500 md:text-base md:text-slate-600 md:text-left">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>

        

      </div>
    </section>
  );
};

export default SectorsSection;
