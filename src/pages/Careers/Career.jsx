import { HeroSection, CultureSection, WhyWorkWithUsSection, HowToApplySection } from './components';

const Career = () => {
  return (
    <div className="relative min-h-screen pt-32 bg-white overflow-hidden">
      {/* Desktop Background SVG */}
      <div className="absolute top-0 left-0 w-full hidden md:block z-0 pointer-events-none">
        <svg
          className="w-full h-auto"
          width="1340"
          height="737"
          viewBox="0 0 1340 737"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M388.044 630.485C165.21 536.196 29.1722 662.198 -10.9922 736.985L-7.86249 142.001C73.5096 49.7003 189.308 44.0203 244.078 52.5404C298.848 61.0604 358.312 22.7201 361.442 0H1351.99V264.122C1335.72 344.778 1250.28 427.423 1209.59 458.663C1148.04 500.317 999.274 570.844 896.62 519.724C793.966 468.603 721.357 517.357 697.884 548.124C600.238 695.805 450.638 664.565 388.044 630.485Z" fill="#EFFAFE" />
        </svg>
      </div>

      {/* Mobile Background SVG */}
      <div className="absolute top-0 left-0 w-full md:hidden z-0 pointer-events-none">
        <svg
          className="w-full h-auto"
          width="375"
          height="362"
          viewBox="0 0 375 362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M132.331 320.955C58.4331 284.617 13.3196 333.177 0 362V133.141C26.9851 97.5691 66.4248 94.9356 84.5878 98.2192C102.751 101.503 122.471 86.7267 123.509 77.9705C150.5 14.5 230.584 39.329 235.082 39.329C302 64 356.075 36.9166 376 0V180.28C370.603 211.365 373 227 354 245.5C333.588 261.553 310.5 265.5 282.5 254.048C246.095 239.158 242.866 277.357 235.082 289.214C202.699 346.129 153.088 334.09 132.331 320.955Z" fill="#EFFAFE" />
        </svg>
      </div>

      <div className="relative z-10">
        <HeroSection />
      </div>

      <CultureSection />
      
      {/* Why Join Section with Green Background */}
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
          <WhyWorkWithUsSection />
        </div>
      </div>

      <div className="relative">
        {/* Desktop Background SVG */}
        <div className="absolute top-0 left-0 w-full hidden md:block z-0 pointer-events-none">
          <svg
            className="w-full h-auto"
            width="1340"
            height="737"
            viewBox="0 0 1340 737"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M388.044 630.485C165.21 536.196 29.1722 662.198 -10.9922 736.985L-7.86249 142.001C73.5096 49.7003 189.308 44.0203 244.078 52.5404C298.848 61.0604 358.312 22.7201 361.442 0H1351.99V264.122C1335.72 344.778 1250.28 427.423 1209.59 458.663C1148.04 500.317 999.274 570.844 896.62 519.724C793.966 468.603 721.357 517.357 697.884 548.124C600.238 695.805 450.638 664.565 388.044 630.485Z" fill="#EFFAFE" />
          </svg>
        </div>

        {/* Mobile Background SVG */}
        <div className="absolute top-0 left-0 w-full md:hidden z-0 pointer-events-none">
          <svg
            className="w-full h-auto"
            width="375"
            height="362"
            viewBox="0 0 375 362"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M132.331 320.955C58.4331 284.617 13.3196 333.177 0 362V133.141C26.9851 97.5691 66.4248 94.9356 84.5878 98.2192C102.751 101.503 122.471 86.7267 123.509 77.9705C150.5 14.5 230.584 39.329 235.082 39.329C302 64 356.075 36.9166 376 0V180.28C370.603 211.365 373 227 354 245.5C333.588 261.553 310.5 265.5 282.5 254.048C246.095 239.158 242.866 277.357 235.082 289.214C202.699 346.129 153.088 334.09 132.331 320.955Z" fill="#EFFAFE" />
          </svg>
        </div>

        <div className="relative z-10">
          <HowToApplySection />
        </div>
      </div>
    </div>
  );
};

export default Career;
