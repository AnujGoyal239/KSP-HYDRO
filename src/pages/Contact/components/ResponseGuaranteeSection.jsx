import { useRef } from 'react';
import { Clock } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ResponseGuaranteeSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.response-section',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        }
      });

      if (prefersReducedMotion) {
        tl.fromTo(
          '.response-card',
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        const cardY = isMobile ? 12 : 22;

        tl.fromTo(
          '.response-card',
          { opacity: 0, y: cardY },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        );
      }

      // Desktop-only hover animations
      if (!isMobile && !prefersReducedMotion) {
        const card = cardRef.current;

        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -2, duration: 0.25, ease: 'power2.out' });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="response-section bg-white pt-2 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={cardRef} className="response-card bg-[#F7F9FC] rounded-lg px-8 py-8 shadow-sm">
          {/* Icon and Title - Centered */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-[#1E88E5]" />
            <h3 className="text-lg font-semibold text-[#0A1628]">
              Quick Response Guarantee
            </h3>
          </div>
          
          {/* Description - Centered */}
          <p className="text-gray-600 text-sm text-center">
            We respond to all inquiries within <span className="text-[#1E88E5] font-semibold">24 hours</span> on business days. For urgent matters, please call our helpline
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponseGuaranteeSection;
