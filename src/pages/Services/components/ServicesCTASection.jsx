import React, { useRef } from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesCTASection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Element Selection via Structure
    const container = containerRef.current.querySelector('.container');
    if (!container) return;

    const contentWrapper = container.children[0];
    if (!contentWrapper) return;

    // Elements
    const iconSvg = contentWrapper.children[0];
    const title = contentWrapper.children[1];
    const subtitle = contentWrapper.children[2];
    const buttonGroup = contentWrapper.children[3];
    const buttons = buttonGroup ? gsap.utils.toArray(buttonGroup.children) : [];

    // Initial States
    const allElements = [iconSvg, title, subtitle, ...buttons];

    if (prefersReduced) {
      gsap.set(allElements, { opacity: 0 });
    } else {
      gsap.set(allElements, { opacity: 0 });
      // Y values set inside matchMedia
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      const iconY = isDesktop ? 18 : 10;
      const textY = isDesktop ? 20 : 12;
      const buttonY = 14;

      if (!prefersReduced) {
        gsap.set(iconSvg, { y: iconY });
        gsap.set([title, subtitle], { y: textY });
        gsap.set(buttons, { y: buttonY });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      // 1. Icon Reveal
      if (!prefersReduced) {
        tl.to(iconSvg, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      } else {
        tl.to(iconSvg, { opacity: 1, duration: 0.6 });
      }

      // 2. Text Block Reveal (Heading + Description)
      if (!prefersReduced) {
        tl.to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(subtitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
      } else {
        tl.to([title, subtitle], { opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.3");
      }

      // 3. CTA Buttons Reveal
      if (!prefersReduced) {
        tl.to(buttons, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(buttons, { opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.2");
      }

      // 4. Icon Micro Emphasis (One-time scale)
      if (!prefersReduced) {
        tl.to(iconSvg, {
          scale: 1.04,
          duration: 0.3,
          ease: "power1.out",
          yoyo: true,
          repeat: 1
        }, "+=0.1");
      }

      // Micro-interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        buttons.forEach(btn => {
          btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
              y: -2,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // shadow-xl
              duration: 0.25,
              ease: "power2.out"
            });
          });

          btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
              y: 0,
              // Reset to no shadow
              boxShadow: "none",
              duration: 0.25,
              ease: "power2.out"
            });
          });
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <Bell className="w-12 h-12 text-blue-600 mb-6" />

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-8">
            Let’s discuss how KSP Hydro Engineers can support your water and wastewater infrastructure from concept and execution to long-term performance.
          </p>

          {/* Button Group */}
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
