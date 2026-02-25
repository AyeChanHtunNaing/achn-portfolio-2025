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
      if (rect.top <= window.innerHeight * 0.85) setIsVisible(true);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allTags = Array.from(new Set(projectsData.flatMap((project) => project.tags)));
  const filteredProjects = filter
    ? projectsData.filter((project) => project.tags.includes(filter))
    : projectsData;

  return (
    <section id="projects" className="section-container">
      {showViewAllButton && (
        <div className="section-heading-row">
          <span className="section-eyebrow">03. Projects</span>
          <div className="section-rule" />
        </div>
      )}

      {showViewAllButton && (
        <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-400">
          A selection of projects spanning dashboard interfaces, backend-focused systems, and full-stack product work.
        </p>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
            !filter
              ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200'
              : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-slate-100'
          }`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              filter === tag
                ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200'
                : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-slate-100'
            }`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className={`list-hover-card group grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            } transition-all duration-500`}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/50">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] h-full w-full object-cover opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                <div className="flex items-center gap-2 text-slate-400">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="rounded-md p-1.5 transition hover:text-emerald-200">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live preview" className="rounded-md p-1.5 transition hover:text-emerald-200">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-emerald-200/90">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {showViewAllButton && (
        <div className="mt-8">
          <Link to="/projects" className="ghost-button">
            View all projects
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
