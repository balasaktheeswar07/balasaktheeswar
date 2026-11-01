import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col items-start space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-accent text-xs font-semibold tracking-wide uppercase border border-blue-100">
            {personal.headline}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            Hi, I'm {personal.name.split(' ')[0]}.
          </h1>
          
          <p className="text-lg text-secondary leading-relaxed max-w-lg">
            {personal.introduction}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Connect With Me
            </a>
          </div>

          <div className="flex items-center gap-5 pt-6 text-secondary">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-80 md:w-80 md:h-[400px]">
            <div className="absolute inset-0 bg-gray-100 rounded-2xl -rotate-6 transform transition-transform hover:rotate-0 duration-300 shadow-sm border border-border z-0"></div>
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt={personal.name} 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-sm border border-border z-10 transition-transform hover:-translate-y-1 hover:translate-x-1 duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='12' x='50' y='50' text-anchor='middle' dominant-baseline='middle'%3EPhoto Placeholder%3C/text%3E%3C/svg%3E";
              }}
            />
            {/* Replace /profile.jpg with your actual casual professional photo. */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
