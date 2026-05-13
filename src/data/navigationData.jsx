/**
 * Navigation Data Configuration
 * 
 * Centralized navigation structure with section-based routing.
 * Each dropdown item includes a hash for smooth section scrolling.
 * 
 * Structure:
 * - id: Unique identifier
 * - name: Display name in navbar
 * - path: Base route path
 * - dropdown: Array of sub-navigation items with section hashes
 * - sectionId: Corresponding section ID in the page (extracted from hash)
 */
export const navItems = [
  {
    id: 0,
    name: "About",
    path: "/about",
    dropdown: [
      { 
        id: 0, 
        label: "Who we are", 
        path: "/about#who-we-are", 
        sectionId: "who-we-are",
        icon: "about" 
      },
      { 
        id: 1, 
        label: "Our Journey", 
        path: "/about#our-journey", 
        sectionId: "our-journey",
        icon: "journey" 
      },
      { 
        id: 2, 
        label: "Our Values", 
        path: "/about#our-values", 
        sectionId: "our-values",
        icon: "values" 
      },
      { 
        id: 3, 
        label: "Certification", 
        path: "/about#certifications", 
        sectionId: "certifications",
        icon: "certification" 
      },
      { 
        id: 4, 
        label: "Our Clients", 
        path: "/about#our-clients", 
        sectionId: "our-clients",
        icon: "clients" 
      },
      { 
        id: 5, 
        label: "Our Partner", 
        path: "/about#our-partners", 
        sectionId: "our-partners",
        icon: "partner" 
      }
    ]
  },
  {
    id: 1,
    name: "Products",
    path: "/products",
    dropdown: [
      { 
        id: 0, 
        label: "Swimming Pool", 
        path: "/products#swimming-pool-systems", 
        sectionId: "swimming-pool-systems",
        icon: "pool" 
      },
      { 
        id: 1, 
        label: "Water Treatment Plant", 
        path: "/products#water-treatment-plant", 
        sectionId: "water-treatment-plant",
        icon: "water-treatment" 
      },
      { 
        id: 2, 
        label: "Sewage Treatment", 
        path: "/products#sewage-treatment-plant", 
        sectionId: "sewage-treatment-plant",
        icon: "sewage" 
      },
      { 
        id: 3, 
        label: "Effluent Treatment", 
        path: "/products#effluent-treatment-plant", 
        sectionId: "effluent-treatment-plant",
        icon: "effluent" 
      },
      { 
        id: 4, 
        label: "Reverse Osmosis", 
        path: "/products#reverse-osmosis-systems", 
        sectionId: "reverse-osmosis-systems",
        icon: "reverse-osmosis" 
      },
      { 
        id: 5, 
        label: "Lake Revival", 
        path: "/products#lake-revival-water-body-aeration", 
        sectionId: "lake-revival-water-body-aeration",
        icon: "lake" 
      },
      { 
        id: 6, 
        label: "Ultra Filtration", 
        path: "/products#ultra-filtration-systems", 
        sectionId: "ultra-filtration-systems",
        icon: "ultra-filtration" 
      },
      { 
        id: 7, 
        label: "Membrane Bio Reactor", 
        path: "/products#membrane-bio-reactor", 
        sectionId: "membrane-bio-reactor",
        icon: "membrane-reactor" 
      },
      { 
        id: 9, 
        label: "Bio (B-HD-R)", 
        path: "/products#bio-activated-hd-reactor", 
        sectionId: "bio-activated-hd-reactor",
        icon: "bio" 
      },
      { 
        id: 10, 
        label: "Sequencing (SBR)", 
        path: "/products#sequencing-batch-reactor", 
        sectionId: "sequencing-batch-reactor",
        icon: "sequencing" 
      }
    ]
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects",
    dropdown: [
      { 
        id: 0, 
        label: "AIPL Joy Square", 
        path: "/projects#aipl-joy-square", 
        sectionId: "aipl-joy-square",
        icon: "project" 
      },
      { 
        id: 1, 
        label: "Avery Dennison", 
        path: "/projects#avery-dennison", 
        sectionId: "avery-dennison",
        icon: "project" 
      },
      { 
        id: 2, 
        label: "Ernst & Young (E&Y)", 
        path: "/projects#ernst-young", 
        sectionId: "ernst-young",
        icon: "project" 
      },
      { 
        id: 3, 
        label: "Sify Data Centre", 
        path: "/projects#sify-data-centre", 
        sectionId: "sify-data-centre",
        icon: "project" 
      },
      { 
        id: 4, 
        label: "IIM", 
        path: "/projects#iim", 
        sectionId: "iim",
        icon: "project" 
      },
      { 
        id: 5, 
        label: "BIMBO Group", 
        path: "/projects#bimbo-group", 
        sectionId: "bimbo-group",
        icon: "project" 
      },
      { 
        id: 6, 
        label: "RUIDP Hospitals", 
        path: "/projects#ruidp-hospitals", 
        sectionId: "ruidp-hospitals",
        icon: "project" 
      },
      { 
        id: 7, 
        label: "Tata Realty Eureka", 
        path: "/projects#tata-realty-eureka", 
        sectionId: "tata-realty-eureka",
        icon: "project" 
      },
      { 
        id: 8, 
        label: "Thapar House", 
        path: "/projects#thapar-house", 
        sectionId: "thapar-house",
        icon: "project" 
      }
    ]
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
    dropdown: [
      { 
        id: 0, 
        label: "Design Engineering & Consultancy", 
        path: "/services#design-engineering", 
        sectionId: "design-engineering",
        icon: "service" 
      },
      { 
        id: 1, 
        label: "Erection & Commissioning", 
        path: "/services#erection-commissioning", 
        sectionId: "erection-commissioning",
        icon: "service" 
      },
      { 
        id: 2, 
        label: "Operation & Maintenance", 
        path: "/services#operation-maintenance", 
        sectionId: "operation-maintenance",
        icon: "service" 
      },
      { 
        id: 3, 
        label: "Why Choose KSP", 
        path: "/services#why-choose-ksp", 
        sectionId: "why-choose-ksp",
        icon: "service" 
      }
    ]
  },
  {
    id: 4,
    name: "Knowledge Centre",
    path: "/knowledge-center"
  }
];

/**
 * Helper function to extract section IDs from navigation data
 * Used for active section tracking
 * 
 * @param {string} pagePath - The page path (e.g., "/about")
 * @returns {Array<string>} Array of section IDs for that page
 */
export const getSectionIds = (pagePath) => {
  const navItem = navItems.find(item => item.path === pagePath);
  if (navItem && navItem.dropdown) {
    return navItem.dropdown.map(item => item.sectionId);
  }
  return [];
};
