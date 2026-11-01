import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-border bg-white py-12 text-center">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
        <h2 className="font-bold tracking-wider text-primary">{personal.name.toUpperCase()}</h2>
        <p className="text-sm text-secondary">{personal.headline}</p>
        
        <div className="flex items-center justify-center gap-6 text-sm font-medium text-gray-500">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <span>·</span>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <span>·</span>
          <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors">Email</a>
        </div>
        
        <p className="text-xs text-gray-400 pt-6">
          © {new Date().getFullYear()} {personal.name}. Built by me.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
