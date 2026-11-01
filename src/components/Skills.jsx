import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Web Development", items: skills.web },
    { title: "Databases", items: skills.databases },
    { title: "Cloud & Tools", items: skills.cloudAndTools },
    { title: "Core CS", items: skills.coreCS },
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 hover:border-blue-200 transition-all duration-300 group">
            <h3 className="font-semibold text-primary mb-4 group-hover:text-accent transition-colors">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, skillIdx) => (
                <span 
                  key={skillIdx} 
                  className="px-3 py-1 bg-gray-50 group-hover:bg-white text-secondary text-sm font-medium rounded-md border border-gray-200 group-hover:border-blue-100 group-hover:text-blue-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
