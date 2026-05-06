import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * A reusable hook for scroll-triggered reveal animations.
 * Handles responsive behavior, reduced motion, and cleanup.
 * 
 * @param {Object} options Configuration options
 * @param {string} options.trigger - Selector or ref for the trigger element
 * @param {string} options.targets - Selector for child elements to animate (optional)
 * @param {Object} options.animation - Custom GSAP animation properties (from)
 * @param {Object} options.scrollTrigger - Custom ScrollTrigger properties
 * @param {number} options.stagger - Stagger delay between items
 * @param {number} options.delay - Initial delay
 * @param {boolean} options.mobile - Whether to enable on mobile (default: true)
 */
const useScrollReveal = ({
  trigger,
  targets = null,
  animation = {},
  scrollTrigger = {},
  stagger = 0,
  delay = 0,
  mobile = true
}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Setup MatchMedia for responsive handling
    const mm = gsap.matchMedia();

    // Define context conditions
    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isMobile, reduceMotion } = context.conditions;

      // Skip if mobile is disabled and we are on mobile
      if (!mobile && isMobile) return;

      // --- ANIMATION CONFIGURATION ---
      // Default animation state (hidden state)
      const defaultFromVars = {
        y: 20,
        opacity: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        ...animation // Merge custom overrides
      };

      // Reduced motion override: fade only, no movement
      if (reduceMotion) {
        defaultFromVars.y = 0;
        defaultFromVars.x = 0;
        defaultFromVars.scale = 1;
        defaultFromVars.rotation = 0;
        defaultFromVars.opacity = 0; // Ensure fade still happens
        defaultFromVars.duration = 0.5; // Faster fade
      }

      // Mobile adjustments: reduce movement distance
      if (isMobile && !reduceMotion) {
        if (defaultFromVars.y && typeof defaultFromVars.y === 'number') {
          defaultFromVars.y = defaultFromVars.y * 0.5; // Half distance on mobile
        }
      }

      // --- SCROLLTRIGGER CONFIGURATION ---
      const triggerElement = trigger ? (trigger.current || trigger) : containerRef.current;
      const targetElements = targets ? targets : triggerElement;

      const defaultScrollTrigger = {
        trigger: triggerElement,
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",
        // invalidateOnRefresh: true, // Handle resize/refresh better
        ...scrollTrigger
      };

      // Create the timeline
      const tl = gsap.timeline({
        scrollTrigger: defaultScrollTrigger,
        delay: delay
      });

      // Add animation to timeline
      // Note: We use .from() inside the timeline as requested
      tl.from(targetElements, {
        ...defaultFromVars,
        stagger: stagger,
        clearProps: "all" // Clean up props after animation (optional, but good for some cases)
      });

    });

    // Cleanup happens automatically via useGSAP scope

  }, { scope: containerRef, dependencies: [trigger, targets, animation, scrollTrigger, stagger, delay, mobile] });

  return containerRef;
};

export default useScrollReveal;
