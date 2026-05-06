import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { careersCultureData } from '@/data/careersData';

gsap.registerPlugin(ScrollTrigger);

const CultureSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);

  useGSAP(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headingRef.current, { opacity: 0, y: 18 });
      gsap.set(paragraphRefs.current, { opacity: 0, y: 12 });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
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
      // Paragraphs staggered
      .to(paragraphRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: {
          each: 0.18,
          from: 'start',
        },
      }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-12"
        >
          {careersCultureData.title}
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
          {careersCultureData.content.map((text, index) => (
            <p 
              key={index} 
              ref={(el) => (paragraphRefs.current[index] = el)}
              className={index === 0 ? "italic" : ""}
            >
              {index === 0 ? `"${text}` : index === careersCultureData.content.length - 1 ? `${text}"` : text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
