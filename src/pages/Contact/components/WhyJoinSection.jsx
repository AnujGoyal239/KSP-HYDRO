import { whyJoinData } from '@/data/contactData';

const WhyJoinSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">{whyJoinData.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {whyJoinData.benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="p-10 bg-white rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start transition-transform hover:translate-y-[-2px] duration-300"
              >
                <div className={`w-11 h-11 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-5 h-5 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed max-w-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
