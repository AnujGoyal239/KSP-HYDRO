import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { careersHeroData } from '@/data/careersData';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headingRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 24,
      });
      gsap.set(buttonRef.current, { scale: 0.98 });

      // Create timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // Section fade-in
      tl.from(sectionRef.current, {
        opacity: 0.8,
        duration: 0.6,
        ease: 'power2.out',
      })
      // Heading animation
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.3')
      // Description animation
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      }, '-=0.5')
      // Button animation
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
      }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full pt-60 pb-24 flex items-center justify-center min-h-[60vh]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0A1628] leading-[1.1] mb-6 tracking-tight"
        >
          {careersHeroData.title}
        </h1>
        
        <p 
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {careersHeroData.description}
        </p>
        
        <button 
          ref={buttonRef}
          className="bg-white text-[#1E88E5] font-semibold px-8 py-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100"
        >
          {careersHeroData.ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
