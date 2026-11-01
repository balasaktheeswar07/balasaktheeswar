import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-container bg-gray-50/50">
      <h2 className="section-title">Selected Projects</h2>
      
      <div className="space-y-24">
        {projects.map((project, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-10 items-center group/project p-6 md:p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 border border-transparent hover:border-blue-100 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] bg-white rounded-xl border border-border shadow-sm overflow-hidden relative group">
                <img 
                  src={`${import.meta.env.BASE_URL}${project.image.replace(/^\/+/, '')}`}
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 600'%3E%3Crect fill='%23f3f4f6' width='800' height='600'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='24' font-weight='bold' x='400' y='300' text-anchor='middle' dominant-baseline='middle'%3E${project.name.replace(/ /g, '%20')}%3C/text%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='16' x='400' y='340' text-anchor='middle' dominant-baseline='middle'%3EImage Placeholder%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-5">
              <div>
                <p className="text-accent text-sm font-bold tracking-wider mb-2">{project.year}</p>
                <h3 className="text-2xl font-bold text-primary">{project.name}</h3>
              </div>
              
              <p className="text-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="text-xs font-mono px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
