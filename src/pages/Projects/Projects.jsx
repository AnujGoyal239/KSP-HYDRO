import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { projects, stats, projectsHeroData, projectsListHeader } from '@/data/projectsData';
import { ArrowRight, MapPin, Activity, Droplets } from 'lucide-react';
import ContactCTA from '@/components/common/ContactCTA';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl flex flex-col h-full">
      {/* Image Section with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
        <div className="absolute bottom-5 left-6 text-white">
          <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
          <div className="flex items-center gap-1 mt-1 text-gray-200 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}
          </div>
        </div>
      </div>

      {/* Info Section - Two distinct bars */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        {/* Technology Bar */}
        <div className="px-5 py-3.5 bg-[#F0F9FF] rounded-xl flex flex-col gap-1 border border-blue-50">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Technology</span>
          </div>
          <p className="text-[#0F172A] font-bold text-[13px]">
            {project.technology}
          </p>
        </div>

        {/* Capacity Bar */}
        <div className="px-5 py-3.5 bg-[#F0FDF4] rounded-xl flex flex-col gap-1 border border-green-50">
          <div className="flex items-center gap-2">
            <Droplets className="w-3.5 h-3.5 text-green-500" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Capacity</span>
          </div>
          <p className="text-[#0F172A] font-bold text-[13px]">
            {project.capacity}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-card",
        start: "top 90%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-52 pb-20 px-6 relative overflow-hidden bg-white">
        {/* Background SVG - Desktop only */}
        <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none hidden md:block">
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

        <div className="max-w-7xl mx-auto text-center hero-content relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0F172A] mb-8 leading-tight">
            {projectsHeroData.title}
          </h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg md:text-xl mb-16 leading-relaxed font-medium">
            {projectsHeroData.description}
          </p>

          {/* Stats Grid - Matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="stat-card relative bg-white/50 backdrop-blur-sm border border-blue-200 rounded-xl px-4 py-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400 hover:bg-white/70 shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List Header */}
      <section className="pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">{projectsListHeader.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {projectsListHeader.description}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-12">
            {projects.map((project, index) => {
              const isLastAndOdd = index === projects.length - 1 && projects.length % 2 !== 0;
              return (
                <div 
                  key={project.id} 
                  className={`project-card ${isLastAndOdd ? 'md:col-span-2 flex justify-center' : ''}`}
                >
                  <div className={isLastAndOdd ? 'w-full md:max-w-[calc(50%-1.5rem)]' : 'w-full'}>
                    <ProjectCard project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default Projects;
