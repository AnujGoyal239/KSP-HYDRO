import { useState, useEffect, useRef } from 'react';

/**
 * LazyImage - Optimized image component with lazy loading
 * Features:
 * - Native lazy loading with IntersectionObserver fallback
 * - Blur-up placeholder effect
 * - Prevents layout shift with aspect ratio
 * - Responsive image support
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - CSS classes
 * @param {number} props.width - Image width (for aspect ratio)
 * @param {number} props.height - Image height (for aspect ratio)
 * @param {boolean} props.priority - Load immediately (for above-fold images)
 * @param {string} props.objectFit - CSS object-fit value
 */
const LazyImage = ({
  src,
  alt = '',
  className = '',
  width,
  height,
  priority = false,
  objectFit = 'cover',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [priority]);

  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio,
        backgroundColor: '#ffffff'
      }}
    >
      {isInView && (
        <>
          {/* Placeholder blur effect */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-white animate-pulse" />
          )}
          
          {/* Actual image */}
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectFit }}
            width={width}
            height={height}
            {...props}
          />
        </>
      )}
    </div>
  );
};

export default LazyImage;
