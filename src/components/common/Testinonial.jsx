import { useState, useEffect, useRef } from 'react';
import styles from './ClientsSection.module.css';

const testimonials = [
  {
    id: 1,
    quote:
      'KSP Hydro Engineers Pvt. Ltd. are currently managing our sewage treatment plant and have consistently met our expectations with their expertise, dedicated workforce, quality assurance, compliance, safety measures, reliability, and commitment to operations. We highly recommend KSP Hydro as specialists in water treatment services and as an excellent provider of O&M services.',
    authorName: 'S C Agarwal',
    designation: 'Director, Ready Roti India Pvt Ltd',
  },
  {
    id: 2,
    quote:
      'KSP Hydro Engineers Pvt. Ltd. are currently managing our sewage treatment plant and have consistently met our expectations with their expertise, dedicated workforce, quality assurance, compliance, safety measures, reliability, and commitment to operations. We highly recommend KSP Hydro as specialists in water treatment services and as an excellent provider of O&M services.',
    authorName: 'S C Agarwal',
    designation: 'Director, Ready Roti India Pvt Ltd',
  },
  {
    id: 3,
    quote:
      'KSP Hydro Engineers Pvt. Ltd. are currently managing our sewage treatment plant and have consistently met our expectations with their expertise, dedicated workforce, quality assurance, compliance, safety measures, reliability, and commitment to operations. We highly recommend KSP Hydro as specialists in water treatment services and as an excellent provider of O&M services.',
    authorName: 'S C Agarwal',
    designation: 'Director, Ready Roti India Pvt Ltd',
  },
];

const QuoteIcon = () => (
  <svg
    className={styles.svgQuote}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M27.534 42V27.218C27.534 15.81 34.996 8.078 45.5 6L47.49 10.302C42.626 12.136 39.5 17.578 39.5 22H47.5V42H27.534ZM-0.5 42V27.218C-0.5 15.81 6.996 8.078 17.5 6L19.492 10.302C14.626 12.136 11.5 17.578 11.5 22H19.466V42H-0.5Z"
        fill="#155DFC"
      />
    </g>
  </svg>
);

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const ClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Ref so handleTransitionEnd always reads the latest index (no stale closure)
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  // Ref to hold pending rAF so we can cancel on unmount
  const rafRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // After a snap (isTransitioning turned off), wait two paint frames then
  // re-enable transitions. This guarantees the browser has rendered the
  // snapped position before CSS transitions are active again — eliminating
  // the bounce/jump artefact.
  useEffect(() => {
    if (!isTransitioning) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    const current = activeIndexRef.current;
    const len = testimonials.length;

    if (current >= len * 2) {
      // Snap backward without animation, then re-enable via the effect above
      setIsTransitioning(false);
      setActiveIndex(current - len);
    } else if (current < len) {
      // Snap forward without animation
      setIsTransitioning(false);
      setActiveIndex(current + len);
    }
  };

  const getSlidePercentage = () => {
    if (windowWidth <= 768) return 90;
    if (windowWidth <= 1100) return 70;
    return 60;
  };

  const slidePercentage = getSlidePercentage();
  const centerOffset = (100 - slidePercentage) / 2;

  return (
    <section
      id="our-clients"
      className={styles.clientsSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Our Clients"
      style={{ scrollMarginTop: '8rem' }}
    >
      <div className={styles.bgShape} />

      <div className={styles.testimonialSlider}>
        <div
          className={styles.testimonialTrack}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-${activeIndex * slidePercentage}% + ${centerOffset}%))`,
            transition: isTransitioning
              ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              : 'none',
          }}
        >
          {extendedTestimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${testimonial.id}-${index}`}
                className={`${styles.testimonialCardWrapper} ${isActive ? styles.activeWrapper : ''}`}
                onClick={() => {
                  if (!isActive) {
                    setIsTransitioning(true);
                    setActiveIndex(index);
                  }
                }}
              >
                <div className={styles.testimonialCard}>
                  <QuoteIcon />
                  <div className={styles.contentBlock}>
                    <p className={styles.testimonialText}>{testimonial.quote}</p>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonial.authorName}</h4>
                      <p className={styles.authorDesignation}>{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;  