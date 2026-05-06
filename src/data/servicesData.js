import { 
  Ban, Search, ClipboardList, Lightbulb, 
  Wrench, HardHat, ClipboardCheck, Shield, 
  Settings, CalendarCheck, Activity, HeadphonesIcon,
  TrendingUp, Clock, RefreshCw, CheckCircle,
  MonitorPlay, Headphones, FileText
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
  description: "Engineering-led consulting services to design efficient, compliant, and application-specific water and wastewater systems.",
  cards: [
    {
      icon: Search,
      title: "Site Study & Assessment",
      description: "We begin with a detailed evaluation of site conditions, water characteristics, and operational requirements to establish a strong technical foundation.",
      activities: [
        "Water quality analysis",
        "Flow and load assessment",
        "Space and layout feasibility",
        "Environmental and regulatory considerations"
      ]
    },
    {
      icon: ClipboardList,
      title: "Design & Planning",
      description: "Custom system designs developed to match project requirements, ensuring performance, reliability, & compliance.",
      activities: [
        "Process and layout drawings",
        "Equipment sizing and selection",
        "Compliance and approval documentation",
        "Process design and engineering calculations"
      ]
    },
    {
      icon: Lightbulb,
      title: "Technology Selection",
      description: "Objective guidance to select the suitable treatment technology based on lifecycle cost performance, and future scalability.",
      activities: [
        "Performance optimization",
        "Capex and Opex evaluation",
        "Provision for future expansion",
        "Technology comparison (MBR, MBBR, etc.)"
      ]
    }
  ],
  processSteps: [
    { number: "01", title: "Discovery", description: "" },
    { number: "02", title: "Analysis", description: "" },
    { number: "03", title: "Design", description: "" },
    { number: "04", title: "Approval", description: "" }
  ]
};

export const erectionCommissioningData = {
  title: "Erection & Commissioning",
  description: "Professional installation and commissioning services ensuring your system operates at peak performance",
  cards: [
    {
      icon: HardHat,
      title: "Professional Installation",
      description: "Execution by experienced teams following approved designs, safety norms, and quality standards.",
      items: [
        "Control system setup",
        "Piping and electrical works",
        "Site coordination and supervision",
        "Equipment installation and integration"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Testing & Validation",
      description: "Comprehensive testing to verify that the system performs as designed under real operating conditions.",
      items: [
        "Safety system verification",
        "Quality parameter validation",
        "Performance and load testing",
        "Mechanical and process testing"
      ]
    },
    {
      icon: Shield,
      title: "Safety & Quality Assurance",
      description: "Strict safety practices and quality checks for staff, embedded at every stage of execution.",
      items: [
        "Certified installation teams",
        "Safety protocol compliance",
        "PPE and site safety measures",
        "Quality checks at each milestone"
      ]
    }
  ],
  handoverItems: [
    { icon: MonitorPlay, text: "Operator training sessions" },
    { icon: Headphones, text: "Initial troubleshooting support" },
    { icon: FileText, text: "Documentation and manuals" },
    { icon: Settings, text: "System walkthroughs" }
  ]
};

export const operationMaintenanceData = {
  title: "Operation & Maintenance",
  description: "Comprehensive support services to keep your systems running efficiently for years to come",
  cards: [
    {
      icon: CalendarCheck,
      title: "Preventive & Breakdown Maintenance",
      description: "Planned maintenance programs to minimize downtime and extend system life.",
      items: [
        "Equipment performance checks",
        "Breakdown handling and repairs",
        "Preventive maintenance schedules",
        "Spares and consumables management"
      ]
    },
    {
      icon: Activity,
      title: "Monitoring & Compliance",
      description: "Ensuring systems operate within statutory and environmental norms.",
      items: [
        "Compliance documentation",
        "Safety and performance audits",
        "Sludge handling as per regulations",
        "Water testing (NABL-accredited labs)"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Plant Operations",
      description: "End-to-end operation of water and wastewater treatment plants by trained technical personnel.",
      items: [
        "STP, ETP, WTP & RO",
        "Daily operational reporting",
        "Process monitoring and control",
        "swimming pools, and water bodies"
      ]
    }
  ],
  benefits: [
    {
      icon: TrendingUp,
      title: "Optimized Performance",
      description: "Regular tuning ensures systems run at peak efficiency, reducing energy consumption and operational costs."
    },
    {
      icon: Clock,
      title: "Extended Equipment Life",
      description: "Proactive maintenance prevents premature wear and tear, protecting your investment for the long term."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "We handle all environmental norms, audits, and documentation, keeping you fully compliant."
    },
    {
      icon: RefreshCw,
      title: "Priority Support",
      description: "Quick response times and dedicated technical support for any operational issues or breakdowns."
    }
  ]
};
