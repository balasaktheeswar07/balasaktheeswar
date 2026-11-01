import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section-container">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h2>
        
        <p className="text-lg text-secondary leading-relaxed">
          I'm always interested in learning, building, and connecting with people working on interesting technical projects or offering internship opportunities.
        </p>

        <div className="flex justify-center gap-6 pt-4">
          <a 
            href={`mailto:${personal.email}`}
            className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors text-secondary hover:text-primary group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors text-accent">
              <Mail size={24} />
            </div>
            <span className="font-medium">Email Me</span>
          </a>

          <a 
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors text-secondary hover:text-primary group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors text-accent">
              <Linkedin size={24} />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a 
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors text-secondary hover:text-primary group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors text-accent">
              <Github size={24} />
            </div>
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
