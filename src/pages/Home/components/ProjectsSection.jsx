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
    )
    .fromTo('.view-all-btn',
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.2"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Background Decorative Element - Matching reference image style */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-60"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100C300 50 600 200 900 150C1200 100 1440 250 1440 250V800H0V100Z"
            fill="#F0FDF4"
          />
          <path
            d="M0 150C400 100 800 250 1200 180C1350 150 1440 200 1440 200V800H0V150Z"
            fill="#E1F9E9"
            fillOpacity="0.5"
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

        <div className="mt-16 text-center view-all-btn opacity-0">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#0F172A] text-white font-bold rounded-full transition-all duration-300 hover:bg-[#1E293B] hover:shadow-xl hover:-translate-y-1 group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
