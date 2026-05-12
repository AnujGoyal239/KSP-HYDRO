import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * useScrollToSection Hook
 * 
 * Production-level hook for programmatic section navigation with smooth scrolling.
 * 
 * Features:
 * - Handles same-page and cross-page navigation
 * - Accounts for fixed navbar offset
 * - Smooth scroll behavior
 * - URL hash management
 * - Works with React Router
 * 
 * @returns {Function} scrollToSection - Function to navigate to a section
 * 
 * @example
 * const scrollToSection = useScrollToSection();
 * scrollToSection('/about#who-we-are');
 */
const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((path) => {
    // Parse the path to extract route and hash
    const [route, hash] = path.split('#');
    const currentRoute = location.pathname;

    /**
     * Case 1: Same page navigation (only hash changes)
     * Scroll immediately without route change
     */
    if (route === currentRoute && hash) {
      const element = document.getElementById(hash);
      
      if (element) {
        const navbarHeight = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash
        window.history.pushState(null, '', `#${hash}`);
      }
    } 
    /**
     * Case 2: Cross-page navigation
     * Navigate to new route, then scroll to section
     */
    else {
      // Navigate to the new route with hash
      navigate(hash ? `${route}#${hash}` : route);
      
      /**
       * ScrollToHashElement component will handle the actual scrolling
       * after the new page loads
       */
    }
  }, [navigate, location.pathname]);

  return scrollToSection;
};

export default useScrollToSection;
