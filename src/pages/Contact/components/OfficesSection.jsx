import { useRef } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { officeData } from '@/data/contactData';

gsap.registerPlugin(ScrollTrigger);

const OfficesSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const linkRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.office-section',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        }
      });

      if (prefersReducedMotion) {
        tl.fromTo(
          ['.office-header', '.office-card'],
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.15 }
        );
      } else {
        const headerY = isMobile ? 10 : 18;
        const cardY = isMobile ? 14 : 24;

        tl.fromTo(
          '.office-header',
          { opacity: 0, y: headerY },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        ).fromTo(
          '.office-card',
          { opacity: 0, y: cardY },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        );
      }

      // Desktop-only hover animations
      if (!isMobile && !prefersReducedMotion) {
        const card = cardRef.current;
        const icon = iconRef.current;
        const link = linkRef.current;

        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -3, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)', duration: 0.25, ease: 'power2.out' });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', duration: 0.25, ease: 'power2.out' });
          });
        }

        if (icon) {
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { scale: 1.05, duration: 0.25, ease: 'power2.out' });
          });
          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { scale: 1, duration: 0.25, ease: 'power2.out' });
          });
        }

        if (link) {
          const arrow = link.querySelector('svg');
          link.addEventListener('mouseenter', () => {
            gsap.to(arrow, { x: 4, duration: 0.25, ease: 'power2.out' });
          });
          link.addEventListener('mouseleave', () => {
            gsap.to(arrow, { x: 0, duration: 0.25, ease: 'power2.out' });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="office-section py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="office-header text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">
            Our Office
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Visit us at any of our locations across India
          </p>
        </div>

        {/* Single Centered Office Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div ref={cardRef} className="office-card bg-white rounded-lg p-8 shadow-lg">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div ref={iconRef} className="office-icon w-14 h-14 bg-[#1E88E5] rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0A1628] text-center mb-4">
                {officeData.title}
              </h3>

              {/* Address */}
              <div className="text-center space-y-1 text-gray-600 text-sm mb-1">
                <p className="font-medium">{officeData.company}</p>
                {officeData.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              
              {/* Country */}
              <p className="font-semibold text-[#0A1628] text-center text-sm mb-6">
                {officeData.country}
              </p>

              {/* Get Directions Link */}
              <div className="flex justify-center">
                <a
                  ref={linkRef}
                  href={officeData.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-link inline-flex items-center gap-2 text-[#1E88E5] text-sm font-medium"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
