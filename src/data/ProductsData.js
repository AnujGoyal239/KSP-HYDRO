import {
  Product1, Product2, Product3, Product4, Product5,
  Product6, Product7, Product8, Product9, Product10, Product11
} from "../assets/";

const ProductsData = [
  {
    id: "SPR-001",
    slug: "swimming-pool-lake-revival",
    title: "Swimming Pool & Lake Revival",
    image: Product1,
    homeSubtitle: "Advanced circulation, filtration, and treatment systems",
    subtitle:
      "Advanced circulation, filtration, and treatment systems to maintain clean, safe, and visually appealing water bodies.",
    svg: "left",
    headerIcon: { type: "droplets", bgColor: "#16A34A", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "Integrated water circulation, filtration, aeration, and treatment systems designed for swimming pools, decorative lakes, and water bodies to maintain optimal water quality and hygiene.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Hotels & resorts", "Residential complexes", "Public parks & lakes", "Sports & recreation centers"],
      },
      advantages: {
        title: "Advantages",
        items: ["Improved water clarity", "Reduced chemical dependency", "Energy-efficient operation", "Automated monitoring options"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: [
          "Debris removal & pre-filtration",
          "Sand/media filtration",
          "Chemical balancing & disinfection",
          "Aeration / UV / ozone treatment (optional)",
          "Continuous circulation & monitoring",
        ],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Crystal clear water", "Lower maintenance effort", "Safe for users & environment"],
      },
    },
  },

  {
    id: "WTP-002",
    slug: "water-treatment-plant",
    title: "Water Treatment Plant",
    image: Product2,
    homeSubtitle: "Reliable water treatment systems for safe potable supply",
    subtitle:
      "Reliable water treatment systems designed to deliver safe, potable water for diverse applications.",
    svg: "right",
    headerIcon: { type: "filter", bgColor: "#2563EB", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "Custom-engineered water treatment plants that remove physical, chemical, and biological impurities to produce safe water suitable for industrial, municipal, and institutional use.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Municipal water supply", "Industrial facilities", "Commercial buildings", "Educational & healthcare institutions"],
      },
      advantages: {
        title: "Advantages",
        items: ["Consistent water quality", "Scalable plant design", "Compliance with drinking water standards", "Long-term operational reliability"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: [
          "Raw water intake & screening",
          "Coagulation & sedimentation",
          "Filtration (sand / UF)",
          "Disinfection",
          "Treated water storage & distribution",
        ],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Safe potable water", "Reduced operational risks", "Designed for continuous use"],
      },
    },
  },

  {
    id: "STP-003",
    slug: "sewage-treatment-plant",
    title: "Sewage Treatment Plant (STP)",
    image: Product3,
    homeSubtitle: "Efficient sewage treatment solutions for safe discharge or reuse of treated wastewater",
    subtitle:
      "Efficient sewage treatment solutions for safe discharge or reuse of treated wastewater.",
    svg: "left",
    headerIcon: { type: "recycle", bgColor: "#16A34A", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "STPs designed to treat domestic sewage using proven biological and membrane-based technologies to meet regulatory discharge and reuse standards.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Residential townships", "Hotels & hospitals", "Commercial complexes", "Municipal infrastructure"],
      },
      advantages: {
        title: "Advantages",
        items: ["Compact footprint", "Odour-controlled operation", "Reuse-ready treated water", "Low operating cost"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: [
          "Screening & grit removal",
          "Biological treatment (MBR / MBBR / FMBR)",
          "Secondary clarification / membrane filtration",
          "Disinfection",
          "Sludge handling",
        ],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Compliance with pollution norms", "Water reuse for flushing & landscaping", "Reliable long-term performance"],
      },
    },
  },

  {
    id: "ETP-004",
    slug: "effluent-treatment-plant",
    title: "Effluent Treatment Plant (ETP)",
    image: Product4,
    homeSubtitle: "Industrial effluent treatment systems for complex wastewater streams",
    subtitle:
      "Industrial effluent treatment systems designed to handle complex wastewater streams.",
    svg: "right",
    headerIcon: { type: "flask", bgColor: "#2563EB", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "ETPs engineered to treat industrial wastewater containing chemicals, oils, and high organic loads before discharge or reuse.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Manufacturing units", "Process industries", "Food & packaging plants", "Chemical & pharmaceutical facilities"],
      },
      advantages: {
        title: "Advantages",
        items: ["Customized process design", "Handles variable effluent loads", "Regulatory compliance assured", "Reduced environmental impact"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: [
          "Effluent collection & equalization",
          "Physico-chemical treatment",
          "Biological treatment",
          "Clarification & filtration",
          "Sludge handling & disposal",
        ],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Compliance with discharge norms", "Effective treatment of complex effluents", "Reduced environmental impact", "Stable performance under variable loads"],
      },
    },
  },

  {
    id: "RO-005",
    slug: "industrial-reverse-osmosis",
    title: "Reverse Osmosis (Industrial RO) Systems",
    image: Product5,
    homeSubtitle: "High-efficiency RO systems for producing purified water in industrial applications",
    subtitle:
      "High-efficiency RO systems for producing purified water in industrial applications.",
    svg: "left",
    headerIcon: { type: "layers", bgColor: "#16A34A", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "Membrane-based purification systems that remove dissolved salts, contaminants, and impurities from water.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Process water applications", "Boiler & cooling systems", "Industrial utilities", "Water reuse systems"],
      },
      advantages: {
        title: "Advantages",
        items: ["High recovery rates", "Consistent output quality", "Energy-optimized design", "Low maintenance"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: [
          "Pre-treatment & fine filtration",
          "High-pressure membrane separation",
          "Permeate collection",
          "Reject handling",
          "Monitoring & control",
        ],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["High-purity water output", "Reduced dissolved solids", "Energy-optimized operation"],
      },
    },
  },

  {
    id: "DRO-006",
    slug: "domestic-ro-systems",
    title: "Domestic RO Systems",
    image: Product6,
    homeSubtitle: "Compact RO systems for safe and reliable drinking water",
    subtitle: "Compact RO systems for safe and reliable drinking water.",
    svg: "right",
    headerIcon: { type: "glass-water", bgColor: "#2563EB", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "Domestic-scale RO systems designed to provide safe, potable water for residential and small commercial use.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Homes", "Small offices", "Residential buildings", "Educational & healthcare institutions"],
      },
      advantages: {
        title: "Advantages",
        items: ["Safe drinking water", "Compact design", "Easy maintenance", "Long-term operational reliability"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: ["Sediment & carbon filtration", "RO membrane purification", "Post-treatment polishing", "Safe water storage"],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Safe drinking water", "Compact & user-friendly design", "Low maintenance"],
      },
    },
  },

  {
    id: "UF-007",
    slug: "ultra-filtration-systems",
    title: "Ultra Filtration (UF) Systems",
    image: Product7,
    homeSubtitle: "Membrane filtration systems for removing bacteria, turbidity, and suspended particles",
    subtitle:
      "UF systems using membrane filtration to remove bacteria, turbidity, and suspended particles.",
    svg: "left",
    headerIcon: { type: "sliders", bgColor: "#16A34A", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "UF systems using membrane filtration to remove bacteria, turbidity, and suspended particles.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Pre-treatment for RO", "Drinking water treatment", "Industrial water systems", "Municipal infrastructure"],
      },
      advantages: {
        title: "Advantages",
        items: ["Chemical-free filtration", "High filtration efficiency", "Consistent performance", "Low operating cost"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: ["Pre-screening", "Hollow fiber / membrane filtration", "Backwashing & cleaning", "Treated water collection"],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Removal of bacteria & turbidity", "Chemical-free filtration", "Consistent performance"],
      },
    },
  },

  {
    id: "MBR-008",
    slug: "membrane-bio-reactor",
    title: "Membrane Bio Reactor (MBR)",
    image: Product8,
    homeSubtitle: "Advanced sewage treatment with superior effluent quality and minimal footprint",
    subtitle:
      "Advanced sewage treatment with superior effluent quality and minimal footprint.",
    svg: "right",
    headerIcon: { type: "cpu", bgColor: "#2563EB", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "A combination of biological treatment and membrane filtration producing high-quality treated water suitable for reuse.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Space-constrained sites", "Commercial & institutional buildings", "High-end residential projects"],
      },
      advantages: {
        title: "Advantages",
        items: ["Excellent treated water quality", "Small footprint", "Reduced sludge generation"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: ["Biological degradation", "Submerged membrane filtration", "Treated water recovery", "Sludge management"],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Superior treated water quality", "Suitable for reuse applications", "Very small footprint"],
      },
    },
  },

  {
    id: "MBBR-009",
    slug: "moving-bed-bio-reactor",
    title: "Moving Bed Bio Reactor (MBBR)",
    image: Product9,
    homeSubtitle: "Robust biological treatment for varying wastewater loads",
    subtitle: "Robust biological treatment for varying wastewater loads.",
    svg: "left",
    headerIcon: { type: "refresh", bgColor: "#16A34A", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "Biological treatment using carrier media to support microbial growth for efficient organic matter removal.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Industrial wastewater", "Municipal STPs", "Retrofit projects"],
      },
      advantages: {
        title: "Advantages",
        items: ["Flexible operation", "High treatment efficiency", "Easy expansion"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: ["Screening & equalization", "Bio-media based treatment", "Secondary clarification", "Disinfection"],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Flexible & robust operation", "Handles load fluctuations", "Cost-effective solution"],
      },
    },
  },

  {
    id: "FMBR-010",
    slug: "fluidized-media-bio-reactor",
    title: "Fluidized Media Bio Reactor (FMBR)",
    image: Product10,
    homeSubtitle: "Efficient treatment technology combining compact design with reliable performance",
    subtitle:
      "Efficient treatment technology combining compact design with reliable performance.",
    svg: "right",
    headerIcon: { type: "activity", bgColor: "#2563EB", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "A biological reactor using fluidized media for effective treatment with reduced space requirements.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Industrial facilities", "Municipal wastewater systems"],
      },
      advantages: {
        title: "Advantages",
        items: ["Reduced footprint", "Stable biological performance", "Cost-effective operation"],
      },
      processOverview: {
        title: "Treatment Process",
        steps: ["Pre-treatment & screening", "Fluidized media biological reaction", "Solid-liquid separation", "Treated water discharge"],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Compact system design", "Efficient organic removal", "Reliable long-term operation"],
      },
    },
  },

  {
    id: "SMS-011",
    slug: "specialised-mechanical-systems",
    title: "Specialised & Mechanical Systems",
    image: Product11,
    homeSubtitle: "Supporting systems essential for efficient water and wastewater operations",
    subtitle:
      "Supporting systems essential for efficient water and wastewater operations.",
    svg: "left",
    headerIcon: { type: "settings", bgColor: "#16A34A", iconColor: "#FFFFFF" },
    sections: {
      whatItIs: {
        title: "What It Is",
        description:
          "Essential mechanical and support systems that enable safe, efficient operation of water and wastewater infrastructure.",
      },
      whereItsUsed: {
        title: "Where It's Used",
        items: ["Treatment plants and pumping stations", "Industrial and commercial facilities", "Residential, institutional projects", "Municipal projects"],
      },
      advantages: {
        title: "Advantages",
        items: ["Reliable system integration", "Enhanced operational efficiency", "Designed for long-term use"],
      },
      processOverview: {
        title: "Implementation Process",
        steps: ["System design & integration", "Equipment installation", "Testing & commissioning", "Continuous operation support"],
      },
      keyBenefits: {
        title: "Key Benefits",
        items: ["Seamless system integration", "Improved operational efficiency", "Reliable performance"],
      },
    },
  },
];

export default ProductsData;
