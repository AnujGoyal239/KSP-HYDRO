import React, { lazy, Suspense } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import { LazySection, SectionSkeleton } from '@/components/lazy';
import {
  Hero,
  StatsSection
} from './components';

// Lazy load heavy sections
const AboutSection = lazy(() => import('./components/AboutSection'));
const SectorsSection = lazy(() => import('./components/SectorsSection'));
const ProductsSection = lazy(() => import('./components/ProductsSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const ClientsSection = lazy(() => import('./components/ClientsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ContactCTA = lazy(() => import('@/components/common/ContactCTA'));

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
          <LazySection minHeight={400} fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <SectionWrapper>
                <AboutSection />
              </SectionWrapper>
            </Suspense>
          </LazySection>
          <LazySection minHeight={400} fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <SectionWrapper>
                <SectorsSection />
              </SectionWrapper>
            </Suspense>
          </LazySection>
        </div>
      </div>

      <div className="relative">
        <div className="relative z-10">
          <LazySection minHeight={600} fallback={<SectionSkeleton height="600px" />}>
            <Suspense fallback={<SectionSkeleton height="600px" />}>
              <SectionWrapper>
                <ProductsSection />
              </SectionWrapper>
            </Suspense>
          </LazySection>
          <LazySection minHeight={500} fallback={<SectionSkeleton height="500px" />}>
            <Suspense fallback={<SectionSkeleton height="500px" />}>
              <SectionWrapper>
                <ProjectsSection />
              </SectionWrapper>
            </Suspense>
          </LazySection>
          <LazySection minHeight={400} fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <ServicesSection />
            </Suspense>
          </LazySection>
          <LazySection minHeight={400} fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <WhyChooseUs />
            </Suspense>
          </LazySection>
        </div>
      </div>
      <LazySection minHeight={500} fallback={<SectionSkeleton height="500px" />}>
        <Suspense fallback={<SectionSkeleton height="500px" />}>
          <ClientsSection />
        </Suspense>
      </LazySection>
      <LazySection minHeight={300} fallback={<SectionSkeleton height="300px" />}>
        <Suspense fallback={<SectionSkeleton height="300px" />}>
          <ContactCTA />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Home;
