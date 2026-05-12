import React from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import {
  Hero,
  AboutSection,
  SectorsSection,
  ProductsSection,
  ServicesSection,
  WhyChooseUs,
  ClientsSection,
  ProjectsSection,
  ContactCTA,
  StatsSection
} from './components';

const SectionWrapper = ({ children, className = "", delay = 0 }) => {
  const ref = useScrollReveal({ delay });
  return <div ref={ref} className={className}>{children}</div>;
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      <Hero />
      <StatsSection />

      <div className="relative">
        <div className="absolute inset-0 z-0 hidden pointer-events-none mt-52 md:block">
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
        <div className="relative z-10">
          <SectionWrapper>
            <AboutSection />
          </SectionWrapper>
          <SectionWrapper>
            <SectorsSection />
          </SectionWrapper>
        </div>
      </div>

      <div className="relative ">
        {/* Mobile Background SVG */}
        <div className="absolute top-0 left-0 w-full z-0 md:hidden pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 375 462"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto min-h-[462px] object-cover"
          >
            <path
              d="M329.685 445.968C347.5 433.12 366.5 435 375.5 458V142.5C353.359 147.063 341.705 120.507 340.44 108.34C340.44 28.6596 209.912 54.6477 204.429 54.6477C126.407 57.805 24.2887 51.2958 0 0V249.779C6.5791 292.971 17.5 338.5 31.5 358.5C37.1 366.5 82.5895 414.03 124.088 386.655C165.587 359.28 194.94 385.388 204.429 401.864C243.904 480.948 304.381 464.218 329.685 445.968Z"
              fill="#EFFEEF"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <SectionWrapper>
            <ProductsSection />
          </SectionWrapper>
          <SectionWrapper>
            <ProjectsSection />
          </SectionWrapper>
          {/* <SectionWrapper> */}
          <ServicesSection />
          {/* </SectionWrapper> */}
          <WhyChooseUs />
        </div>
      </div>
      <ClientsSection />
      <ContactCTA />
    </div>
  );
};

export default Home;
