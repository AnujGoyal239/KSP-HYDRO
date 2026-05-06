import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Selectors
    const title = '.cta-title';
    const subtitle = '.cta-subtitle';
    const button = '.cta-button';

    // Initial States
    if (!prefersReduced) {
      gsap.set(title, { opacity: 0, y: 20 });
      gsap.set(subtitle, { opacity: 0, y: 8 });
      gsap.set(button, { opacity: 0, y: 6 });
    } else {
      gsap.set([title, subtitle, button], { opacity: 0 });
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
          }, "-=0.6")
          .to(button, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.6");
      } else {
        // Reduced Motion
        tl.to(title, { opacity: 1, duration: 0.6 })
          .to(subtitle, { opacity: 1, duration: 0.6 }, "-=0.4")
          .to(button, { opacity: 1, duration: 0.6 }, "-=0.4");
      }

      // Micro Interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        const btnElement = containerRef.current.querySelector(button);

        if (btnElement) {
          btnElement.addEventListener('mouseenter', () => {
            gsap.to(btnElement, {
              y: -3,
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              duration: 0.25,
              ease: "power2.out"
            });
          });

          btnElement.addEventListener('mouseleave', () => {
            gsap.to(btnElement, {
              y: 0,
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)", // Default shadow-md
              duration: 0.25,
              ease: "power2.out"
            });
          });

          btnElement.addEventListener('mousedown', () => {
            gsap.to(btnElement, { y: 1, duration: 0.1, ease: "power1.out" });
          });

          btnElement.addEventListener('mouseup', () => {
            gsap.to(btnElement, { y: -3, duration: 0.1, ease: "power1.out" }); // Return to hover state
          });
        }
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="cta-section w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="cta-title text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Download Our Company Brochure
        </h2>
        <p className="cta-subtitle text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
          Discover our complete range of water and wastewater treatment solutions, technologies, and project expertise.
        </p>
        <a
          href="/KSP_Brochure.pdf" // Placeholder path for brochure
          download="KSP_Hydro_Brochure.pdf"
          className="cta-button inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] border border-gray-50 transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,118,255,0.15)]"
        >
          [ Download Brochure ]
        </a>
      </div>
    </section>
  );
};

export default CTASection;
