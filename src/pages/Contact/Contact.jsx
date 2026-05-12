import { 
  HeroSection, 
  ContactFormSection, 
  WhyJoinSection,
  ApplicationFormSection,
  OfficesSection, 
  MapSection, 
  ResponseGuaranteeSection 
} from './components';
import ContactCTA from '@/components/common/ContactCTA';

const Contact = () => {
  return (
    <div className="bg-white relative">
      {/* Background SVG - Desktop */}
      <div className="absolute top-0 left-0 w-full hidden md:block z-0 pointer-events-none">
        <svg
          width="1340"
          height="737"
          viewBox="0 0 1340 737"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path d="M388.044 630.485C165.21 536.196 29.1722 662.198 -10.9922 736.985L-7.86249 142.001C73.5096 49.7003 189.308 44.0203 244.078 52.5404C298.848 61.0604 358.312 22.7201 361.442 0H1351.99V264.122C1335.72 344.778 1250.28 427.423 1209.59 458.663C1148.04 500.317 999.274 570.844 896.62 519.724C793.966 468.603 721.357 517.357 697.884 548.124C600.238 695.805 450.638 664.565 388.044 630.485Z" fill="#EFFAFE" />
        </svg>
      </div>

      {/* Background SVG - Mobile */}
      <div className="absolute top-0 left-0 w-full md:hidden z-0 pointer-events-none">
        <svg
          width="375"
          height="427"
          viewBox="0 0 375 427"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path d="M-0.411744 425.838L-0.500488 426.02V66.0201C25.748 33.2439 41.6106 41.3813 59.2779 44.4068C76.9451 47.4323 96.1267 33.8176 97.1363 25.7496C101.578 3.96599 111.438 -1.4799 115.813 -1.4799H375.5C377.923 85.251 376.009 284.818 375 289.02C369.75 317.661 358.124 332.927 345 344.02C331.875 355.114 302.885 367.523 269.771 349.37C236.658 331.217 213.236 348.529 205.664 359.455C174.166 411.897 125.909 400.803 105.718 388.701C34.0015 355.296 12.5533 399.262 -0.411744 425.838Z" fill="#EFFAFE" />
        </svg>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ContactFormSection />
      </div>

      {/* Careers Content - Why Join Section with Green Background */}
      <div className="relative overflow-hidden">
        {/* Desktop Background SVG */}
        <div className="absolute inset-0 w-full hidden md:block z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1340 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M949.933 917.85C1169.99 813.932 1304.33 952.802 1344 1035.23L1340.91 379.479C1260.55 277.752 1146.19 271.492 1092.1 280.882C1038.02 290.272 979.295 248.016 976.204 222.976C976.204 58.9846 657.348 112.471 643.955 112.471C453.359 118.969 57.3336 105.572 -1.99939 0V514.071C14.0723 602.965 98.4481 694.05 138.627 728.481C199.411 774.388 346.321 852.118 447.696 795.777C549.071 739.436 620.775 793.169 643.955 827.078C740.384 989.841 888.119 955.411 949.933 917.85Z" fill="#EFFEEF" />
          </svg>
        </div>

        {/* Mobile Background SVG */}
        <div className="absolute inset-0 w-full md:hidden z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 375 461"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M328.685 445.968C346.5 433.12 365.5 435 374.5 458V142.5C352.359 147.063 340.705 120.507 339.44 108.34C339.44 28.6596 208.912 54.6477 203.429 54.6477C125.407 57.805 23.2887 51.2958 -1 0V249.779C5.5791 292.971 16.5 338.5 30.5 358.5C36.1 366.5 81.5895 414.03 123.088 386.655C164.587 359.28 193.94 385.388 203.429 401.864C242.904 480.948 303.381 464.218 328.685 445.968Z" fill="#EFFEEF" />
          </svg>
        </div>

        <div className="relative z-10">
          <WhyJoinSection />
        </div>
      </div>
      
      <ApplicationFormSection />

      {/* Offices and Map Section with Blue Vector Background */}
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
          <OfficesSection />
          <MapSection />
        </div>
      </div>

      <ResponseGuaranteeSection />
      <ContactCTA />
    </div>
  );
};

export default Contact;
