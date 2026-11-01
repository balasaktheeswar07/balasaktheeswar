import { portfolioData } from '../data/portfolio';
import { GraduationCap, Code2, Rocket } from 'lucide-react';

const About = () => {
  const { education, currently } = portfolioData;

  return (
    <section id="about" className="section-container bg-gray-50/50">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-secondary leading-relaxed">
            I'm currently pursuing my B.E. in Computer Science & Engineering at Chennai Institute of Technology. 
            My technical journey is driven by a strong interest in solving complex problems and building efficient software solutions.
          </p>
          <p className="text-secondary leading-relaxed">
            Beyond academic coursework, I actively hone my problem-solving skills, having successfully solved over 300 problems on LeetCode. 
            I enjoy bridging the gap between theoretical computer science and practical application development.
          </p>
          
          <div className="pt-4 space-y-4">
            <h3 className="font-semibold text-primary flex items-center gap-2">
              <Rocket size={18} className="text-accent" /> Currently Exploring
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[...currently.learning, ...currently.exploring].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-primary flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-accent" /> Education
            </h3>
            <div className="space-y-6 border-l-2 border-gray-200 ml-3 pl-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-accent rounded-full"></div>
                  <h4 className="font-medium text-primary">{edu.degree}</h4>
                  <p className="text-sm text-secondary mt-1">{edu.institution}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500 font-medium">
                    <span>{edu.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{edu.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
