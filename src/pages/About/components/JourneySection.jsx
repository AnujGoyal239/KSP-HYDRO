import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {
  const containerRef = useRef(null);

  const journeyEvents = [
    {
      year: '2003',
      title: 'Company Founded',
      description:
        'KSP Hydro Engineers was established to deliver reliable water and wastewater treatment solutions.',
      side: 'left'
    },
    {
      year: '2005',
      title: 'Entry into Water & Wastewater Projects',
      description:
        'Started Representation for NALCO-WATER & MINING Chemicals Business in Rajasthan & North India.',
      side: 'right'
    },
    {
      year: '2008',
      title: 'Infrastructure',
      description:
        'It dedicatedly incorporated for Projects Division Under Water.',
      side: 'left'
    },
    {
      year: '2010',
      title: 'Geographic Growth',
      description:
        'Start of new Manufacturing facility in JAIPUR(RIICO)',
      side: 'right'
    },
    {
      year: '2015',
      title: 'Administrative & Geographic Growth',
      description:
        'Established new administrative offices and expanded presence across key regions in India.',
      side: 'left'
    },
    {
      year: '2018',
      title: 'Innovation Award',
      description:
        'Recognized for sustainable water recycling technology.',
      side: 'right'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description:
        'Established as a trusted partner across multiple sectors nationwide.',
      side: 'left'
    }
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Selectors
    const section = containerRef.current;
    const line = section.querySelector('.timeline-line');
    const items = gsap.utils.toArray('.timeline-item');

    // 1. Center Line Progress (Desktop Only)
    // The line is hidden on mobile via CSS classes, but we define the animation for desktop
    mm.add("(min-width: 768px)", () => {
      if (line && !prefersReduced) {
        gsap.fromTo(line,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 40%", // Start later to prevent line from racing ahead
              end: "bottom 90%",
              scrub: 1.5
            }
          }
        );
      }
    });

    // 2. Items Animation (Dots + Cards)
    items.forEach((item) => {
      const dot = item.querySelector('.timeline-dot');
      const cards = item.querySelectorAll('.timeline-card'); // Might be multiple due to mobile/desktop structure, but only one visible

      // Setup Initial States
      if (!prefersReduced) {
        // Dot
        if (dot) gsap.set(dot, { scale: 0.6, opacity: 0.4 });
        // Cards
        cards.forEach(card => {
          gsap.set(card, { opacity: 0, y: 30 }); // Default desktop y
        });
      } else {
        if (dot) gsap.set(dot, { opacity: 0.4 });
        cards.forEach(card => gsap.set(card, { opacity: 0 }));
      }

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        const { isDesktop } = context.conditions;

        // Reset/Adjust for context
        if (!prefersReduced) {
          cards.forEach(card => {
            gsap.set(card, { y: isDesktop ? 30 : 16 });
          });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: isDesktop ? "top 60%" : "top 80%", // Trigger earlier (lower on screen) to sync with line
            toggleActions: "play reverse play reverse"
          }
        });

        if (!prefersReduced) {
          // Sequence: Dot -> Card (Strictly sequential)
          if (isDesktop && dot) {
            // 1. Dot Appearance
            tl.to(dot, {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out"
            })
              // 2. Micro Pulse (chained in timeline to avoid conflict)
              .to(dot, {
                scale: 1.15,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: "power2.out"
              });
          }

          // Reveal Card (strictly after dot animation completes)
          tl.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, isDesktop && dot ? "+=0.1" : 0);

        } else {
          // Reduced Motion
          if (isDesktop && dot) tl.to(dot, { opacity: 1, duration: 0.4 });
          tl.to(cards, { opacity: 1, duration: 0.4 }, isDesktop ? "+=0.1" : 0);
        }
      });
    });

  }, { scope: containerRef });

  // Card component for consistent styling
  const MilestoneCard = ({ year, title, description, side }) => (
    <div className={`timeline-card bg-white rounded-2xl p-6 w-full shadow-lg ${
      side === 'left' 
        ? 'md:text-right' 
        : 'md:text-left'
    }`}>
      {/* Year */}
      <div className="mb-3 md:mb-2">
        <span className="text-4xl font-bold text-blue-600 md:text-3xl">{year}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );

  return (
    <section ref={containerRef} className="journey-section relative w-full px-6 py-20 overflow-hidden bg-transparent">
      {/* Background Vector - Desktop */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1341 1036"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M953.559 918.092C1176.54 814.147 1312.66 953.054 1352.85 1035.5L1349.72 379.579C1268.29 277.825 1152.42 271.563 1097.62 280.956C1042.81 290.349 983.31 248.081 980.179 223.034C980.179 59.0002 657.093 112.5 643.522 112.5C450.398 119 49.1196 105.6 -11.0004 0V514.207C5.28442 603.124 90.7795 694.233 131.491 728.673C193.081 774.593 341.941 852.343 444.66 795.987C547.38 739.631 620.035 793.378 643.522 827.296C741.231 990.102 890.926 955.663 953.559 918.092Z"
            fill="#EFFEEF"
          />
        </svg>
      </div>

      {/* Background Vector - Mobile */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 md:hidden">
        <svg
          width="100%"
          height="503"
          viewBox="0 0 377 503"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M244.307 445.968C318.205 395.476 363.318 462.951 376.638 503V185C349.653 135.573 310.213 131.913 292.05 136.476C273.887 141.038 254.167 120.507 253.129 108.34C253.129 28.6596 146.054 54.6477 141.556 54.6477C77.5519 57.805 20.5623 51.2958 0.637695 0V250.5C0.637695 294.5 -5.8623 321.5 22.6377 348C42.1377 360 51.0479 360.182 94.1377 353C124.138 348 133.772 385.388 141.556 401.864C173.938 480.948 223.549 464.218 244.307 445.968Z"
            fill="#EFFEEF"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Our Journey
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Two decades of innovation, growth, and commitment to sustainable water solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line - Desktop */}
          <div className="timeline-line hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-200 transform -translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-16">
            {journeyEvents.map((event, index) => (
              <div key={index} className="timeline-item relative">
                {/* Desktop Layout */}
                <div className="items-center hidden md:flex">
                  {/* Left side content */}
                  <div className={`w-1/2 ${event.side === 'left' ? 'pr-8' : 'pr-0'}`}>
                    {event.side === 'left' && (
                      <MilestoneCard
                        year={event.year}
                        title={event.title}
                        description={event.description}
                        side={event.side}
                      />
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute z-10 transform -translate-x-1/2 left-1/2">
                    <div className="timeline-dot w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-lg" />
                  </div>

                  {/* Right side content */}
                  <div className={`w-1/2 ${event.side === 'right' ? 'pl-8' : 'pl-0'}`}>
                    {event.side === 'right' && (
                      <MilestoneCard
                        year={event.year}
                        title={event.title}
                        description={event.description}
                        side={event.side}
                      />
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <MilestoneCard
                    year={event.year}
                    title={event.title}
                    description={event.description}
                    side={event.side}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
