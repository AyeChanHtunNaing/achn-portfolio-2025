
import { useEffect, useState } from 'react';
import { projectsData } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectsProps {
  showViewAllButton?: boolean;
}

const Projects = ({ showViewAllButton = true }: ProjectsProps) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {showViewAllButton && (
          <div className={`mb-10 max-w-2xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className="glass-accent-soft mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
              Projects
            </div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Selected work</h2>
            <p className="mt-3 text-slate-600">
              A curated set of software engineering projects across frontend interfaces, backend systems, and full-stack implementation.
            </p>
          </div>
        )}
        
        <div className={`mb-10 flex flex-wrap gap-2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: '120ms' }}>
          <button
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              !filter
                ? 'glass-accent text-slate-900'
                : 'glass-accent-soft text-slate-700 hover:text-slate-900'
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                filter === tag
                  ? 'glass-accent text-slate-900'
                  : 'glass-accent-soft text-slate-700 hover:text-slate-900'
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-panel group overflow-hidden rounded-2xl transition-all duration-700 will-change-transform hover:-translate-y-1 hover:shadow-lg ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${180 + index * 90}ms` }}
            >
              <div className="relative h-56 overflow-hidden border-b border-white/70">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-900/0 opacity-0 transition-all duration-300 group-hover:bg-slate-900/35 group-hover:opacity-100">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/80 p-2.5 text-slate-700 shadow-sm backdrop-blur-md transition hover:bg-white"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/80 p-2.5 text-slate-700 shadow-sm backdrop-blur-md transition hover:bg-white"
                      aria-label="Live preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mb-4 text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="glass-accent-soft rounded-full px-2.5 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showViewAllButton && (
          <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: '420ms' }}>
            <Link to="/projects">
              <button className="glass-accent inline-flex items-center rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-[1.02]">
                View All Engineering Projects
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
