import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QuoteSection = () => {
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraph3Full = `"Necessity is the mother of Invention. Providing business excellence & delivering best of products to our renowned customers has been a part of our epic journey. We believe in a healthy environmental balance, which has resulted in building a strong team of youth to cultivate the new age thinking. We strongly believe that the future of our group depends on the way KSP, Its Team including all teammates esteemed customers & support partners including vendors jointly care for serenity of environment."`;

  const paragraph3Truncated = `"Necessity is the mother of Invention. Providing business excellence & delivering best of products to our renowned customers has been a part of our epic journey.`;

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const accentLine = '.md-accent-line';
    const paragraphs = '.md-paragraph';
    const author = '.md-author';

    // Set initial states
    if (!prefersReduced) {
      gsap.set(accentLine, { scaleY: 0, transformOrigin: 'top' });
      gsap.set(paragraphs, { opacity: 0, y: 12 });
      gsap.set(author, { opacity: 0 });
    } else {
      gsap.set([accentLine, paragraphs, author], { opacity: 0 });
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      // Adjust initial Y for mobile
      if (!prefersReduced && !isDesktop) {
        gsap.set(paragraphs, { y: 8 });
      }

      // 1. Accent Line Animation
      if (!prefersReduced) {
        gsap.to(accentLine, {
          scaleY: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          }
        });
      } else {
        gsap.to(accentLine, {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          }
        });
      }

      // 2. Text Sequence Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (!prefersReduced) {
        // Paragraphs Stagger
        tl.to(paragraphs, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        })
          // Author Fade
          .to(author, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.2");
      } else {
        // Reduced Motion
        tl.to(paragraphs, {
          opacity: 1,
          duration: 0.6,
          stagger: 0.1
        })
          .to(author, {
            opacity: 1,
            duration: 0.6
          }, "-=0.1");
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="md-message-section w-full px-4 py-16 bg-white md:px-8 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Content Container with Left Accent */}
        <div className="flex items-stretch gap-6 md:gap-8">
          {/* Left Accent Line */}
          <div
            className="md-accent-line flex-shrink-0 w-1 bg-blue-600"
            aria-hidden="true"
          />

          {/* Text Content Block */}
          <div className="flex flex-col flex-1 gap-6">
            {/* Paragraph 1 */}
            <p className="md-paragraph text-base leading-relaxed text-slate-700 md:text-lg">
              &quot;From humble beginnings in 2003, KSP Hydro Engineers Pvt. Ltd. has been on an epic journey towards business excellence and its promise to deliver the very best to its customers. KSP&apos;s logo depicts its vision to become a one-stop solution shop for its customers within the bouquet of water & wastewater management.
            </p>

            {/* Paragraph 2 */}
            <p className="md-paragraph text-base leading-relaxed text-slate-700 md:text-lg">
              &apos;Pavati&apos; meaning Clear Water &apos;Beyond Imagination&apos; is our motive for everyone on this earth. Let us all join hands to create a better earth for generations to come.
            </p>

            {/* Paragraph 3 with Read More */}
            <p className="md-paragraph text-base leading-relaxed text-slate-700 md:text-lg">
              {isExpanded ? paragraph3Full : paragraph3Truncated}
              {' '}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline font-medium text-blue-600 hover:text-blue-700"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            </p>

            {/* Author Attribution */}
            <p className="md-author mt-2 text-base md:text-lg">
              <span className="font-bold text-slate-900">Mr. Puneet Modani,</span>
              <span className="font-normal text-slate-500"> Managing Director, KSP Hydro Engineers Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
