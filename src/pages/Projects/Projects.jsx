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
      <section className="pt-52 pb-20 px-6 relative overflow-hidden bg-sky-50/30">
        <div className="max-w-7xl mx-auto text-center hero-content">
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
