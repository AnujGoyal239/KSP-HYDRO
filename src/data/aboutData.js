import { 
  Factory, Building2, Users, Landmark,
  CircleDot, Shield, Leaf, TrendingUp, Award
} from 'lucide-react';

export const aboutHeroData = {
  title: "Engineering Solutions for a Cleaner Future",
  description: "KSP Hydro Engineers Pvt. Ltd. is a leading water and wastewater engineering company specializing in design and execution since 2003."
};

export const whoWeAreData = {
  title: "Who We Are",
  description: "KSP Hydro Engineers Pvt. Ltd. is a water and wastewater engineering company specializing in design, execution. Since 2003, KSP has worked with government bodies, institutions, industries, and hospitality solutions across India.",
  mission: {
    title: "Our Mission",
    description: "To engineer practical, compliant, and sustainable water solutions that enable safe water supply, responsible wastewater management, and long-term operational reliability, while supporting environmental conservation and regulatory compliance."
  },
  values: {
    title: "Our Values",
    description: "We are committed to make EARTH a better place to live by playing its part towards environmental preservation and thereby achieving sustainable growth. KSP creates value for its customers by developing innovative and eco - friendly solutions that are technically, financially and environmentally sustainable."
  },
  industries: [
    { icon: Factory, name: 'Industrial & Commercial' },
    { icon: Building2, name: 'Institutions' },
    { icon: Users, name: 'Communities & Hospitality' },
    { icon: Landmark, name: 'Government & Municipalities' }
  ],
  experience: {
    years: "20+",
    text: "Years of Engineering Experience"
  }
};

export const cultureValuesData = {
  title: "Our Culture & Values",
  description: "At KSP, our culture is shaped by how we think, work, and take responsibility towards our people, and the environment. We believe strong execution, processes, and committed teams are what deliver reliable water infrastructure over decades.",
  values: [
    {
      id: 'excellence',
      icon: CircleDot,
      title: 'Excellence',
      description: 'Delivering high-quality engineering through precision & expertise'
    },
    {
      id: 'safety',
      icon: Shield,
      title: 'Safety First',
      description: 'Prioritizing the health, safety, and well-being of people and environment'
    },
    {
      id: 'sustainability',
      icon: Leaf,
      title: 'Sustainability',
      description: 'Designing responsible water solutions that conserve resources'
    },
    {
      id: 'teamwork',
      icon: Users,
      title: 'Team Spirit',
      description: 'Working collaboratively to drive innovation and long-term success.'
    }
  ],
  metrics: [
    {
      icon: TrendingUp,
      value: '100%',
      label: 'Safety Compliance',
      color: 'text-green-500'
    },
    {
      icon: Award,
      value: '500+',
      label: 'Projects Delivered',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      value: '50+',
      label: 'Expert Team Members',
      color: 'text-cyan-500'
    }
  ]
};

export const qualityComplianceData = {
  title: "Quality & Compliance",
  description: "We are committed to delivering excellence through rigorous quality standards and regulatory compliance across all our projects.",
  standards: [
    {
      title: "ISO 9001:2015",
      description: "Certified Quality Management System ensuring consistent service quality and customer satisfaction."
    },
    {
      title: "Regulatory Compliance",
      description: "Strict adherence to environmental norms set by CPCB, SPCB, and other regulatory bodies."
    },
    {
      title: "Material Standards",
      description: "Use of high-grade, certified materials and equipment from trusted global manufacturers."
    }
  ]
};

export const journeyData = {
  title: "Our Journey",
  description: "From our humble beginnings to becoming a trusted name in water engineering.",
  milestones: [
    {
      year: "2003",
      title: "Company Founded",
      description: "KSP Hydro Engineers was established with a vision to provide clean water solutions."
    },
    {
      year: "2010",
      title: "Expansion into Industrial Sector",
      description: "Successfully completed our first major industrial ETP project."
    },
    {
      year: "2018",
      title: "Pan-India Presence",
      description: "Expanded operations to cover projects across multiple states in India."
    },
    {
      year: "2023",
      title: "20 Years of Excellence",
      description: "Celebrating two decades of delivering reliable and sustainable water infrastructure."
    }
  ]
};
