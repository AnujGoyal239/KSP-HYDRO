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
      year: '2007',
      title: 'Entry into Water & Wastewater Projects',
      description:
        'KSP Hydro Engineers Pvt. Ltd. dedicatedly incorporated for Projects Division under Water.',
      side: 'right'
    },
    {
      year: '2011',
      title: 'Infrastructure & Capability Expansion',
      description:
        'Start of new manufacturing facility in Jaipur (RIICO).',
      side: 'left'
    },
    {
      year: '2015',
      title: 'Administrative & Geographic Growth',
      description:
        'Established new administrative offices and expanded presence across key regions in India.',
      side: 'right'
    },
    {
      year: '2018',
      title: 'Innovation Award',
      description:
        'Recognized for sustainable water recycling technology.',
      side: 'left'
    },
    {
      year: '2020',
      title: 'Major Milestone',
      description:
        'Successfully commissioned 500+ water treatment systems.',
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
    <div className={`timeline-card bg-white rounded-lg p-8 w-full text-center md:p-5 md:${side === 'left' ? 'text-right' : 'text-left'} shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]`}>
      {/* Year */}
      <div className="mb-3 md:mb-2">
        <span className="text-4xl font-bold text-blue-600 md:text-2xl">{year}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 md:text-xl md:font-semibold">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-base leading-relaxed text-slate-500 md:text-sm">
        {description}
      </p>
    </div>
  );

  return (
    <section ref={containerRef} className="journey-section relative w-full px-6 py-20 overflow-hidden">

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
          <div className="space-y-6 md:space-y-12">
            {journeyEvents.map((event, index) => (
              <div key={index} className="timeline-item relative">
                {/* Desktop Layout */}
                <div className="items-center hidden md:flex">
                  {/* Left side content */}
                  <div className={`w-1/2 ${event.side === 'left' ? 'pr-12' : ''}`}>
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
                    <div className="timeline-dot w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-md" />
                  </div>

                  {/* Right side content */}
                  <div className={`w-1/2 ${event.side === 'right' ? 'pl-12' : ''}`}>
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
