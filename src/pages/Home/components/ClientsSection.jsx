import { Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11, Client12, Client13, Client14, Client15, Client16, Client17, Client18, Client19, Client20 } from '@/assets';
import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useEmblaCarousel from 'embla-carousel-react';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const containerRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Row 1 logos (moving right to left)
  const row1Logos = [
    { src: Client1, alt: 'Impact Kerala' },
    { src: Client2, alt: 'RUIDP' },
    { src: Client3, alt: 'Assam Cancer Care Foundation' },
    { src: Client4, alt: 'DCSEM' },
    { src: Client5, alt: 'CPWD' },
    { src: Client6, alt: 'Marriott' },
    { src: Client7, alt: 'Harvest Gold' },
    { src: Client14, alt: 'Client 14' },
    { src: Client15, alt: 'Client 15' },
    { src: Client16, alt: 'Client 16' },
  ];

  // Row 2 logos (moving left to right)
  const row2Logos = [
    { src: Client8, alt: 'Avery Dennison' },
    { src: Client9, alt: 'OJI JK Packaging' },
    { src: Client10, alt: 'Tata Communications' },
    { src: Client11, alt: 'The Lalit' },
    { src: Client12, alt: 'Tata Realty' },
    { src: Client13, alt: 'NIMS University' },
    { src: Client17, alt: 'Client 17' },
    { src: Client18, alt: 'Client 18' },
    { src: Client19, alt: 'Client 19' },
    { src: Client20, alt: 'Client 20' },
  ];

  const testimonials = [
    {
      id: 1,
      content: "KSP Hydro Engineers Pvt. Ltd. are currently managing our sewage treatment plant and have consistently met our expectations with their expertise, dedicated workforce, quality assurance, compliance, safety measures, reliability, and commitment to operations. We highly recommend KSP Hydro as specialists in water treatment services and as an excellent provider of O&M services.",
      author: "S C Agarwal",
      position: "Director, Ready Roti India Pvt Ltd"
    },
    {
      id: 2,
      content: "The services provided by KSP Hydro Engineers Pvt. Ltd. have been exceptional. Their team has demonstrated strong proficiency in new installations as well as operations and maintenance of water and wastewater treatment plants across locations. Their commitment to quality, compliance, safety, and timely service delivery is commendable.",
      author: "Naresh Nagar",
      position: "Contractor, Tata Communications"
    },
    {
      id: 3,
      content: "KSP Hydro Engineers Pvt. Ltd. have consistently met all our expectations in terms of subject expertise, dedicated workforce, quality, compliance, safety measures, and timely delivery. We recommend KSP Hydro as a reliable equipment and service provider for projects as well as O&M services in water and wastewater treatment.",
      author: "ICC Realty India Pvt. Ltd.",
      position: "ICC Trade Tower, Pune"
    },
    {
      id: 4,
      content: "KSP Hydro Engineers Pvt. Ltd. successfully executed and commissioned our sewage treatment plant based on MBR technology. The quality of work met all relevant standards, and the system performance has remained consistent over the years. We appreciate their professional execution and technical competence.",
      author: "Director of Engineering",
      position: "Pullman & Novotel Aerocity, New Delhi"
    },
    {
      id: 5,
      content: "KSP Hydro Engineers Pvt. Ltd. have consistently met all our expectations in terms of subject expertise, dedicated workforce, quality, compliance, safety measures, and timely delivery. We recommend KSP Hydro as a reliable equipment and service provider for projects as well as O&M services in water and wastewater treatment.",
      author: "Engineering Team",
      position: "The LaLiT, New Delhi"
    },
    {
      id: 6,
      content: "KSP Hydro Engineers Pvt. Ltd. successfully completed the supply, installation, testing, and commissioning of our MBR-based sewage treatment plant. The system is operating satisfactorily, meeting design parameters and regulatory norms. The team’s workmanship, responsiveness, and support were highly appreciated.",
      author: "Engineering Department",
      position: "SDMH, Jaipur"
    }
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // 5 seconds gap

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(intervalId);
    };
  }, [emblaApi, onSelect]);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Selectors
    const header = '.clients-header';
    const subtitle = '.clients-subtitle';
    const note = '.clients-note';
    const carousel = '.testimonial-carousel-container';

    // Initial States
    if (!prefersReduced) {
      gsap.set([header, subtitle, note], { opacity: 0, y: 20 });
      gsap.set(carousel, { opacity: 0, y: 30 });
    } else {
      gsap.set([header, subtitle, note, carousel], { opacity: 0 });
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      // Adjust initial Y for mobile
      if (!prefersReduced && !isDesktop) {
        gsap.set([header, subtitle, note], { y: 12 });
      }

      // Main Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (!prefersReduced) {
        tl.to(header, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        })
          .to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.6")
          .to(carousel, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4")
          .to(note, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4");
      } else {
        // Reduced Motion
        tl.to(header, { opacity: 1, duration: 0.6 })
          .to(subtitle, { opacity: 1, duration: 0.6 }, "-=0.4")
          .to(carousel, { opacity: 1, duration: 0.6 }, "-=0.4")
          .to(note, { opacity: 1, duration: 0.6 }, "-=0.4");
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="clients-section relative py-16 overflow-hidden md:py-24">
      {/* CSS Animations */}
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }
        
        .logo-row:hover .animate-scroll-left,
        .logo-row:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full md:hidden">
          <svg
            className="w-full h-auto min-h-[462px] object-cover"
            viewBox="0 0 375 462"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M329.685 445.968C347.5 433.12 366.5 435 375.5 458V142.5C353.359 147.063 341.705 120.507 340.44 108.34C340.44 28.6596 209.912 54.6477 204.429 54.6477C126.407 57.805 24.2887 51.2958 0 0V249.779C6.5791 292.971 17.5 338.5 31.5 358.5C37.1 366.5 82.5895 414.03 124.088 386.655C165.587 359.28 194.94 385.388 204.429 401.864C243.904 480.948 304.381 464.218 329.685 445.968Z"
              fill="#EFFEEF"
            />
          </svg>
        </div>
        <div className="hidden md:block">
          <svg
            className="w-full"
            height="950"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M968.71 779.592C1191.69 675.646 1327.81 814.553 1368 897L1364.87 241.078C1283.44 139.325 1167.57 133.063 1112.77 142.455C1057.96 151.848 998.461 109.581 995.329 84.534C981.55 16.9068 950.964 0 937.393 0H4.14998C-3.36601 269.256 1.01827 362.661 4.14998 375.707C20.4348 464.624 105.93 555.733 146.642 590.172C208.232 636.092 357.091 713.843 459.811 657.487C562.53 601.131 635.185 654.878 658.673 688.796C756.381 851.602 906.076 817.162 968.71 779.592Z"
              fill="#EFFEEF"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="clients-header mb-3 hidden text-sm font-semibold tracking-wide text-blue-600 uppercase md:block">
            Trusted Partnerships
          </p>
          <h2 className="clients-header mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Clients
          </h2>
          <p className="clients-subtitle max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Trusted by industry leaders across multiple sectors for reliable and sustainable water solutions
          </p>
        </div>

        {/* Logo Rows Container with Infinite Scroll */}
        <div className="mb-16 space-y-6">
          {/* Row 1 - Scrolling Right to Left */}
          <div className="overflow-hidden logo-row">
            <div className="flex animate-scroll-left w-max">
              {/* Original logos */}
              {row1Logos.map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="bg-white rounded-xl p-5 shadow-sm w-[160px] h-[120px] md:w-[180px] md:h-[130px] flex items-center justify-center flex-shrink-0 mx-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="object-contain w-full h-full max-w-[140px] max-h-[90px]"
                  />
                </div>
              ))}
              {/* Duplicated logos for seamless loop */}
              {row1Logos.map((logo, index) => (
                <div
                  key={`row1-dup-${index}`}
                  className="bg-white rounded-xl p-5 shadow-sm w-[160px] h-[120px] md:w-[180px] md:h-[130px] flex items-center justify-center flex-shrink-0 mx-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="object-contain w-full h-full max-w-[140px] max-h-[90px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Left to Right */}
          <div className="overflow-hidden logo-row">
            <div className="flex animate-scroll-right w-max">
              {/* Original logos */}
              {row2Logos.map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="bg-white rounded-xl p-5 shadow-sm w-[160px] h-[120px] md:w-[180px] md:h-[130px] flex items-center justify-center flex-shrink-0 mx-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="object-contain w-full h-full max-w-[140px] max-h-[90px]"
                  />
                </div>
              ))}
              {/* Duplicated logos for seamless loop */}
              {row2Logos.map((logo, index) => (
                <div
                  key={`row2-dup-${index}`}
                  className="bg-white rounded-xl p-5 shadow-sm w-[160px] h-[120px] md:w-[180px] md:h-[130px] flex items-center justify-center flex-shrink-0 mx-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="object-contain w-full h-full max-w-[140px] max-h-[90px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="clients-note mb-12 text-sm text-center text-gray-500 md:mb-10">
          <strong>And many more across the world...</strong>
        </p>

        {/* Testimonial Carousel */}
        <div className="testimonial-carousel-container relative mt-10" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`flex-[0_0_90%] md:flex-[0_0_75%] lg:flex-[0_0_70%] px-3 md:px-6 transition-all duration-700 ease-in-out ${
                  index === selectedIndex ? 'scale-100 opacity-100 z-10' : 'scale-[0.85] opacity-30 z-0'
                }`}
              >
                <div className="h-full px-8 py-10 md:px-16 md:py-14 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] rounded-lg border border-gray-100 flex gap-4 md:gap-8">
                  {/* Quote Icon Column */}
                  <div className="flex-shrink-0 pt-1">
                    <svg
                      className="w-10 h-10 md:w-14 md:h-14 text-[#7FA7F8]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Text and Author Column */}
                  <div className="flex flex-col flex-1">
                    <p className="text-base md:text-xl italic leading-relaxed text-[#4B5563] font-medium mb-8 flex-1">
                      {testimonial.content}
                    </p>
                    
                    <div className="mt-auto">
                      <p className="text-sm md:text-base font-bold text-gray-900 mb-0.5">
                        {testimonial.author}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
