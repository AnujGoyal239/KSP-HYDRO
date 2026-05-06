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

      {/* Careers Content */}
      <WhyJoinSection />
      <ApplicationFormSection />

      {/* Offices and Map Section with SVG Background */}
      <div className="relative">
        {/* SVG Background - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute inset-0 w-full overflow-hidden pointer-events-none" style={{ height: '1036px' }}>
          <svg
            width="1341"
            height="1036"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="xMidYMid slice"
            style={{ height: '1036px' }}
          >
            <path d="M943.559 918.092C1166.54 814.147 1302.66 953.054 1342.85 1035.5L1339.72 379.579C1258.29 277.825 1142.42 271.563 1087.62 280.956C1032.81 290.349 973.31 248.081 970.179 223.034C970.179 59.0002 647.093 112.5 633.522 112.5C440.398 119 39.1196 105.6 -21.0004 0V514.207C-4.71558 603.124 80.7795 694.233 121.491 728.673C183.081 774.593 331.941 852.343 434.66 795.987C537.38 739.631 610.035 793.378 633.522 827.296C731.231 990.102 880.926 955.663 943.559 918.092Z" fill="#EFFEEF" />
          </svg>
        </div>

        {/* Content */}
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
