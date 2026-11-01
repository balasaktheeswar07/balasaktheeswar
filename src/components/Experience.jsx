import { portfolioData } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className="max-w-3xl space-y-12 border-l-2 border-gray-100 ml-3 pl-8">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[43px] top-1 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-secondary group-hover:text-accent group-hover:border-accent transition-colors">
              <Briefcase size={18} />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
              <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">{exp.duration}</span>
            </div>
            
            <div className="text-accent font-medium mb-4">{exp.company} <span className="text-gray-400 font-normal">· {exp.location}</span></div>
            
            <p className="text-secondary leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
