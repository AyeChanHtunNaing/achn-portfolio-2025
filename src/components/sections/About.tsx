
import { FileText, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className={`mb-12 max-w-2xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-accent-soft inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
            Info
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">About Me</h2>
          <p className="mt-3 text-slate-600">
            Software engineer with strong backend foundations, practical product delivery experience, and a focus on maintainable systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-panel-strong rounded-2xl p-4 sm:p-5">
              <div className="relative overflow-hidden rounded-xl bg-slate-100">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold text-slate-900">Aye Chan Htun Naing</h3>
                <p className="mt-1 text-sm text-slate-600">Software Engineer</p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="glass-accent-soft inline-flex items-center justify-center rounded-xl p-3 transition hover:text-slate-900">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="glass-accent-soft inline-flex items-center justify-center rounded-xl p-3 transition hover:text-slate-900">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="glass-accent-soft inline-flex items-center justify-center rounded-xl p-3 transition hover:text-slate-900">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`min-w-0 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-panel-strong rounded-2xl p-5 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Building dependable software with product focus and clear communication
              </h3>
              <p className="mt-4 text-slate-600 leading-7">
                I am a software engineer with over 5 years of project-based experience and a B.Sc. (Hons) in Computing from the University of Greenwich. I focus on building reliable applications, communicating clearly with teams, and solving real business problems with maintainable code.
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="glass-panel rounded-xl p-4">
                  <span className="text-xs text-slate-500 uppercase tracking-[0.1em] block mb-1">Name</span>
                  <p className="font-medium text-slate-900">Aye Chan Htun Naing</p>
                </div>
                <div className="glass-panel rounded-xl p-4">
                  <span className="text-xs text-slate-500 uppercase tracking-[0.1em] block mb-1">Email</span>
                  <p className="break-all font-medium text-slate-900">achn@peacechan.dev</p>
                </div>
                <div className="glass-panel rounded-xl p-4">
                  <span className="text-xs text-slate-500 uppercase tracking-[0.1em] block mb-1">Location</span>
                  <p className="font-medium text-slate-900">Remote</p>
                </div>
                <div className="glass-panel rounded-xl p-4">
                  <span className="text-xs text-slate-500 uppercase tracking-[0.1em] block mb-1">Experience</span>
                  <p className="font-medium text-slate-900">5+ years</p>
                </div>
                <div className="glass-panel rounded-xl p-4">
                  <span className="text-xs text-slate-500 uppercase tracking-[0.1em] block mb-1">Education</span>
                  <p className="font-medium text-slate-900">B.Sc (Hons) Computing</p>
                </div>
                <div className="glass-panel rounded-xl p-4">
                  <span className="text-xs text-slate-500 uppercase tracking-[0.1em] block mb-1">Availability</span>
                  <p className="font-medium text-slate-900">Open to freelance / full-time</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://flowcv.com/resume/8gtnjbl6b4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="glass-accent inline-flex h-11 items-center gap-2 rounded-xl px-5 text-slate-900 hover:brightness-[1.02]">
                    <FileText className="w-4 h-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
