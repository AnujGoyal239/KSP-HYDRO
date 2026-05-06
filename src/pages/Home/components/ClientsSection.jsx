import { Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11 } from '@/assets';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const containerRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const clients = [
    { id: 1, logo: Client1, name: 'Impact Kerala' },
    { id: 2, logo: Client2, name: 'RUIDP' },
    { id: 3, logo: Client3, name: 'Assam Cancer Care Foundation' },
    { id: 4, logo: Client4, name: 'DCSEM' },
    { id: 5, logo: Client5, name: 'CPWD' },
    { id: 6, logo: Client6, name: 'Marriott' },
    { id: 7, logo: Client7, name: 'Harvest Gold' },
    { id: 8, logo: Client8, name: 'Avery Dennison' },
    { id: 9, logo: Client9, name: 'OJI JK Packaging' },
    { id: 10, logo: Client10, name: 'Tata Communications' },
    { id: 11, logo: Client11, name: 'The Lalit' },
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
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (prefersReducedMotion) {
        tl.to('.clients-header, .client-card, .testimonial-carousel-container', {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1
        });
      } else {
        tl.from('.clients-header', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });

        tl.from('.client-wrapper', {
          y: isDesktop ? 20 : 12,
          opacity: 0,
          duration: 0.6,
          stagger: {
            amount: 0.8,
            grid: "auto",
            from: "start"
          },
          ease: "power2.out"
        }, "-=0.4");

        tl.from('.testimonial-carousel-container', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.2");
      }

      if (isDesktop && !prefersReducedMotion) {
        const cards = gsap.utils.toArray('.client-card');
        cards.forEach(card => {
          const logo = card.querySelector('.client-logo');
          const hoverTl = gsap.timeline({ paused: true });
          hoverTl.to(card, {
            y: -3,
            borderColor: "rgba(37, 99, 235, 0.3)",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
            duration: 0.25,
            ease: "power2.out"
          }, 0);
          if (logo) {
            hoverTl.to(logo, {
              scale: 1.05,
              duration: 0.25,
              ease: "power2.out"
            }, 0);
          }
          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="clients-section relative py-16 overflow-hidden md:py-24">
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
          <p className="clients-header max-w-3xl mx-auto text-base text-gray-600">
            Proud to work with leading organizations across hospitality, government, healthcare, industry, and institutions
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 md:gap-6 lg:gap-8">
          {clients.map((client) => (
            <div key={client.id} className="client-wrapper">
              <div className="client-card flex items-center justify-center h-24 p-6 bg-white border border-gray-100 shadow-sm rounded-xl md:h-32">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  width="160"
                  height="96"
                  className="client-logo object-contain w-full h-full transition-none"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="clients-header mb-12 text-sm text-center text-gray-500 md:mb-10">
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
