
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
};

const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce businesses with sales analytics, inventory management, and customer insights.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A minimalist application for organizing tasks with drag-and-drop functionality, reminders, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&w=600&h=400",
    tags: ["React", "Redux", "Firebase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "Weather Forecast PWA",
    description: "A progressive web app that provides real-time weather forecasts with interactive maps and location-based alerts.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=600&h=400",
    tags: ["JavaScript", "Weather API", "PWA"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 4,
    title: "Developer Portfolio",
    description: "A responsive portfolio website template for developers to showcase their projects and skills.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&h=400",
    tags: ["HTML", "SCSS", "JavaScript"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  }
];

interface ProjectsProps {
  showViewAllButton?: boolean;
}

const Projects = ({ showViewAllButton = true }: ProjectsProps) => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  return (
    <section id="projects" className="py-20 bg-theme-lightBlue bg-opacity-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {showViewAllButton && (
          <div className="mb-12 max-w-md">
            <div className="inline-block mb-2 border-b-2 border-theme-skyBlue">
              <span className="text-xs font-medium uppercase tracking-wider">Projects</span>
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-skyBlue to-theme-brightBlue">Selected Work</h2>
          </div>
        )}
        
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            className={`px-3 py-1 text-sm transition-colors ${!filter ? 'bg-theme-skyBlue text-white' : 'bg-white text-black border border-gray-200 hover:border-theme-skyBlue'}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1 text-sm transition-colors ${filter === tag ? 'bg-theme-skyBlue text-white' : 'bg-white text-black border border-gray-200 hover:border-theme-skyBlue'}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-theme-lightBlue/30">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-theme-skyBlue bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 hover:bg-gray-100 transition-colors"
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
                      className="bg-white p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Live preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1 text-theme-skyBlue">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-theme-lightBlue/30 border border-theme-lightBlue/50"
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
          <div className="mt-12 text-center">
            <Link to="/projects">
              <button className="border border-theme-skyBlue text-theme-skyBlue hover:bg-theme-skyBlue hover:text-white transition-colors px-6 py-2 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                View All Projects
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
