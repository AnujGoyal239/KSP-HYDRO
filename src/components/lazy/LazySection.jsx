import { useEffect, useRef, useState } from 'react';

/**
 * LazySection - Renders children only when section enters viewport
 * Uses IntersectionObserver for efficient viewport detection
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to lazy load
 * @param {string} props.className - CSS classes for the wrapper
 * @param {string} props.rootMargin - IntersectionObserver rootMargin (default: '200px')
 * @param {React.ReactNode} props.fallback - Loading placeholder (optional)
 * @param {number} props.minHeight - Minimum height to prevent layout shift (optional)
 */
const LazySection = ({ 
  children, 
  className = '', 
  rootMargin = '200px',
  fallback = null,
  minHeight = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin]);

  return (
    <div 
      ref={sectionRef} 
      className={className}
      style={minHeight ? { minHeight: `${minHeight}px` } : undefined}
    >
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazySection;
