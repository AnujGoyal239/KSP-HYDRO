import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OfficeImg1, OfficeImg2, OfficeImg3, OfficeImg4 } from '@/assets';

gsap.registerPlugin(ScrollTrigger);

const OurOfficeSection = () => {
  const containerRef = useRef(null);

  const offices = [
    {
      id: 1,
      image: OfficeImg1,
      title: "Main Office Workspace",
      subtitle: "Collaborative environment for our team"
    },
    {
      id: 2,
      image: OfficeImg2,
      title: "Engineering Department",
      subtitle: "Design and innovation hub"
    },
    {
      id: 3,
      image: OfficeImg3,
      title: "Conference Room",
      subtitle: "Client meetings and presentations"
    },
    {
      id: 4,
      image: OfficeImg4,
      title: "Headquarters Building",
      subtitle: "KSP Hydro Engineers facility"
    }
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from('.office-header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      })
      .from('.office-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.4");
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-transparent relative z-10">
      <div className="max-w-7xl px-4 mx-auto md:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="office-header mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Our Office
          </h2>
          <p className="office-header max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Modern facilities equipped with cutting-edge technology to serve our clients better
          </p>
        </div>

        {/* Office Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {offices.map((office) => (
            <div key={office.id} className="office-card group overflow-hidden bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
              {/* Image Container */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <img
                  src={office.image}
                  alt={office.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {office.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 font-medium">
                  {office.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurOfficeSection;
