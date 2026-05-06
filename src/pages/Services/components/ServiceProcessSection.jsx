import React, { useRef } from 'react';
import { Handshake, MapPin, FileText, HardHat, CheckCircle, Settings } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceProcessSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Element Selection via Structure
    const container = containerRef.current.querySelector('.container');
    if (!container) return;

    // Section 1: Header
    const headerBlock = container.children[0];
    const headerTitle = headerBlock.children[0];
    const headerDesc = headerBlock.children[1];

    // Section 2: Process Grid
    const processGrid = container.children[1];
    const processCards = gsap.utils.toArray(processGrid.children);

    // Initial States
    const allElements = [headerTitle, headerDesc, ...processCards];

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

      const headerY = isDesktop ? 20 : 12;
      const cardY = isDesktop ? 24 : 14;

      if (!prefersReduced) {
        gsap.set([headerTitle, headerDesc], { y: headerY });
        gsap.set(processCards, { y: cardY });
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
        tl.to(headerTitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(headerDesc, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
      } else {
        tl.to([headerTitle, headerDesc], { opacity: 1, duration: 0.6, stagger: 0.1 });
      }

      // 2. Process Cards Reveal
      if (!prefersReduced) {
        tl.to(processCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(processCards, { opacity: 1, duration: 0.8, stagger: 0.14 }, "-=0.2");
      }

      // Micro-interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        processCards.forEach(card => {
          // Structure: 
          // card -> [div.flex (badge+text), svg.icon]
          // div.flex -> [div (badge), div (text)]
          const contentWrapper = card.children[0];
          const badgeWrapper = contentWrapper ? contentWrapper.children[0] : null;
          const iconSvg = card.children[1];

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -3,
              // Original is border-dashed border-sky-200. We can add shadow or deepen color slightly if needed, 
              // but requirements say "Shadow depth increases subtly".
              // Current class doesn't have shadow, it has border. Let's add a subtle shadow.
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)",
              duration: 0.25,
              ease: "power2.out"
            });

            // Badge Scale
            if (badgeWrapper) {
              gsap.to(badgeWrapper, { scale: 1.05, duration: 0.25, ease: "power2.out" });
            }

            // Icon Lift
            if (iconSvg) {
              gsap.to(iconSvg, { y: -2, duration: 0.25, ease: "power2.out" });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "none",
              duration: 0.25,
              ease: "power2.out"
            });

            if (badgeWrapper) {
              gsap.to(badgeWrapper, { scale: 1, duration: 0.25, ease: "power2.out" });
            }

            if (iconSvg) {
              gsap.to(iconSvg, { y: 0, duration: 0.25, ease: "power2.out" });
            }
          });
        });
      }
    });

  }, { scope: containerRef });

  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Understanding your requirements and challenges",
      icon: Handshake
    },
    {
      number: 2,
      title: "Site Assessment",
      description: "Detailed evaluation and feasibility study",
      icon: MapPin
    },
    {
      number: 3,
      title: "Proposal & Design",
      description: "Customized solution with detailed documentation",
      icon: FileText
    },
    {
      number: 4,
      title: "Installation",
      description: "Professional erection and commissioning",
      icon: HardHat
    },
    {
      number: 5,
      title: "Testing & Handover",
      description: "Validation and training completion",
      icon: CheckCircle
    },
    {
      number: 6,
      title: "Ongoing Support",
      description: "Continuous maintenance and optimization",
      icon: Settings
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Complete Service Process
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            From initial consultation to ongoing support, we&apos;re with you every step of the way
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-sky-50/50 rounded-lg border border-dashed border-sky-200 p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <step.icon className="w-6 h-6 text-blue-600 ml-14" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
