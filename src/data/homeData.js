import { Award, Shield, Settings, Headphones } from 'lucide-react';

export const heroData = {
  headlineLines: ["Transforming Water", "Enhancing Lives"],
  description: "We design and deliver reliable, cost-effective, and sustainable water and wastewater solutions for governments, industries, institutions, and organization.",
  primaryCTA: { text: "Explore Our Solutions", link: "/products" },
  secondaryCTA: { text: "Schedule a Consultation", link: "/contact" },
  trustIndicators: [
    { text: "ISO Certified", color: "bg-green-500" },
    { text: "20+ Years Experience", color: "bg-blue-500" },
    { text: "500+ Projects Delivered", color: "bg-cyan-500" }
  ]
};

export const aboutData = {
  label: "About KSP Hydro Engineers",
  headingLines: ["Practical Water", "Solutions for", "Real-World Needs"],
  description: "KSP Hydro Engineers provides complete water and wastewater solutions from design and execution to long-term operation. We help governments, industries, and institutions convert wastewater into safe, reusable water through reliable, cost-effective systems built for real-world conditions.",
  cta: { text: "Know More About Us", link: "/about" }
};

export const whyChooseUsData = {
  label: "Trust & Expertise",
  title: "Why Choose KSP Hydro",
  description: "A trusted partner delivering practical, reliable, and compliant water solutions across industries and public infrastructure.",
  features: [
    {
      id: 1,
      icon: Award,
      title: 'Proven Technologies',
      description: 'Field-tested water and wastewater treatment technologies successfully implemented across STPs, ETPs, WTPs, RO systems, and lake revival projects.',
    },
    {
      id: 2,
      icon: Shield,
      title: 'Quality & Compliance',
      description: 'All systems are designed and executed in line with regulatory norms, safety standards, and performance benchmarks to ensure long-term reliability.',
    },
    {
      id: 3,
      icon: Settings,
      title: 'End-to-End Solutions',
      description: 'Complete lifecycle support from design engineering and commissioning to operation, maintenance, and system optimization.',
    },
    {
      id: 4,
      icon: Headphones,
      title: 'Reliable Support',
      description: 'Dedicated technical teams, quick response, and ongoing AMC support to keep your systems running efficiently, year after year.',
    },
  ]
};
