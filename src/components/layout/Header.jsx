import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Users, 
  TrendingUp, 
  Heart, 
  Award, 
  Building2, 
  Handshake,
  Droplets,
  FlaskConical,
  Recycle,
  Filter,
  Waves,
  Layers,
  Activity,
  Wind,
  Flame,
  Settings,
  Lightbulb,
  Cog,
  Headphones,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import logo from '@/assets/images/logo.png';
import { navItems } from '@/data/navigationData';

// Icon mapping for dropdown items
const iconMap = {
  // About icons
  'about': Users,
  'journey': TrendingUp,
  'values': Heart,
  'certification': Award,
  'clients': Building2,
  'partner': Handshake,
  
  // Product icons
  'pool': Droplets,
  'water-treatment': FlaskConical,
  'sewage': Recycle,
  'effluent': Filter,
  'reverse-osmosis': Waves,
  'lake': Waves,
  'ultra-filtration': Layers,
  'membrane-reactor': Activity,
  'fluidized-reactor': Wind,
  'bio': Flame,
  'sequencing': Activity,
  'equipment': Settings,
  
  // Service icons
  'service': Lightbulb,
  
  // Project icons
  'project': Briefcase
};

const MobileMenu = ({ isOpen, onClose, navLinks, currentPath }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const ctaRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const navigate = useNavigate();

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
  const handleLinkTap = contextSafe((e, link) => {
    gsap.to(e.currentTarget, { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1 });
    
    // If link has dropdown, toggle it
    if (link.dropdown && link.dropdown.length > 0) {
      e.preventDefault();
      setExpandedItem(expandedItem === link.id ? null : link.id);
    } else {
      handleClose(); // Close on link click if no dropdown
    }
  });

  const handleSubLinkClick = (path) => {
    navigate(path);
    handleClose();
  };

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
        className="absolute inset-0 bg-black/30 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* 2. Menu panel (centered card style) */}
      <div 
        ref={panelRef}
        className="relative w-[92%] max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden max-h-[85vh] flex flex-col"
      >
        {/* 3. Menu header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <div>
              <span className="text-lg font-bold text-gray-900 block">KSP Hydro</span>
              <span className="text-xs text-gray-500">Engineers</span>
            </div>
          </div>
          <button 
            ref={closeBtnRef}
            onClick={handleCloseTap}
            className="p-2.5 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 4. Navigation links - Scrollable */}
        <div className="flex flex-col px-4 py-4 space-y-2 overflow-y-auto flex-1">
          {navLinks.map((link, i) => (
            <div key={link.id}>
              <button
                ref={el => itemsRef.current[i] = el}
                onClick={(e) => handleLinkTap(e, link)}
                className={`w-full px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-200 flex items-center justify-between ${
                  currentPath === link.path 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                }`}
              >
                <span>{link.name}</span>
                {link.dropdown && link.dropdown.length > 0 && (
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedItem === link.id ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              
              {/* Dropdown submenu */}
              {link.dropdown && link.dropdown.length > 0 && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedItem === link.id ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 rounded-xl p-2 space-y-1">
                    {link.dropdown.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubLinkClick(subItem.path)}
                        className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 active:scale-98"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 5. Primary CTA button */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <Link
            to="/contact"
            ref={ctaRef}
            onClick={handleCtaTap}
            className="block w-full py-4 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-bold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 active:scale-98"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const containerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

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

  const handleMouseEnter = (navId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(navId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownItemClick = (path) => {
    setActiveDropdown(null);
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  // Get active dropdown data
  const activeDropdownData = navItems.find(item => item.id === activeDropdown);

  return (
    <>
      <nav ref={containerRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-md rounded-full shadow-xl lg:px-12 border border-gray-100">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 nav-content-item">
            <img 
              src={logo} 
              alt="KSP Hydro Engineers Logo" 
              className="object-contain w-10 h-10"
            />
            <div className="hidden sm:block">
              <span className="text-base font-bold text-gray-900 lg:text-lg block leading-tight">
                KSP Hydro Engineers
              </span>
              <span className="text-xs text-gray-500">Pavati Beyond Imagination</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-2 lg:flex">
            {navItems.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={`px-5 py-2 text-sm font-semibold transition-all duration-200 rounded-lg nav-content-item flex items-center gap-1 ${
                    isActive(link.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            
            {/* Contact Button */}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md ml-2 nav-content-item"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2.5 text-gray-700 lg:hidden hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 nav-content-item active:scale-95"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Global Dropdown Panel - Below Navbar */}
        {activeDropdownData && activeDropdownData.dropdown && (
          <div
            className="absolute left-1/2 -translate-x-1/2 mt-0 hidden lg:block"
            onMouseEnter={() => handleMouseEnter(activeDropdownData.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
              activeDropdown === activeDropdownData.id
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4 pointer-events-none'
            }`}>
              <div className="px-20 py-10">
                {/* Different layouts based on dropdown type */}
                <div className={`${
                  activeDropdownData.id === 1 // Products
                    ? 'grid grid-cols-4 gap-5' 
                    : activeDropdownData.id === 2 // Projects
                    ? 'grid grid-cols-3 gap-5'
                    : 'grid grid-cols-2 gap-5' // About, Services
                }`}>
                  {activeDropdownData.dropdown.map((item) => {
                    const IconComponent = iconMap[item.icon] || Briefcase;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleDropdownItemClick(item.path)}
                        className="px-8 py-3.5 text-sm font-medium text-gray-600 hover:text-blue-600 bg-gray-50/50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-200 flex items-center justify-start gap-3.5 group shadow-sm hover:shadow-md w-full"
                      >
                        <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0" />
                        <span className="text-left leading-snug whitespace-nowrap">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Portal */}
      {isMenuOpen && (
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          navLinks={navItems}
          currentPath={location.pathname}
        />
      )}
    </>
  );
};

export default Header;
