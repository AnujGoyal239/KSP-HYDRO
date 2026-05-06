import React, { useRef, useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-transparent">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Hear from the organizations that trust us for their water and wastewater management needs.
          </p>
        </div>

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

export default TestimonialsSection;
