import { portfolioData } from '../data/portfolio';
import { Award, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  const { achievements, certifications } = portfolioData;

  return (
    <section id="achievements" className="section-container bg-gray-50/50">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Achievements Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
            <Award className="text-accent" size={28} />
            Achievements
          </h2>
          <div className="space-y-6">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1 hover:border-blue-200 hover:bg-gradient-to-r hover:from-white hover:to-blue-50/50 transition-all duration-300 group">
                <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
            <CheckCircle2 className="text-accent" size={28} />
            Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex gap-4 items-start border-b border-gray-100 pb-4 last:border-0 group hover:bg-white p-3 rounded-lg hover:shadow-sm transition-all duration-300 -mx-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">{cert.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{cert.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Achievements;
