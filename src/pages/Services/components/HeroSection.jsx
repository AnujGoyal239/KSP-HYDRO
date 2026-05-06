import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesHeroData } from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Selectors
    const title = 'h1';
    const subtitle = 'p';

    // Initial States
    if (!prefersReduced) {
      gsap.set(title, { opacity: 0, y: 20 });
      gsap.set(subtitle, { opacity: 0, y: 8 });
    } else {
      gsap.set([title, subtitle], { opacity: 0 });
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      // Adjust initial Y for mobile
      if (!prefersReduced && !isDesktop) {
        gsap.set(title, { y: 12 });
      }

      // Main Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (!prefersReduced) {
        tl.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        })
          .to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.6");
      } else {
        // Reduced Motion
        tl.to(title, { opacity: 1, duration: 0.6 })
          .to(subtitle, { opacity: 1, duration: 0.6 }, "-=0.4");
      }
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center"
    >
      <div className="container px-4 mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
          {servicesHeroData.title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-black md:text-xl">
          {servicesHeroData.description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
