import React, { useRef } from 'react';
import { Settings, Shield, Clock, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Element Selection via Structure
    const container = containerRef.current.querySelector('.container');
    if (!container) return;

    // Section 1: Header
    const headerBlock = container.children[0];
    const headerTitle = headerBlock.children[0];
    const headerDesc = headerBlock.children[1];

    // Section 2: Feature Cards
    const featuresGrid = container.children[1];
    const featureCards = gsap.utils.toArray(featuresGrid.children);

    // Section 3: Commitment Block
    const commitmentBlock = container.children[2];
    const statsGrid = commitmentBlock.children[1];
    const statsItems = statsGrid ? gsap.utils.toArray(statsGrid.children) : [];

    // Initial States
    const allElements = [headerTitle, headerDesc, ...featureCards, commitmentBlock];

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

      const headerY = isDesktop ? 20 : 12;
      const cardY = isDesktop ? 26 : 14;
      const commitmentY = isDesktop ? 20 : 14;

      if (!prefersReduced) {
        gsap.set([headerTitle, headerDesc], { y: headerY });
        gsap.set(featureCards, { y: cardY });
        gsap.set(commitmentBlock, { y: commitmentY });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      // 1. Header Reveal
      if (!prefersReduced) {
        tl.to(headerTitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(headerDesc, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
      } else {
        tl.to([headerTitle, headerDesc], { opacity: 1, duration: 0.6, stagger: 0.1 });
      }

      // 2. Feature Cards Reveal
      if (!prefersReduced) {
        tl.to(featureCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(featureCards, { opacity: 1, duration: 0.8, stagger: 0.12 }, "-=0.2");
      }

      // 3. Service Commitment Block Reveal
      if (!prefersReduced) {
        tl.to(commitmentBlock, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(commitmentBlock, { opacity: 1, duration: 0.8 }, "-=0.2");
      }

      // 4. KPI Items Reveal (Fade only, no movement)
      tl.fromTo(statsItems,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, stagger: 0, ease: "power2.out" },
        "-=0.4"
      );

      // Micro-interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        // Value Card Hover
        featureCards.forEach(card => {
          const iconWrapper = card.querySelector('div'); // First div is icon wrapper

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -4,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // shadow-xl
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: -3, scale: 1.05, duration: 0.25, ease: "power2.out" });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // shadow-lg (original)
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" });
            }
          });
        });

        // KPI Icon/Item Micro Interaction (Since structure is simple, we apply to the whole item or number)
        statsItems.forEach(item => {
          const numberSpan = item.querySelector('span');
          if (numberSpan) {
            item.addEventListener('mouseenter', () => {
              gsap.to(numberSpan, { scale: 1.06, duration: 0.25, ease: "power2.out" });
            });
            item.addEventListener('mouseleave', () => {
              gsap.to(numberSpan, { scale: 1, duration: 0.25, ease: "power2.out" });
            });
          }
        });
      }
    });

  }, { scope: containerRef });

  const features = [
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "Every project is unique. We design solutions tailored to your specific needs."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring the highest standards of quality."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to project timelines without compromising on quality."
    },
    {
      icon: Headphones,
      title: "Reliable Long-Term Support",
      description: "We ensure efficient, reliable performance year after year."
    }
  ];

  const stats = [
    { value: "1000+", label: "Projects Completed" },
    { value: "Long-term", label: "Client Partnerships" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="why-choose-ksp" ref={containerRef} className="w-full py-16 lg:py-24">
      <div className="container px-4 mx-auto lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">
            Why Choose KSP Hydro Services?
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
            Trusted by leading organizations for comprehensive water infrastructure services
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center bg-white shadow-lg rounded-lg"
            >
              <div
                className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #155DFC 0%, #0092B8 100%)' }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Commitment Section */}
        <div className="p-8 bg-white shadow-lg rounded-lg lg:p-12">
          <div className="flex flex-col items-center mb-10 text-center">
            <h3 className="mb-4 text-2xl font-bold lg:text-3xl text-slate-900">
              Our Service Commitment
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-gray-500 lg:text-lg">
              We go beyond installation to ensure long-term system performance. From commissioning and AMC to continuous optimization, our teams focus on reliability, compliance, and efficiency throughout the system lifecycle.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="mb-2 text-4xl font-bold text-blue-600 lg:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
