import React, { useRef } from 'react';
import { projects } from '@/data/projectsData';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }) => (
  <div className="project-card group relative overflow-hidden rounded-lg aspect-video shadow-md transition-all duration-500 hover:shadow-xl opacity-0">
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-80" />
    <div className="absolute bottom-0 left-0 p-5 w-full transform transition-transform duration-500">
      <h3 className="text-white font-bold text-lg md:text-xl mb-1 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      <div className="flex items-center text-gray-200 text-xs md:text-sm">
        <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-500" />
        {project.location}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const containerRef = useRef(null);
  // Take first 9 projects
  const displayProjects = projects.slice(0, 9);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo('.projects-header', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo('.project-card',
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out" 
      },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Green Background Vector - Mobile */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden md:hidden">
        <svg
          viewBox="0 0 375 461"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M328.685 445.968C346.5 433.12 365.5 435 374.5 458V142.5C352.359 147.063 340.705 120.507 339.44 108.34C339.44 28.6596 208.912 54.6477 203.429 54.6477C125.407 57.805 23.2887 51.2958 -1 0V249.779C5.5791 292.971 16.5 338.5 30.5 358.5C36.1 366.5 81.5895 414.03 123.088 386.655C164.587 359.28 193.94 385.388 203.429 401.864C242.904 480.948 303.381 464.218 328.685 445.968Z"
            fill="#EFFEEF"
          />
        </svg>
      </div>

      {/* Green Background Vector - Desktop */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1341 1036"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M955.71 918.092C1178.69 814.147 1314.81 953.054 1355 1035.5L1351.87 379.579C1270.44 277.825 1154.57 271.563 1099.77 280.956C1044.96 290.349 985.461 248.081 982.329 223.034C982.329 59.0002 659.243 112.5 645.673 112.5C452.549 119 51.27 105.6 -8.84998 0V514.207C7.43481 603.124 92.9299 694.233 133.642 728.673C195.232 774.593 344.091 852.343 446.811 795.987C549.53 739.631 622.185 793.378 645.673 827.296C743.381 990.102 893.076 955.663 955.71 918.092Z"
            fill="#EFFEEF"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 projects-header opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
            Our Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Delivering excellence across industries with cutting-edge water treatment solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
