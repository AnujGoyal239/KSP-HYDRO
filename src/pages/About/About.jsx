import {
  HeroSection,
  WhoWeAreSection,
  JourneySection,
  QuoteSection,
  CultureValuesSection,
  QualityComplianceSection,
  ClientsSection,
  PartnersSection,
  TestimonialsSection,
  OurOfficeSection,
  CTASection,
} from './components';

import { ContactCTA } from '@/components';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Main SVG Background */}
      <div className="relative">
        {/* Main SVG Background Shape - Desktop */}
        <div className="absolute top-0 left-0 z-0 hidden w-full overflow-hidden pointer-events-none md:block">
          <svg
            className="w-full"
            height="671"
            viewBox="0 0 1340 671"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M386.29 568.702C163.314 478.134 27.19 599.164 -13 671L-9.86831 99.4956C71.5556 10.8375 189.695 29.2859 244.5 37.4697C299.305 45.6535 382.868 15.8235 386 -6H1338H1353.67C1356.94 149.139 1353.46 207.318 1350.85 216.797C1334.57 294.271 1249.07 373.654 1208.36 403.661C1146.77 443.671 997.909 511.415 895.189 462.312C792.47 413.209 719.815 460.039 696.327 489.592C598.619 631.445 448.924 601.437 386.29 568.702Z"
              fill="#EFFAFE"
            />
          </svg>
        </div>

        {/* Main SVG Background Shape - Mobile */}
        <div className="absolute top-0 left-0 z-0 w-full overflow-hidden pointer-events-none md:hidden">
          <svg
            width="100%"
            height="427"
            viewBox="0 0 375 427"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M-0.411744 425.838L-0.500488 426.02V66.0201C25.748 33.2439 41.6106 41.3813 59.2779 44.4068C76.9451 47.4323 96.1267 33.8176 97.1363 25.7496C101.578 3.96599 111.438 -1.4799 115.813 -1.4799H375.5C377.923 85.251 376.009 284.818 375 289.02C369.75 317.661 358.124 332.927 345 344.02C331.875 355.114 302.885 367.523 269.771 349.37C236.658 331.217 213.236 348.529 205.664 359.455C174.166 411.897 125.909 400.803 105.718 388.701C34.0015 355.296 12.5533 399.262 -0.411744 425.838Z" fill="#EFFAFE"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      
      <WhoWeAreSection />
      
      {/* Journey Section with Background */}
      <div className="relative">
        <JourneySection />
      </div>
      
      <QuoteSection />
      
      {/* Culture & Values + Quality & Compliance Section with Blue Vector Background */}
      <div className="relative">
        {/* SVG Background Shape - Desktop */}
        <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none hidden md:block">
          <svg
            className="w-full"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1340 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M387.29 918.092C164.314 814.147 28.19 953.054 -12 1035.5L-8.86831 379.579C72.5556 277.825 188.428 271.563 243.233 280.956C298.037 290.349 357.539 248.081 360.671 223.034C360.671 59.0002 683.757 112.5 697.327 112.5C890.451 119 1291.73 105.6 1351.85 0V514.207C1335.57 603.124 1250.07 694.233 1209.36 728.673C1147.77 774.593 998.909 852.343 896.189 795.987C793.47 739.631 720.815 793.378 697.327 827.296C599.619 990.102 449.924 955.663 387.29 918.092Z"
              fill="#EFFAFE"
            />
          </svg>
        </div>

        {/* Mobile SVG Background Shape */}
        <div className="absolute top-0 left-0 z-0 w-full overflow-hidden pointer-events-none md:hidden">
          <svg
            width="100%"
            height="503"
            viewBox="0 0 374 503"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M132.331 445.968C58.4331 395.476 13.3196 462.951 0 503V185C26.9851 135.573 66.4248 131.913 84.5878 136.476C102.751 141.038 122.471 120.507 123.509 108.34C123.509 28.6596 230.584 54.6477 235.082 54.6477C299.086 57.805 356.075 51.2958 376 0V250.5C370.603 293.692 367.493 331.271 354 348C333.588 370.306 316.543 380.375 282.5 353C248.457 325.625 242.866 385.388 235.082 401.864C202.699 480.948 153.088 464.218 132.331 445.968Z" fill="#EFFAFE" />
          </svg>
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
          <CultureValuesSection />
          <QualityComplianceSection />
        </div>
      </div>
      
      <OurOfficeSection />
      
      {/* Clients & Partners Section with Green Vector Background (Desktop Only) */}
      <div className="relative">
        {/* Green SVG Background - Desktop Only */}
        <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none hidden md:block">
          <svg
            className="w-full transform scale-x-[-1]"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M390.44 918.092C167.464 814.147 31.34 953.054 -8.84998 1035.5L-5.71829 379.579C75.7056 277.825 191.578 271.563 246.383 280.956C301.187 290.349 360.689 248.081 363.821 223.034C363.821 59.0002 686.907 112.5 700.477 112.5C893.602 119 1294.88 105.6 1355 0V514.207C1338.72 603.124 1253.22 694.233 1212.51 728.673C1150.92 774.593 1002.06 852.343 899.339 795.987C796.62 739.631 723.965 793.378 700.477 827.296C602.769 990.102 453.074 955.663 390.44 918.092Z"
              fill="#EFFEEF"
            />
          </svg>
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
          <ClientsSection />
          <PartnersSection />
        </div>
      </div>
      
      <TestimonialsSection />
      <CTASection />
      <ContactCTA />
    </div>
  );
};

export default About;
