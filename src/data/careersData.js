import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

export const careersHeroData = {
  title: "Build a Career That Solves Real Water Challenges",
  description: "At KSP Hydro Engineers, we work on projects that matter, improving water quality, sustainability, and infrastructure across industries and communities.",
  ctaText: "Apply to Work With Us"
};

export const careersCultureData = {
  title: "Our Culture",
  content: [
    "At KSP Hydro, we believe technology alone doesn't win; execution does.",
    "Our strength lies in people who collaborate, take ownership, and deliver with purpose.",
    "We foster a culture where teams work closely toward shared goals, where learning never stops, and where individual growth directly contributes to organisational success.",
    "Our people represent KSP Hydro on every site and with every client; that responsibility shapes how we work, think, and grow together."
  ]
};

export const careersBenefitsData = {
  title: "Why Work With KSP Hydro",
  benefits: [
    {
      icon: Target,
      title: "Purpose-Driven Work",
      description: "Work on real-world water and wastewater projects that create lasting environmental and social impact.",
      iconBgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: Lightbulb,
      title: "Hands-On Learning",
      description: "Gain practical exposure across engineering, operations, project execution, and on-ground implementation.",
      iconBgColor: "bg-emerald-50",
      iconColor: "text-emerald-500"
    },
    {
      icon: Users,
      title: "People-First Environment",
      description: "We value integrity, collaboration, and accountability over hierarchy.",
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Long-Term Growth",
      description: "We invest in people who want to build careers, not just complete assignments.",
      iconBgColor: "bg-emerald-50",
      iconColor: "text-emerald-500"
    }
  ]
};

export const howToApplyData = {
  title: "How to Apply",
  intro: [
    "We are always open to connecting with individuals who are passionate about water engineering, sustainability, and execution excellence.",
    "If you believe your skills and mindset align with KSP Hydro, we'd be happy to hear from you."
  ],
  steps: [
    {
      id: 1,
      title: "Fill out the application form",
      description: "Complete the form below with your details and area of interest",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-100",
      numberColor: "bg-cyan-500"
    },
    {
      id: 2,
      title: "Email your resume",
      description: "Send your resume to:",
      email: "proposal@ksphydro.com",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      numberColor: "bg-emerald-500"
    }
  ],
  footerText: "Our team reviews every application and will reach out if there is a suitable opportunity."
};
