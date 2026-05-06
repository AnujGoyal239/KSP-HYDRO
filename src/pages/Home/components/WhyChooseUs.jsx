import { Award, Shield, Settings, Headphones } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseUsData } from '@/data/homeData';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      // --- SCROLL ANIMATION ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (prefersReducedMotion) {
        tl.to('.why-header, .why-card', { opacity: 1, duration: 0.5, stagger: 0.1 });
      } else {
        // Header Content
        tl.from('.why-header', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        });

        // Cards
        tl.from('.why-card', {
          y: isDesktop ? 30 : 15,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out"
        }, "-=0.4");
      }

      // --- MICRO ANIMATIONS (Desktop Only) ---
      if (isDesktop && !prefersReducedMotion) {
        const cards = gsap.utils.toArray('.why-card');

        cards.forEach(card => {
          const iconContainer = card.querySelector('.why-icon-container');
          const icon = card.querySelector('.why-icon');

          // Create hover timeline
          const hoverTl = gsap.timeline({ paused: true });

          // Card Lift & Shadow
          hoverTl.to(card, {
            y: -4,
            boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)",
            duration: 0.25,
            ease: "power2.out"
          }, 0);

          // Icon Container Lift
          if (iconContainer) {
            hoverTl.to(iconContainer, {
              y: -4,
              duration: 0.25,
              ease: "power2.out"
            }, 0);
          }

          // Icon Scale
          if (icon) {
            hoverTl.to(icon, {
              scale: 1.08,
              duration: 0.25,
              ease: "power2.out"
            }, 0);
          }

          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="why-section py-16 md:py-24"
      style={{
        background: 'linear-gradient(to right, #155DFC, #00C950)'
      }}
    >
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="why-header mb-3 text-sm font-semibold tracking-wide uppercase text-white/90">
            {whyChooseUsData.label}
          </p>
          <h2 className="why-header mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {whyChooseUsData.title}
          </h2>
          <p className="why-header max-w-2xl mx-auto text-xl md:text-lg text-white/90">
            {whyChooseUsData.description}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {whyChooseUsData.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="why-card flex flex-col items-center p-6 text-center transition-colors duration-300 border md:items-start md:text-left bg-white/10 backdrop-blur-sm rounded-lg md:p-8 border-white/20 hover:bg-white/15"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="why-icon-container flex items-center justify-center rounded-lg w-14 h-14 bg-white/20">
                    <Icon className="why-icon text-white w-7 h-7" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold leading-tight text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
