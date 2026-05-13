import { 
  Search, ClipboardList, Lightbulb, 
  HardHat, ClipboardCheck, Shield, 
  Settings, CalendarCheck, Activity, HeadphonesIcon,
  TrendingUp, Clock, RefreshCw,
  ShieldCheck, RotateCw
} from 'lucide-react';

export const servicesHeroData = {
  title: "Our Services",
  description: "End-to-end water infrastructure services, delivered from concept and execution to long-term operation and maintenance."
};

export const howWeWorkData = {
  title: "How KSP Hydro Works With Clients",
  description: "At KSP Hydro Engineers, we follow a structured and practical approach to every project, from planning and system design to installation to commissioning and ongoing operations, ensuring dependable performance at every stage."
};

export const designEngineeringData = {
  title: "Design Engineering & Consultancy",
  description: "End-to-end technical planning and engineering solutions for efficient, compliant water and wastewater treatment systems.",
  cards: [
    {
      icon: Search,
      title: "Site Study & Assessment",
      description: "Comprehensive evaluation of wastewater sources, pollution levels, and treatment requirements before discharge into natural water bodies.",
      activities: [
        "Separation of solid wastes",
        "Removal of oils and grease",
        "Effluent analysis and treatment requirement",
        "Identification of pollutants in industrial & domestic wastewater"
      ]
    },
    {
      icon: ClipboardList,
      title: "Design & Planning",
      description: "Engineering of efficient wastewater treatment plants using proven technologies & industry experience.",
      activities: [
        "Design of STP, ETP & Industrial WTP systems",
        "Filtration & effluent-specific treatment planning",
        "Selection of aerobic/anaerobic methods",
        "Engineering for RO, Ozone & Raw Water Treatment systems"
      ]
    },
    {
      icon: Lightbulb,
      title: "Technology Selection",
      description: "Implementation of sophisticated efficient treatment technologies based on effluent characteristics & regulatory standards.",
      activities: [
        "Advanced filtration techniques",
        "Effluent-specific treatment solutions",
        "Pollution control & compliance-driven process",
        "Selection of suitable microorganisms (aerobic / anaerobic)"
      ]
    }
  ],
  processSteps: [
    { number: "01", title: "Design", description: "" },
    { number: "02", title: "Development", description: "" },
    { number: "03", title: "Delivery", description: "" }
  ]
};

export const erectionCommissioningData = {
  title: "Erection & Commissioning",
  description: "Turnkey installation, construction, and commissioning services ensuring reliable and standards-compliant plant performance.",
  cards: [
    {
      icon: HardHat,
      title: "Turnkey Erection & Commissioning",
      description: "Complete turnkey execution for water and wastewater treatment plants, from design to commissioning.",
      items: [
        "Water supply & fire fighting projects",
        "Onshore & offshore large diameter piping",
        "Design, construction, erection & commissioning",
        "Supply & commissioning of pressure sand filters"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Civil Construction & Infrastructure",
      description: "Execution of civil and structural works essential for treatment plant operations.",
      items: [
        "MS fabrication structures",
        "STP tanks & civil structures",
        "Swimming pools construction",
        "MS fabricated containerised units"
      ]
    },
    {
      icon: Shield,
      title: "Piping & Specialized Works",
      description: "Specialized pipeline and structural installations for complex project requirements.",
      items: [
        "Civil construction works",
        "Large diameter piping systems",
        "Underwater HDPE pipeline laying",
        "Structural Installation & Integration"
      ]
    }
  ],
  handoverItems: [
    { icon: ShieldCheck, text: "Tender preparation & bid evaluation" },
    { icon: RotateCw, text: "Estimation & contractor prequalification" },
    { icon: Clock, text: "Construction supervision & QA certification" },
    { icon: Settings, text: "Layout plans & detailed engineering design" }
  ]
};

export const operationMaintenanceData = {
  title: "Operation & Maintenance",
  description: "Comprehensive plant operation and lifecycle management to optimize performance, ensure compliance, and reduce operating costs.",
  cards: [
    {
      icon: CalendarCheck,
      title: "Complete Plant Management",
      description: "Comprehensive operation and maintenance of water and wastewater treatment plants, whether built by us or not.",
      items: [
        "Asset lifecycle management and renewal",
        "24/7 treatment process management",
        "Integrated staff & responsibility management",
        "Preventive and corrective maintenance of facilities & equipment"
      ]
    },
    {
      icon: Activity,
      title: "Monitoring & Compliance",
      description: "Ensuring adherence to all statutory, environmental, health and safety regulations.",
      items: [
        "Asset and performance audits",
        "Statutory documentation & reporting",
        "Analytical monitoring at every treatment stage",
        "Compliance with environmental & quality standards"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Water & Wastewater Operations",
      description: "End-to-end operation of diverse treatment systems across industries and municipalities.",
      items: [
        "Sewage & Effluent Treatment Plants",
        "RO / Desalination (brackish & sea water)",
        "Sludge recovery and odour management",
        "Drinking Water Production (well & surface water)"
      ]
    }
  ],
  benefits: [
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Regular tuning ensures systems run at peak efficiency, reducing energy consumption and operational costs."
    },
    {
      icon: Clock,
      title: "Asset Protection",
      description: "Proactive maintenance prevents premature wear and tear, protecting your investment for the long term."
    },
    {
      icon: Shield,
      title: "Full Compliance",
      description: "We handle all environmental norms, audits, and documentation, keeping you fully compliant."
    },
    {
      icon: RefreshCw,
      title: "Flexible Support Contracts",
      description: "Quick response times and dedicated technical support for any operational issues or breakdowns."
    }
  ]
};
