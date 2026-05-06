import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to handle Scroll to Top functionality
 * - Manages visibility of a scroll-to-top button
 * - Handles automatic scroll to top on route change
 * 
 * @param {number} threshold - Scroll threshold to show the button (default: 300)
 * @returns {Object} { isVisible, scrollToTop }
 */
const useScrollToTop = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Use instant for route changes to avoid conflict with animations
    });
  }, [pathname]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { isVisible, scrollToTop };
};

export default useScrollToTop;
