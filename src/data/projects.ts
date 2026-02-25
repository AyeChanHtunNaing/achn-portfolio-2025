export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive admin dashboard for e-commerce businesses with sales analytics, inventory management, and customer insights.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A minimalist application for organizing tasks with drag-and-drop functionality, reminders, and team collaboration features.',
    image:
      'https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'Redux', 'Firebase'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 3,
    title: 'Weather Forecast PWA',
    description:
      'A progressive web app that provides real-time weather forecasts with interactive maps and location-based alerts.',
    image:
      'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=600&h=400',
    tags: ['JavaScript', 'Weather API', 'PWA'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 4,
    title: 'Developer Portfolio',
    description:
      'A responsive portfolio website template for developers to showcase their projects and skills.',
    image:
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&h=400',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
];
