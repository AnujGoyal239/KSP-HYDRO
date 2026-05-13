
import {
  HeroSection,
  ProductsSection,
  EquipmentsSection,
  ProductsCTASection,
} from './components';
import { ContactCTA } from '@/components';

const Products = () => {


  return (
    <div className="relative bg-white">
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
          <path d="M386.29 568.702C163.314 478.134 27.19 599.164 -13 671L-9.86831 99.4956C71.5556 10.8375 189.695 29.2859 244.5 37.4697C299.305 45.6535 382.868 15.8235 386 -6H1338H1353.67C1356.94 149.139 1353.46 207.318 1350.85 216.797C1334.57 294.271 1249.07 373.654 1208.36 403.661C1146.77 443.671 997.909 511.415 895.189 462.312C792.47 413.209 719.815 460.039 696.327 489.592C598.619 631.445 448.924 601.437 386.29 568.702Z" fill="#EFFAFE"/>
        </svg>
      </div>

      <HeroSection />

      <ProductsSection />

      <EquipmentsSection />

      <ProductsCTASection />
      <ContactCTA />
    </div>
  );
};

export default Products;
