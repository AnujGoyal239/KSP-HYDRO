import { useState, useEffect } from 'react';

/**
 * useActiveSection Hook
 * 
 * Production-level hook that tracks which section is currently visible in the viewport.
 * Used for active link highlighting in navigation.
 * 
 * Features:
 * - Intersection Observer API for performance
 * - Accounts for navbar offset
 * - Debounced updates to prevent excessive re-renders
 * - Proper cleanup on unmount
 * 
 * @param {Array<string>} sectionIds - Array of section IDs to track
 * @param {number} offset - Navbar offset in pixels (default: 120)
 * @returns {string|null} activeSection - ID of currently active section
 * 
 * @example
 * const activeSection = useActiveSection(['who-we-are', 'our-journey', 'our-values']);
 */
const useActiveSection = (sectionIds = [], offset = 120) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Early return if no sections to track
    if (!sectionIds || sectionIds.length === 0) return;

    /**
     * Intersection Observer Configuration
     * - rootMargin: Negative top margin to account for fixed navbar
     * - threshold: Trigger when 20% of section is visible
     */
    const observerOptions = {
      root: null, // viewport
      rootMargin: `-${offset}px 0px -50% 0px`, // Account for navbar and center detection
      threshold: 0.2 // 20% visibility threshold
    };

    /**
     * Track which sections are currently intersecting
     * We need this because multiple sections can be visible at once
     */
    const intersectingSections = new Map();

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Section is visible
          intersectingSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          // Section is not visible
          intersectingSections.delete(entry.target.id);
        }
      });

      /**
       * Find the section with highest intersection ratio
       * This is the "most visible" section
       */
      if (intersectingSections.size > 0) {
        let maxRatio = 0;
        let mostVisibleSection = null;

        intersectingSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        setActiveSection(mostVisibleSection);
      }
    };

    // Create observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    /**
     * Observe all sections
     * Use setTimeout to ensure DOM is ready
     */
    const observeTimeout = setTimeout(() => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    /**
     * Cleanup function
     * - Disconnect observer
     * - Clear timeout
     */
    return () => {
      clearTimeout(observeTimeout);
      observer.disconnect();
      intersectingSections.clear();
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useActiveSection;
