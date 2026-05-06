import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MapSection = () => {
  const sectionRef = useRef(null);
  const mapContainerRef = useRef(null);
  const ctaRef = useRef(null);

  // Google Maps location for KSP Hydro Engineers, Jaipur
  const mapLocation = "https://maps.app.goo.gl/qWyo0hOHrtoHLbxR6";
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0!2d75.8!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890";

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.map-section',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        }
      });

      if (prefersReducedMotion) {
        tl.fromTo(
          ['.map-header', '.map-container'],
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.15 }
        );
      } else {
        const headerY = isMobile ? 10 : 18;
        const mapY = isMobile ? 12 : 20;

        tl.fromTo(
          '.map-header',
          { opacity: 0, y: headerY },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        ).fromTo(
          '.map-container',
          { opacity: 0, y: mapY },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        );
      }

      // Desktop-only hover animations
      if (!isMobile && !prefersReducedMotion) {
        const mapContainer = mapContainerRef.current;
        const cta = ctaRef.current;

        if (mapContainer) {
          mapContainer.addEventListener('mouseenter', () => {
            gsap.to(mapContainer, { boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)', duration: 0.3, ease: 'power2.out' });
          });
          mapContainer.addEventListener('mouseleave', () => {
            gsap.to(mapContainer, { boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', duration: 0.3, ease: 'power2.out' });
          });
        }

        if (cta) {
          cta.addEventListener('mouseenter', () => {
            gsap.to(cta, { y: -2, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.2)', duration: 0.25, ease: 'power2.out' });
          });
          cta.addEventListener('mouseleave', () => {
            gsap.to(cta, { y: 0, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', duration: 0.25, ease: 'power2.out' });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="map-section py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16 lg:px-16">
        {/* Section Header */}
        <div className="map-header text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">
            Find Us on Map
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Locate our head office in Bangalore
          </p>
        </div>

        {/* Map Container */}
        <div ref={mapContainerRef} className="map-container bg-gradient-to-br from-[#E3F2FD] via-[#BBDEFB] to-[#90CAF9]/40 rounded-xl shadow-xl overflow-hidden min-h-[500px] md:min-h-[600px] relative">
          {/* Google Maps Iframe */}
          <iframe
            src={embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '500px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe absolute inset-0 w-full h-full"
            title="KSP Hydro Engineers Location"
          ></iframe>

          {/* Overlay Button */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <a
              ref={ctaRef}
              href={mapLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="map-cta inline-block bg-[#1E88E5] hover:bg-[#1976D2] text-white px-8 py-3.5 rounded-lg font-medium text-sm shadow-lg transition-colors duration-300"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
