import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

export const contactHeroData = {
  title: "Get in Touch",
  description: "Have a project in mind or need technical assistance? Our team is here to help you with reliable water and wastewater solutions."
};

export const officeData = {
  title: 'Head Office',
  company: 'KSP Hydro Engineers Pvt. Ltd.',
  address: ['S-1 A/8, Arya Square Mall', 'Subhash Nagar, Jaipur – 302016'],
  country: 'India',
  mapLink: "https://maps.app.goo.gl/qWyo0hOHrtoHLbxR6"
};

export const whyJoinData = {
  title: "Why Join KSP Hydro",
  benefits: [
    {
      id: 'purpose',
      icon: Target,
      title: "Purpose-Driven Work",
      description: "Work on real-world water and wastewater projects that create lasting environmental and social impact.",
      iconBg: "bg-[#EBF2FF]",
      iconColor: "text-blue-600"
    },
    {
      id: 'learning',
      icon: Lightbulb,
      title: "Hands-On Learning",
      description: "Gain practical exposure across engineering, operations, project execution, and on-ground implementation.",
      iconBg: "bg-[#E6FFFA]",
      iconColor: "text-emerald-500"
    },
    {
      id: 'people',
      icon: Users,
      title: "People-First Environment",
      description: "We value integrity, collaboration, and accountability over hierarchy.",
      iconBg: "bg-[#F0F5FF]",
      iconColor: "text-blue-500"
    },
    {
      id: 'growth',
      icon: TrendingUp,
      title: "Long-Term Growth",
      description: "We invest in people who want to build careers, not just complete assignments.",
      iconBg: "bg-[#F0FFF4]",
      iconColor: "text-emerald-500"
    }
  ]
};

export const responseGuaranteeData = {
  title: "Our Response Guarantee",
  description: "We value your time and aim to provide timely assistance for all your inquiries.",
  guarantees: [
    {
      title: "Quick Response",
      description: "Our team will get back to you within 24-48 business hours."
    },
    {
      title: "Expert Guidance",
      description: "Consult with our technical experts for tailored solutions."
    },
    {
      title: "Transparent Communication",
      description: "Clear and honest updates throughout our engagement."
    }
  ]
};
