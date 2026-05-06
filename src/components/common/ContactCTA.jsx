import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactCTA = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isDesktop, reduceMotion } = context.conditions;

      // --- SCROLL REVEAL ANIMATION ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (reduceMotion) {
        // Reduced motion: simple fade in
        tl.to('.cta-heading, .cta-text, .cta-button', {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1
        });
      } else {
        // Standard animation sequence
        // 1. Heading
        tl.from('.cta-heading', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });

        // 2. Paragraph
        tl.from('.cta-text', {
          y: 12,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6");

        // 3. CTA Button
        tl.from('.cta-button', {
          y: 10,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6");
      }

      // --- MICRO ANIMATIONS (Desktop Only) ---
      if (isDesktop && !reduceMotion) {
        const button = containerRef.current.querySelector('.cta-button');
        const arrow = containerRef.current.querySelector('.cta-arrow');

        if (button) {
          // Hover Timeline
          const hoverTl = gsap.timeline({ paused: true });

          hoverTl.to(button, {
            y: -3,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            duration: 0.25,
            ease: "power2.out"
          }, 0);

          if (arrow) {
            hoverTl.to(arrow, {
              x: 4,
              duration: 0.25,
              ease: "power2.out"
            }, 0);
          }

          // Event Listeners
          button.addEventListener('mouseenter', () => hoverTl.play());
          button.addEventListener('mouseleave', () => hoverTl.reverse());

          // Active/Press State
          button.addEventListener('mousedown', () => {
            gsap.to(button, { y: 1, duration: 0.1, ease: "power1.out", overwrite: true });
          });

          button.addEventListener('mouseup', () => {
            gsap.to(button, { y: -3, duration: 0.1, ease: "power1.out", overwrite: true });
          });
        }
      }
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="cta-section relative py-12 md:py-16"
      style={{
        background: 'linear-gradient(to right, #155DFC, #00C950)'
      }}
    >
      <div className="px-4 mx-auto text-center max-w-7xl md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          {/* Heading */}
          <h2 className="cta-heading text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Let&apos;s discuss your water solution
          </h2>

          {/* Description */}
          <p className="cta-text max-w-2xl mx-auto text-sm leading-relaxed md:text-base text-white/90">
            Ready to upgrade or optimize your water and wastewater systems? Our experts help you design, execute, and maintain reliable, compliant solutions tailored to your needs.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              to="/contact"
              className="cta-button inline-flex items-center gap-2 bg-white text-blue-600 px-7 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Contact Us
              <ArrowRight className="cta-arrow w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
