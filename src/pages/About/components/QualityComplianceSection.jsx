import { useRef } from 'react';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QualityComplianceSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Selectors
    const headers = gsap.utils.toArray('.quality-header');
    const qaCard = '.qa-card';
    const certCards = gsap.utils.toArray('.certification-card');

    // Initial States
    if (!prefersReduced) {
      gsap.set(headers, { opacity: 0, y: 20 });
      gsap.set(qaCard, { opacity: 0, y: 20 });
      gsap.set(certCards, { opacity: 0, y: 18 });
    } else {
      gsap.set([headers, qaCard, certCards], { opacity: 0 });
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      // Adjust initial Y for mobile
      if (!prefersReduced && !isDesktop) {
        gsap.set(headers, { y: 12 });
        gsap.set(certCards, { y: 10 });
      }

      // Main Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (!prefersReduced) {
        // Headers (H2 + P)
        tl.to(headers, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        })
          // QA Card
          .to(qaCard, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4")
          // Certification Cards
          .to(certCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
          }, "-=0.2");
      } else {
        // Reduced Motion
        tl.to(headers, { opacity: 1, duration: 0.6, stagger: 0.1 })
          .to(qaCard, { opacity: 1, duration: 0.6 }, "-=0.3")
          .to(certCards, { opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.3");
      }

      // Micro Interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        certCards.forEach((card) => {
          const icon = card.querySelector('.certification-icon');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -3,
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              duration: 0.25,
              ease: "power2.out"
            });
            if (icon) gsap.to(icon, { scale: 1.04, duration: 0.25, ease: "power2.out" });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
              duration: 0.25,
              ease: "power2.out"
            });
            if (icon) gsap.to(icon, { scale: 1, duration: 0.25, ease: "power2.out" });
          });
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="quality-section relative w-full px-4 py-24 mt-24 mb-20 overflow-hidden md:px-8 md:py-20">

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Column - Quality Overview */}
          <div>
            <h2 className="quality-header text-3xl md:text-[34px] font-bold text-slate-900 mb-5">
              Quality & Compliance
            </h2>
            <p className="quality-header max-w-lg mb-8 text-base leading-relaxed text-slate-500">
              Every system we design, install, and maintain follows structured quality controls, statutory requirements, and industry best practices to ensure safe, reliable, and long-term performance across all projects.
            </p>

            {/* Quality Assurance Card */}
            <div className="qa-card p-6 border bg-gradient-to-b from-[#EFF6FF] to-[#ECFEFF] rounded-xl border-[#DBEAFE]">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-semibold text-slate-900">Quality Assurance Practices</h3>
              </div>

              {/* Quality Practices List */}
              <ul className="space-y-3">
                <li className="qa-item flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Strict quality control at every project stage</span>
                </li>
                <li className="qa-item flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Regular internal reviews and third-party audits</span>
                </li>
                <li className="qa-item flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Documented testing, validation, and commissioning procedures</span>
                </li>
                <li className="qa-item flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Compliance with applicable statutory and regulatory requirements</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div>
            <div className="certifications-section p-6 border bg-[#F9FAFB] rounded-xl md:p-8 border-[#E5E7EB">
              {/* Certifications Header */}
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-slate-900">Certifications & Standards</h3>
              </div>

              {/* Certification Cards Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Cert 1 */}
                <div className="certification-card p-5 bg-white border rounded-lg shadow-sm border-slate-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="certification-icon w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">ISO 9001:2015
                      <br />
                      Quality Management System


                    </span>
                  </div>
                </div>

                {/* Cert 2 */}
                <div className="certification-card p-5 bg-white border rounded-lg shadow-sm border-slate-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="certification-icon w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">ISO 9001:2015 <br /> Manufacturing of design assembling & supply of waste water treatment planth</span>
                  </div>
                </div>

                {/* Cert 3 */}
                <div className="certification-card p-5 bg-white border rounded-lg shadow-sm border-slate-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="certification-icon w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">ISO 9001:2015 <br /> Allied Engineering Industries</span>
                  </div>
                </div>

                {/* Cert 4 */}
                <div className="certification-card p-5 bg-white border rounded-lg shadow-sm border-slate-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="certification-icon w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">ISO 9001:2015 <br /> Plumbing & Fire fighting services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QualityComplianceSection;
