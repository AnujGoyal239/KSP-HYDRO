import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Elements
    const title = '.about-title';
    const subtitle = '.about-subtitle';

    // Initial Setup
    gsap.set([title, subtitle], { opacity: 0 });

    if (prefersReduced) {
      gsap.to([title, subtitle], { opacity: 1, duration: 0.8, stagger: 0.2 });
      return;
    }

    // Content Animation (Title & Subtitle)
    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;
      const yTitle = isDesktop ? 24 : 14;
      const ySubtitle = 10;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse"
        }
      });

      tl.fromTo(title,
        { y: yTitle, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
      )
        .fromTo(subtitle,
          { y: ySubtitle, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.8"
        );
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="about-hero w-full pt-60 pb-24 flex items-center justify-center px-6 relative overflow-hidden min-h-[60vh]"
    >
      <div className="about-header max-w-[1100px] w-full text-center relative z-10">
        <h1 className="about-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
          About KSP Hydro Engineers
        </h1>
        <p className="about-subtitle text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-xl mx-auto">
          Trusted partners in water and wastewater infrastructure for over two decades.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
