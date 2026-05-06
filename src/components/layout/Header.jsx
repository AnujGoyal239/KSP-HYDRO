import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import logo from '@/assets/images/logo.png';

const MobileMenu = ({ isOpen, onClose, navLinks, currentPath }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const ctaRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Animation Context
  const { contextSafe } = useGSAP({ scope: containerRef });

  // Close Animation Sequence
  const handleClose = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: onClose
    });

    // 1. Menu items fade out
    tl.to(itemsRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.in"
    })
    // CTA fade out
    .to(ctaRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      ease: "power2.in"
    }, "<")
    // 2. Panel fades + slight downward motion
    .to(panelRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.98,
      duration: 0.25,
      ease: "power2.in"
    }, "-=0.1")
    // 3. Overlay fades out
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    }, "-=0.15");
  });

  // Open Animation Sequence
  useGSAP(() => {
    if (!isOpen) return;

    const tl = gsap.timeline();

    // 1. Overlay fades in
    tl.fromTo(overlayRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.25 }
    )
    // 2. Menu panel appears
    .fromTo(panelRef.current,
      { opacity: 0, y: 20, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power2.out" },
      "-=0.15"
    )
    // 3. Menu items stagger in
    .fromTo(itemsRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" },
      "-=0.2"
    )
    // 4. CTA button appears last
    .fromTo(ctaRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );

  }, { scope: containerRef, dependencies: [isOpen] });

  // Micro-interactions
  const handleLinkTap = contextSafe((e) => {
    gsap.to(e.currentTarget, { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1 });
    handleClose(); // Close on link click
  });

  const handleCtaTap = contextSafe((e) => {
    gsap.to(e.currentTarget, { scale: 0.96, duration: 0.15, yoyo: true, repeat: 1 });
    handleClose(); // Close on CTA click
  });

  const handleCloseTap = contextSafe((e) => {
    gsap.to(e.currentTarget, { rotation: 90, duration: 0.2 });
    handleClose();
  });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[60] flex items-center justify-center lg:hidden">
      {/* 1. Full-screen overlay backdrop */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* 2. Menu panel (centered card style) */}
      <div 
        ref={panelRef}
        className="relative w-[90%] max-w-sm bg-white shadow-2xl rounded-xl overflow-hidden"
      >
        {/* 3. Menu header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold text-gray-900">KSP Hydro</span>
          </div>
          <button 
            ref={closeBtnRef}
            onClick={handleCloseTap}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 4. Navigation links */}
        <div className="flex flex-col px-4 pb-6 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              ref={el => itemsRef.current[i] = el}
              onClick={handleLinkTap}
              className={`px-4 py-3 text-base font-medium rounded-xl transition-colors text-center ${
                currentPath === link.path 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 5. Primary CTA button */}
        <div className="px-6 pb-6">
          <Link
            to="/contact"
            ref={ctaRef}
            onClick={handleCtaTap}
            className="block w-full py-3.5 text-center text-white bg-blue-600 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isDesktop, reduceMotion } = context.conditions;
      
      if (reduceMotion) {
        gsap.set(containerRef.current, { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline();

      // Main container drop
      tl.from(containerRef.current, {
        y: isDesktop ? -30 : -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Stagger children content
      tl.from(".nav-content-item", {
        y: -10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all" 
      }, "-=0.4");
    });
  }, { scope: containerRef });

  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Knowledge Center', path: '/knowledge-center' },
    // { name: 'Careers', path: '/careers' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav ref={containerRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[100%] max-w-7xl">
        <div className="flex items-center justify-between px-8 py-4 bg-white rounded-full shadow-lg lg:px-12">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 nav-content-item">
            <img 
              src={logo} 
              alt="KSP Hydro Engineers Logo" 
              className="object-contain w-10 h-10"
            />
            <span className="text-base font-semibold text-gray-900 lg:text-lg">
              KSP Hydro Engineers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors nav-content-item ${
                  isActive(link.path)
                    ? 'text-black'
                    : 'text-black hover:text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Contact Button */}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md nav-content-item"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-600 lg:hidden hover:text-gray-900 nav-content-item"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Portal */}
      {isMenuOpen && (
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          navLinks={navLinks}
          currentPath={location.pathname}
        />
      )}
    </>
  );
};

export default Header;
