import { Lightbulb, Cog, Headphones } from 'lucide-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const services = [
    {
      id: '01',
      icon: Lightbulb,
      title: 'Design Engineering & Consultancy',
      description: 'We assess requirements, select the right technology, and design efficient, compliant solutions tailored to real-world conditions.',
      slug: 'design-engineering'
    },
    {
      id: '02',
      icon: Cog,
      title: 'Erection & Commissioning',
      description: 'On-site execution, installation, and commissioning of water infrastructure projects. Our teams ensure seamless integration, system readiness, and reliable performance from day one.',
      slug: 'erection-commissioning'
    },
    {
      id: '03',
      icon: Headphones,
      title: 'Operation & Maintenance',
      description: 'Long-term operation and maintenance support to keep systems running efficiently. From routine monitoring to troubleshooting and compliance, we ensure uninterrupted performance.',
      slug: 'operation-maintenance'
    },
  ];

  const handleServiceClick = (slug) => {
    navigate(`/services#${slug}`);
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initial State: Set opacity to 0 immediately to avoid FOUC, unless reduced motion
    if (!prefersReducedMotion) {
      gsap.set('.service-card', { opacity: 0 });
    }

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop } = context.conditions;

        if (prefersReducedMotion) {
          // Fade in for reduced motion
          gsap.to('.service-card', { opacity: 1, duration: 0.8, stagger: 0.2 });
          return;
        }

        // --- DESKTOP ANIMATION (PINNED) ---
        if (isDesktop) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=200%",
              pin: true,
              pinSpacing: true,
              scrub: 1, // Smooth scrubbing
              anticipatePin: 1
            }
          });

          // 1. Initial State: Header visible, Cards hidden
          gsap.set('.service-card', { y: 100, opacity: 0 });
          gsap.set('.service-line-progress', { scaleX: 0 });

          // 2. Animate Connecting Line (Progressive)
          tl.to('.service-line-progress', {
            scaleX: 1,
            duration: 1.5,
            ease: "none",
            transformOrigin: "left center"
          }, 0);

          // 3. Reveal Cards Sequentially
          const cards = gsap.utils.toArray('.service-card');
          cards.forEach((card, index) => {
            // Calculate staggered start time relative to line progress
            const startTime = index * 0.5;

            tl.to(card, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out"
            }, startTime);
          });
        }

        // --- MOBILE ANIMATION (NORMAL SCROLL) ---
        else {
          // Reset any potential pinned styles
          gsap.set('.service-card', { y: 30, opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          });

          tl.to('.service-card', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
          });
        }
      }
    );

    // --- MICRO ANIMATIONS (HOVER - DESKTOP ONLY) ---
    if (!prefersReducedMotion && window.matchMedia("(min-width: 768px)").matches) {
      const cards = gsap.utils.toArray('.service-card');

      cards.forEach(card => {
        const innerCard = card.querySelector('.service-card-inner');
        const icon = card.querySelector('.service-icon');
        const link = card.querySelector('.learn-more');

        // Create hover timeline
        const hoverTl = gsap.timeline({ paused: true });

        // Card Lift (Targeting Inner Card to avoid conflict with ScrollTrigger transform)
        if (innerCard) {
          hoverTl.to(innerCard, {
            y: -4,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            duration: 0.3,
            ease: "power2.out"
          }, 0);
        }

        // Icon Float & Scale
        if (icon) {
          hoverTl.to(icon, {
            y: -4,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          }, 0);
        }

        // Link Slide
        if (link) {
          hoverTl.to(link, {
            x: 4,
            duration: 0.3,
            ease: "power2.out"
          }, 0);
        }

        card.addEventListener('mouseenter', () => hoverTl.play());
        card.addEventListener('mouseleave', () => hoverTl.reverse());
      });
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 services-section">
      <div className="relative z-10 flex flex-col justify-center h-full px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-wide text-teal-600 uppercase">
            End-to-End Support
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600">
            Complete lifecycle support from initial design through ongoing maintenance
          </p>
        </div>

        {/* Services Cards */}
        <div className="relative grid grid-cols-1 gap-12 pt-8 md:grid-cols-3 md:gap-10">
          {/* Connecting Lines - Desktop Only */}
          <div className="absolute hidden md:block top-[55%] left-0 right-0 z-0 px-8">
            <div className="relative flex justify-between max-w-5xl mx-auto">
              {/* Base Line (Faint) */}
              <div className="absolute top-0 left-0 w-full h-px bg-gray-200"></div>

              {/* Progress Line (Animated) */}
              <div className="absolute top-0 left-0 w-full h-px bg-[#00C950] service-line-progress origin-left scale-x-0"></div>
            </div>
          </div>

          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="relative z-10 pt-8 service-card">
                {/* Card */}
                <div
                  onClick={() => handleServiceClick(service.slug)}
                  className="relative flex flex-col items-center h-full px-8 py-10 text-center transition-shadow duration-300 bg-white shadow-lg cursor-pointer rounded-xl md:items-start md:text-left service-card-inner hover:shadow-xl"
                >
                  {/* Number Badge - Top Right - Overlapping card boundary */}
                  <div className="absolute -top-6 -right-3">
                    <div
                      className="flex items-center justify-center w-12 h-12 text-base font-bold text-white rounded-full shadow-md"
                      style={{ background: 'linear-gradient(135deg, #155DFC 0%, #00C950 100%)' }}
                    >
                      {service.id}
                    </div>
                  </div>

                  {/* Icon Container - Top Left on Desktop, Centered on Mobile */}
                  <div className="mb-8 service-icon-container">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-lg service-icon"
                      style={{ background: 'linear-gradient(135deg, #DBEAFE 0%, #DCFCE7 100%)' }}
                    >
                      <Icon className="w-8 h-8 text-cyan-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-5 text-xl font-bold leading-tight text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-sm font-medium text-amber-500 mt-auto w-full learn-more cursor-pointer">
                    <span>👉</span>
                    <span>Learn more</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
