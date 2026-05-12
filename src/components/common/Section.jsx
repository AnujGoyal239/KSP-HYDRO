import { forwardRef } from 'react';

/**
 * Section Component
 * 
 * Production-level reusable section wrapper for page content.
 * Provides consistent structure and scroll-target functionality.
 * 
 * Features:
 * - Semantic HTML (section element)
 * - Scroll target with ID
 * - Consistent padding and spacing
 * - Flexible styling via className
 * - Accessibility support
 * 
 * @param {string} id - Section ID for hash navigation (required)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Section content
 * @param {string} ariaLabel - Accessible label for screen readers
 */
const Section = forwardRef(({ 
  id, 
  className = '', 
  children, 
  ariaLabel,
  ...props 
}, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-32 ${className}`}
      aria-label={ariaLabel || id}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
