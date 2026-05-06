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
    const bgSvg = '.about-bg-svg';

    // 0. Initial Setup
    gsap.set([title, subtitle], { opacity: 0 });

    if (prefersReduced) {
      gsap.to([title, subtitle], { opacity: 1, duration: 0.8, stagger: 0.2 });
      return;
    }

    // 1. Navbar / Header Settle (Simulated if targeting global nav is unsafe, 
    // but here we focus on the section's content entry as the primary "header" feel)
    // Note: Actual global navbar is likely outside this component. 

    // 2. SVG Parallax (Background)
    gsap.fromTo(bgSvg,
      { y: () => window.innerWidth < 768 ? -15 : -30 },
      {
        y: () => window.innerWidth < 768 ? 15 : 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        }
      }
    );

    // 3. Content Animation (Title & Subtitle)
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
          start: "top 60%", // Trigger slightly earlier for visibility
          toggleActions: "play reverse play reverse"
        }
      });

      tl.fromTo(title,
        { y: yTitle, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" } // Slow, confident
      )
        .fromTo(subtitle,
          { y: ySubtitle, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.8" // Overlap for smoothness
        );
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="about-hero w-full pt-60 pb-24 flex items-center justify-center px-6 relative overflow-hidden min-h-[60vh]"
    >
      {/* Decorative SVG Background */}
      <div className="about-bg-svg absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 600H1440V0C1440 0 1152 150 720 150C288 150 0 0 0 0V600Z"
            fill="#F0F9FF"
          />
          <path
            d="M0 600H1440V100C1440 100 1152 250 720 250C288 250 0 100 0 100V600Z"
            fill="#E0F2FE"
            fillOpacity="0.5"
          />
        </svg>
      </div>

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
