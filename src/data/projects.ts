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
    title: 'INARI EduBridge',
    description:
      'A comprehensive educational directory and counseling portal built to support Myanmar students aspiring to study in Japan. Includes searchable directory indexes for 780+ Japanese universities, MEXT scholarships, student visa support, and dynamic exam/prep guides.',
    image: '/projects/inari-edubridge.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Search Directory', 'Vite'],
    liveLink: 'https://inari-edubridge.netlify.app',
    githubLink: 'https://github.com/AyeChanHtunNaing/INARI-EduBridge',
  },
  {
    id: 2,
    title: 'AI-Proctored Exam System',
    description:
      'An intelligent, automated exam monitoring platform designed to maintain academic integrity during online tests. Leverages advanced computer vision and deep learning to perform real-time identity verification, head-pose tracking, microphone sound monitoring, and browser lockdown.',
    image: '/projects/ai-proctored-system.png',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI', 'React'],
    liveLink: 'https://ai-proctored-system.streamlit.app',
    githubLink: 'https://github.com/AyeChanHtunNaing/ai-proctored-system',
  },
];
