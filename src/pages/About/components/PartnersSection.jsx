import { useRef } from 'react';
import {
  OtherClient1,
  OtherClient2,
  OtherClient3,
  OtherClient4,
  OtherClient5,
} from '@/assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PartnersSection = () => {
  const containerRef = useRef(null);
  
  const partners = [
    { src: OtherClient1, alt: 'Grundfos' },
    { src: OtherClient2, alt: 'Dow' },
    { src: OtherClient3, alt: 'GE' },
    { src: OtherClient4, alt: 'Siemens' },
    { src: OtherClient5, alt: 'Pentair' },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Selectors
    const header = '.partners-header';
    const subtitle = '.partners-subtitle';
    const logos = gsap.utils.toArray('.partner-logo');
    
    // Initial States
    if (!prefersReduced) {
      gsap.set([header, subtitle], { opacity: 0, y: 20 });
      gsap.set(logos, { opacity: 0, y: 16 });
    } else {
      gsap.set([header, subtitle, logos], { opacity: 0 });
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      // Adjust initial Y for mobile
      if (!prefersReduced && !isDesktop) {
        gsap.set([header, subtitle], { y: 12 });
        gsap.set(logos, { y: 10 });
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
        tl.to(header, {
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
        .to(logos, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out"
        }, "-=0.4");
      } else {
        // Reduced Motion
        tl.to(header, { opacity: 1, duration: 0.6 })
          .to(subtitle, { opacity: 1, duration: 0.6 }, "-=0.4")
          .to(logos, { opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.4");
      }

      // Micro Interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        logos.forEach((logo) => {
          logo.addEventListener('mouseenter', () => {
            gsap.to(logo, { scale: 1.04, duration: 0.2, ease: "power2.out" });
          });

          logo.addEventListener('mouseleave', () => {
            gsap.to(logo, { scale: 1, duration: 0.2, ease: "power2.out" });
          });
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="partners-section relative w-full px-4 py-16 mt-20 overflow-hidden md:px-8 md:py-20">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="partners-header mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Technology & Support Partners
          </h2>
          <p className="partners-subtitle max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Collaborating with global leaders to deliver cutting-edge water treatment solutions
          </p>
        </div>

        {/* Partner Logo Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="partner-logo bg-white rounded-xl p-5 shadow-sm w-[140px] h-[110px] md:w-[160px] md:h-[120px] flex items-center justify-center border border-slate-100"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="object-contain w-full h-full max-w-[120px] max-h-[80px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
