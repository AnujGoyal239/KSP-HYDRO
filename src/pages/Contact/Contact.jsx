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

      {/* Careers Section with Green Background Vector */}
      <div className="relative overflow-hidden">
        {/* Background Vectors */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Mobile Background Vector */}
          <div className="absolute top-0 left-0 w-full md:hidden">
            <svg
              className="w-full h-auto min-h-[462px] object-cover"
              viewBox="0 0 375 462"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M329.685 445.968C347.5 433.12 366.5 435 375.5 458V142.5C353.359 147.063 341.705 120.507 340.44 108.34C340.44 28.6596 209.912 54.6477 204.429 54.6477C126.407 57.805 24.2887 51.2958 0 0V249.779C6.5791 292.971 17.5 338.5 31.5 358.5C37.1 366.5 82.5895 414.03 124.088 386.655C165.587 359.28 194.94 385.388 204.429 401.864C243.904 480.948 304.381 464.218 329.685 445.968Z"
                fill="#EFFEEF"
              />
            </svg>
          </div>
          {/* Desktop Background Vector - From About KSP Section */}
          <div className="hidden md:block">
            <svg
              className="w-full"
              height="1036"
              preserveAspectRatio="none"
              viewBox="0 0 1341 1036"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M955.71 918.092C1178.69 814.147 1314.81 953.054 1355 1035.5L1351.87 379.579C1270.44 277.825 1154.57 271.563 1099.77 280.956C1044.96 290.349 985.461 248.081 982.329 223.034C982.329 59.0002 659.243 112.5 645.673 112.5C452.549 119 51.27 105.6 -8.84998 0V514.207C7.43481 603.124 92.9299 694.233 133.642 728.673C195.232 774.593 344.091 852.343 446.811 795.987C549.53 739.631 622.185 793.378 645.673 827.296C743.381 990.102 893.076 955.663 955.71 918.092Z"
                fill="#EFFEEF"
              />
            </svg>
          </div>
        </div>

        {/* Careers Heading with Side Lines */}
        <div className="relative z-10 pt-24 pb-8 mb-4 px-6">
          <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 whitespace-nowrap px-4 tracking-wide">Careers</h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
          <WhyJoinSection />
          <ApplicationFormSection />
        </div>
      </div>

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
