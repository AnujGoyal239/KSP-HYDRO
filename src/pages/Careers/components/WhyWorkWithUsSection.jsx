import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { careersBenefitsData } from '@/data/careersData';

gsap.registerPlugin(ScrollTrigger);

const WhyWorkWithUsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const benefits = careersBenefitsData.benefits;

  useGSAP(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headingRef.current, { opacity: 0, y: 20 });
      gsap.set(cardsContainerRef.current, { opacity: 0 });
      gsap.set(cardRefs.current, { opacity: 0, y: 24, scale: 0.98 });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      // Heading animation
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      })
      // Cards container fade
      .to(cardsContainerRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.3')
      // Individual cards staggered
      .to(cardRefs.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: {
          each: 0.15,
          from: 'start',
        },
      }, '-=0.2');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-16 md:py-20 overflow-hidden" 
    >
      <div className="container relative z-10 px-4 mx-auto lg:px-8">
        {/* Section Heading */}
        <h2 
          ref={headingRef}
          className="mb-10 text-2xl font-bold text-center md:text-3xl lg:text-4xl text-slate-900 md:mb-12"
        >
          {careersBenefitsData.title}
        </h2>

        {/* Cards Grid */}
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-lg p-6 md:p-8 shadow-sm"
            >
              {/* Icon Container */}
              <div className="flex justify-center md:justify-start mb-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${benefit.iconBgColor} flex items-center justify-center`}>
                  <benefit.icon className={`w-6 h-6 md:w-7 md:h-7 ${benefit.iconColor}`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-center md:text-left md:text-xl text-slate-900">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-center md:text-left md:text-base text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
