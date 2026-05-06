import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HeroSection,
  HowWeWorkSection,
  DesignEngineeringSection,
  ErectionCommissioningSection,
  OperationMaintenanceSection,
  // SparesConsumablesSection,
  ServiceProcessSection,
  WhyChooseUsSection,
  ServicesCTASection,
} from './components';
import { ContactCTA } from '@/components';

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main className="relative bg-white">
      {/* Background SVG - Desktop only */}
      <div className="absolute top-0 left-0 right-0 z-0 hidden pointer-events-none md:block">
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

      <div className="relative z-10">
        <HeroSection />
      </div>

      <HowWeWorkSection />

      {/* Design & Erection Sections with SVG Background */}
      <div className="relative">
        {/* SVG Background Shape */}
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
          <DesignEngineeringSection />
        </div>
      </div>

      {/* Erection & Commissioning Section with SVG Background */}
      <div className="relative mt-20">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-5 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none hidden md:block">
          <svg
            className="w-full"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M953.559 918.092C1176.54 814.147 1312.66 953.054 1352.85 1035.5L1349.72 379.579C1268.29 277.825 1152.42 271.563 1097.62 280.956C1042.81 290.349 983.31 248.081 980.179 223.034C980.179 59.0002 657.093 112.5 643.522 112.5C450.398 119 49.1196 105.6 -11.0004 0V514.207C5.28442 603.124 90.7795 694.233 131.491 728.673C193.081 774.593 341.941 852.343 444.66 795.987C547.38 739.631 620.035 793.378 643.522 827.296C741.231 990.102 890.926 955.663 953.559 918.092Z"
              fill="#FEEDE5"
            />
          </svg>
        </div>

        {/* Mobile SVG Background Shape */}
        <div className="absolute top-0 left-0 z-0 w-full overflow-hidden pointer-events-none md:hidden">
          <svg width="100%" height="420" viewBox="0 0 377 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M244.542 372.379C318.511 330.219 363.668 386.56 377 420V154.473C349.989 113.202 310.511 110.146 292.331 113.956C274.15 117.766 254.412 100.622 253.373 90.463C253.373 23.9305 146.194 45.6303 141.692 45.6303C77.6266 48.2666 20.5822 42.8315 0.638428 0V209.165C0.638428 245.905 -5.86783 268.449 22.6596 290.577C42.1783 300.596 51.0971 300.748 94.2283 294.751C124.257 290.577 133.901 321.795 141.692 335.552C174.106 401.586 223.764 387.618 244.542 372.379Z" fill="#FEEDE5" />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <ErectionCommissioningSection />
        </div>
      </div>

      {/* Operation & Maintenance Section with SVG Background */}
      <div className="relative mt-20">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-[-35px] left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none hidden md:block">
          <svg
            className="w-full"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M388.29 918.092C165.314 814.147 29.19 953.054 -11 1035.5L-7.86831 379.579C73.5556 277.825 189.428 271.563 244.233 280.956C299.037 290.349 358.539 248.081 361.671 223.034C361.671 59.0002 684.757 112.5 698.327 112.5C891.451 119 1292.73 105.6 1352.85 0V514.207C1336.57 603.124 1251.07 694.233 1210.36 728.673C1148.77 774.593 999.909 852.343 897.189 795.987C794.47 739.631 721.815 793.378 698.327 827.296C600.619 990.102 450.924 955.663 388.29 918.092Z"
              fill="#E5F6EC"
            />
          </svg>
        </div>

        {/* Mobile SVG Background Shape */}
        <div className="absolute top-0 left-0 z-0 w-full overflow-hidden pointer-events-none md:hidden">
          <svg width="100%" height="375" viewBox="0 0 377 375" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M132.458 332.481C58.4893 294.838 13.3324 345.142 0 375V137.922C27.011 101.073 66.4887 98.3449 84.6692 101.746C102.85 105.148 122.588 89.8412 123.627 80.7705C123.627 21.3665 230.806 40.7413 235.308 40.7413C299.373 43.0952 356.418 38.2424 376.362 0V186.754C376.362 219.558 382.868 239.687 354.34 259.443C334.822 268.39 325.903 268.525 282.772 263.171C252.743 259.443 243.099 287.317 235.308 299.6C202.894 358.559 153.236 346.087 132.458 332.481Z" fill="#E5F6EC" />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <OperationMaintenanceSection />
        </div>
      </div>

      {/* Spares & Consumables Section 
      <div className="relative mt-20">
        <SparesConsumablesSection />
      </div>
      */}

      {/* Why Choose Us Section with SVG Background */}
      <div className="relative">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none hidden md:block">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M953.559 918.092C1176.54 814.147 1312.66 953.054 1352.85 1035.5L1349.72 379.579C1268.29 277.825 1152.42 271.563 1097.62 280.956C1042.81 290.349 983.31 248.081 980.179 223.034C980.179 59.0002 657.093 112.5 643.522 112.5C450.398 119 49.1196 105.6 -11.0004 0V514.207C5.28442 603.124 90.7795 694.233 131.491 728.673C193.081 774.593 341.941 852.343 444.66 795.987C547.38 739.631 620.035 793.378 643.522 827.296C741.231 990.102 890.926 955.663 953.559 918.092Z"
              fill="#E8EFFF"
            />
          </svg>
        </div>

        {/* Mobile SVG Background Shape */}
        <div className="absolute top-0 left-0 z-0 w-full overflow-hidden pointer-events-none md:hidden">
          <svg width="100%" height="503" viewBox="0 0 377 503" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M244.307 445.968C318.205 395.476 363.318 462.951 376.638 503V185C349.653 135.573 310.213 131.913 292.05 136.476C273.887 141.038 254.167 120.507 253.129 108.34C253.129 28.6596 146.054 54.6477 141.556 54.6477C77.5519 57.805 20.5623 51.2958 0.637695 0V250.5C0.637695 294.5 -5.8623 321.5 22.6377 348C42.1377 360 51.0479 360.182 94.1377 353C124.138 348 133.772 385.388 141.556 401.864C173.938 480.948 223.549 464.218 244.307 445.968Z" fill="#E8EFFF" />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <WhyChooseUsSection />
        </div>
      </div>

      <ServiceProcessSection />

      <ServicesCTASection />
      <ContactCTA />
    </main>
  );
};

export default Services;
