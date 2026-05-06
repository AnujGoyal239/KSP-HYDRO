import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Mail, Phone, Building2, LayoutGrid, MessageSquare, Clock, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/useToast';
import { sendEmail, TEMPLATES } from '@/lib/emailjs';

gsap.registerPlugin(ScrollTrigger);

const ContactFormSection = () => {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error } = useToast();

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Selectors
    const leftCol = '.contact-left';
    const formRows = '.form-row';
    const submitBtn = '.submit-button';
    const rightCol = '.contact-right';
    const contactCards = '.contact-card';

    // 0. Initial State
    gsap.set([leftCol, formRows, submitBtn, rightCol, contactCards], { opacity: 0 });
    gsap.set(formRows, { y: 10 });
    gsap.set(rightCol, { y: 16 });
    gsap.set(contactCards, { y: 16 });

    // Accessibility: Reduced Motion
    if (prefersReduced) {
      gsap.to([leftCol, formRows, submitBtn, rightCol, contactCards], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        clearProps: "all"
      });
      return;
    }

    // Main Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      }
    });

    // 1. Left Column Intro (Heading + Subtitle)
    tl.fromTo(leftCol,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      // 2. Form Rows (Staggered)
      .fromTo(formRows,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" },
        "-=0.4"
      )
      // 3. Submit Button
      .fromTo(submitBtn,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      )
      // 4. Right Column Contact Cards
      .fromTo(contactCards,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.6" // Start overlapping with form animation
      );

  }, { scope: containerRef });

  // Hover Handlers
  const handleButtonHover = (e) => {
    if (window.matchMedia('(min-width: 768px)').matches && !isSubmitting) {
      gsap.to(e.currentTarget, { y: -3, boxShadow: "0 4px 12px rgba(30, 136, 229, 0.3)", duration: 0.25, ease: "power2.out" });
      gsap.to(e.currentTarget.querySelector('.btn-icon'), { x: 4, duration: 0.25, ease: "power2.out" });
    }
  };

  const handleButtonLeave = (e) => {
    if (window.matchMedia('(min-width: 768px)').matches && !isSubmitting) {
      gsap.to(e.currentTarget, { y: 0, boxShadow: "none", duration: 0.25, ease: "power2.out" });
      gsap.to(e.currentTarget.querySelector('.btn-icon'), { x: 0, duration: 0.25, ease: "power2.out" });
    }
  };

  const handleCardHover = (e) => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      gsap.to(e.currentTarget.querySelector('.card-icon-wrapper'), { y: -3, scale: 1.05, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleCardLeave = (e) => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      gsap.to(e.currentTarget.querySelector('.card-icon-wrapper'), { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleSocialHover = (e) => {
    gsap.to(e.currentTarget, { scale: 1.06, duration: 0.2, ease: "power2.out" });
  };

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Map 'name' to 'user_name' if needed, but our schema handles 'name' or 'user_name'
    // Ensure all fields are present

    try {
      const result = await sendEmail(data, TEMPLATES.CONTACT);
      if (result.success) {
        success(result.message);
        e.target.reset();
      }
    } catch (err) {
      error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={containerRef} className="py-24 contact-section">
      <div className="px-4 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div className="contact-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-row">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#1E88E5]" />
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] bg-white transition-shadow duration-200 focus:shadow-sm disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="form-row">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#1E88E5]" />
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    placeholder="your.email@company.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] bg-white transition-shadow duration-200 focus:shadow-sm disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>

              {/* Phone Number & Company Name Row */}
              <div className="grid grid-cols-1 gap-4 form-row sm:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#1E88E5]" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      disabled={isSubmitting}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] bg-white transition-shadow duration-200 focus:shadow-sm disabled:bg-gray-50 disabled:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <div className="relative group">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#1E88E5]" />
                    <input
                      type="text"
                      name="company"
                      disabled={isSubmitting}
                      placeholder="Your company"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] bg-white transition-shadow duration-200 focus:shadow-sm disabled:bg-gray-50 disabled:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="form-row">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <LayoutGrid className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#1E88E5]" />
                  <input
                    type="text"
                    name="subject"
                    required
                    disabled={isSubmitting}
                    placeholder="Subject of your inquiry"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] bg-white transition-shadow duration-200 focus:shadow-sm disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-row">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#1E88E5]" />
                  <textarea
                    rows={6}
                    name="message"
                    required
                    disabled={isSubmitting}
                    placeholder="Tell us about your requirements..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] resize-none bg-white transition-shadow duration-200 focus:shadow-sm disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button w-full bg-[#1E88E5] hover:bg-[#1976D2] disabled:bg-gray-400 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 active:translate-y-[1px] disabled:cursor-not-allowed disabled:active:translate-y-0"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 btn-icon" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-center text-gray-400 form-row">
                * Required fields
              </p>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            <div className="contact-card">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Reach out to us through any of the following channels. We&apos;re always ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone Numbers Card */}
              <div
                className="flex gap-4 p-6 transition-colors bg-white border border-gray-200 contact-card rounded-xl hover:border-gray-300"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-icon-wrapper w-12 h-12 bg-[#1E88E5] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1628] mb-2">Phone Numbers</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>+91-141-4042078</p>
                    <p>+91 70734 72044</p>
                  </div>
                </div>
              </div>

              {/* Email Addresses Card */}
              <div
                className="flex gap-4 p-6 transition-colors bg-white border border-gray-200 contact-card rounded-xl hover:border-gray-300"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-icon-wrapper w-12 h-12 bg-[#1E88E5] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1628] mb-2">Email Addresses</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>proposal@ksphydro.com</p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div
                className="flex gap-4 p-6 transition-colors bg-white border border-gray-200 contact-card rounded-xl hover:border-gray-300"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-icon-wrapper w-12 h-12 bg-[#1E88E5] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1628] mb-2">Business Hours</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Follow Us Card */}
              <div className="p-6 bg-white border border-gray-200 contact-card rounded-xl">
                <h3 className="font-semibold text-[#0A1628] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    onMouseEnter={handleSocialHover}
                    onMouseLeave={handleSocialLeave}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#1E88E5] hover:bg-[#1E88E5]/5 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#1E88E5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    onMouseEnter={handleSocialHover}
                    onMouseLeave={handleSocialLeave}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#1E88E5] hover:bg-[#1E88E5]/5 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#1E88E5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    onMouseEnter={handleSocialHover}
                    onMouseLeave={handleSocialLeave}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#1E88E5] hover:bg-[#1E88E5]/5 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#1E88E5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
