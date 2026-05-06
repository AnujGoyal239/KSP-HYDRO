import { useRef } from 'react';
import { Factory, Building2, Users, Landmark, Droplets } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whoWeAreData } from '@/data/aboutData';

gsap.registerPlugin(ScrollTrigger);

const WhoWeAreSection = () => {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Elements
    const section = containerRef.current;
    const blocks = gsap.utils.toArray('.who-block');
    const cards = gsap.utils.toArray('.industry-card');
    const expCard = '.experience-card';

    // 0. Initial States
    gsap.set(section, { opacity: 0 });
    gsap.set([blocks, cards, expCard], { opacity: 0, y: 0 });

    // Section Entry
    gsap.to(section, { opacity: 1, duration: 0.5 });

    if (prefersReduced) {
      ScrollTrigger.batch([...blocks, ...cards, expCard], {
        onEnter: (elements) => gsap.to(elements, { opacity: 1, duration: 0.5, stagger: 0.1 }),
        start: "top 85%"
      });
      return;
    }

    // 1. Main Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      }
    });

    // Responsive Animations
    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;
      const yBlock = isDesktop ? 20 : 12;
      const yCard = isDesktop ? 24 : 14;
      const yExp = 20;

      // Text Blocks
      tl.fromTo(blocks,
        { y: yBlock, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power2.out" }
      )
        // Industry Cards
        .fromTo(cards,
          { y: yCard, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        )
        // Experience Card
        .fromTo(expCard,
          { y: yExp, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
          "-=0.3"
        );
    });

  }, { scope: containerRef });

  // Micro Interactions (Context Safe)
  const handleCardHover = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    const icon = card.querySelector('.industry-icon');

    gsap.to(card, {
      y: -4,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });

    if (icon) {
      gsap.to(icon, {
        y: -3,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true
      });
    }
  });

  const handleCardLeave = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    const icon = card.querySelector('.industry-icon');

    gsap.to(card, {
      y: 0,
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });

    if (icon) {
      gsap.to(icon, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true
      });
    }
  });

  const handleExpHover = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    gsap.to(e.currentTarget, {
      y: -3,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });
  });

  const handleExpLeave = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });
  });

  return (
    <section ref={containerRef} className="who-section relative w-full px-6 py-16 overflow-hidden md:py-24 opacity-0">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Column - Company Overview */}
          <div className="space-y-6">
            {/* Who We Are */}
            <div className="who-block opacity-0">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl text-slate-900">
                {whoWeAreData.title}
              </h2>
              <p className="text-sm leading-relaxed md:text-base text-slate-600">
                {whoWeAreData.description}
              </p>
            </div>

            {/* Our Mission */}
            <div className="who-block opacity-0">
              <h3 className="mb-3 text-lg font-semibold md:text-xl text-slate-900">
                {whoWeAreData.mission.title}
              </h3>
              <p className="text-sm leading-relaxed md:text-base text-slate-600">
                {whoWeAreData.mission.description}
              </p>
            </div>

            {/* Our Values */}
            <div className="who-block opacity-0">
              <h3 className="mb-3 text-lg font-semibold md:text-xl text-slate-900">
                {whoWeAreData.values.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed md:text-base text-slate-600">
                {whoWeAreData.values.description}
              </p>
            </div>
          </div>

          {/* Right Column - Industries We Serve */}
          <div className="industries-section">
            <h2 className="who-block mb-5 text-xl font-bold md:text-2xl text-slate-900 opacity-0">
              Industries We Serve
            </h2>

            {/* Industry Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {whoWeAreData.industries.map((industry, index) => (
                <div
                  key={index}
                  className="industry-card p-5 bg-white border shadow-sm rounded-xl border-slate-100 opacity-0 cursor-default"
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                >
                  <industry.icon className="industry-icon w-8 h-8 mb-3 text-blue-600 transition-none" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-slate-900">
                    {industry.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Stat Card */}
            <div
              className="experience-card p-5 rounded-xl md:p-6 opacity-0 cursor-default"
              style={{ backgroundColor: '#2563eb' }}
              onMouseEnter={handleExpHover}
              onMouseLeave={handleExpLeave}
            >
              <div className="flex items-center gap-3 mb-1">
                <Droplets className="w-7 h-7 text-white/90" />
                <span className="text-3xl font-bold text-white md:text-4xl">{whoWeAreData.experience.years}</span>
              </div>
              <p className="text-sm text-white/80 md:text-base">
                {whoWeAreData.experience.text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
