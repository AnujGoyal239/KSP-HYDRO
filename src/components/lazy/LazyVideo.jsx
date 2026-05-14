import { useState, useEffect, useRef } from 'react';

/**
 * LazyVideo - Optimized video component with deferred loading
 * Features:
 * - Only loads video source when in viewport
 * - Poster image support
 * - Prevents autoplay until visible
 * - Reduces initial bundle and network load
 * 
 * @param {Object} props
 * @param {string} props.src - Video source URL
 * @param {string} props.poster - Poster image URL
 * @param {string} props.className - CSS classes
 * @param {boolean} props.autoPlay - Auto play when visible
 * @param {boolean} props.muted - Muted audio
 * @param {boolean} props.loop - Loop video
 * @param {boolean} props.playsInline - Plays inline on mobile
 * @param {string} props.preload - Preload strategy (none, metadata, auto)
 */
const LazyVideo = ({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  preload = 'none',
  ...props
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.01
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto play when loaded and in view
  useEffect(() => {
    if (isLoaded && autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignore autoplay errors (browser policy)
      });
    }
  }, [isLoaded, autoPlay]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-white ${className}`}>
      {!isInView && poster && (
        <img
          src={poster}
          alt="Video poster"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      
      {isInView && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          poster={poster}
          onLoadedData={() => setIsLoaded(true)}
          {...props}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LazyVideo;
