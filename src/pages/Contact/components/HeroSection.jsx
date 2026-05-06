import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        }
      });

      if (prefersReducedMotion) {
        tl.fromTo(
          ['.contact-title', '.contact-subtitle'],
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        const yDistance = isMobile ? 10 : 18;

        tl.fromTo(
          '.contact-title',
          { opacity: 0, y: yDistance },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        ).fromTo(
          '.contact-subtitle',
          { opacity: 0, y: yDistance * 0.8 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="contact-header flex items-center pt-24" style={{ minHeight: '404px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center w-full py-8">
        <h1 className="contact-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] mb-4">
          Contact Us
        </h1>
        <p className="contact-subtitle text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Get in touch with our team - we&apos;re here to help with all your water treatment needs
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
