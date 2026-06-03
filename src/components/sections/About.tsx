import { useEffect, useState } from 'react';
import { FileText, Github, Instagram, Linkedin } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
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

  return (
    <section id="about" className="section-container">
      <div
        className={`section-heading-row transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <span className="section-eyebrow">01. About</span>
        <div className="section-rule" />
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div
          className={`space-y-5 text-slate-400 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          <p className="leading-7">
            I am a software engineer with over 5 years of experience building production-grade backend systems, enterprise platforms, and financial software. My professional background includes shipping robust systems for insurance billing , warranty management, and offshore securities automation projects—with a strict focus on system reliability, maintainable code, and comprehensive testing.
          </p>
          <p className="leading-7">
            Academically, I hold a <b>B.Sc (Hons) in Computing</b> from the University of Greenwich and an NCC Level 5 Diploma in Computing, which laid a solid foundation in enterprise web engineering, agile architectures, network security, and dynamic system design.
          </p>
          <p className="leading-7">
            Driven by a passion for scalable automation and artificial intelligence, I am currently deep-diving into <b>Machine Learning</b> and <b>DevOps</b> methodologies. I am actively bridging the gap between intelligent deep-learning models (like my Streamlit-based AI-proctored system) and automated deployment pipelines, with the career goal of transitioning into a specialized <b>MLOps Engineer</b> in the coming year.
          </p>

          <div className="pt-2">
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-300 mb-3">
              // Technologies I work with
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[12px] text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-300">▹</span> Java (Spring Boot)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-300">▹</span> Python (TensorFlow / OpenCV)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-300">▹</span> JavaScript / TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-300">▹</span> React JS / Vue JS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-300">▹</span> Docker / DevOps
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-300">▹</span> AWS Cloud Services
              </li>
            </ul>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <div
              className={`surface-panel p-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '220ms' }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Name</p>
              <p className="mt-2 text-sm font-medium text-slate-200">Aye Chan Htun Naing</p>
            </div>
            <div
              className={`surface-panel p-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '280ms' }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Location</p>
              <p className="mt-2 text-sm font-medium text-slate-200">APAC</p>
            </div>
            <div
              className={`surface-panel p-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '340ms' }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Email</p>
              <p className="mt-2 break-all text-sm font-medium text-slate-200">hello@peacechan.dev</p>
            </div>
            <div
              className={`surface-panel p-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Experience</p>
              <p className="mt-2 text-sm font-medium text-slate-200">5+ years</p>
            </div>
          </div>
        </div>

        <div
          className={`space-y-4 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '180ms' }}
        >
          <div className="surface-panel-strong p-5">
            <div className="mb-6 pt-1 pr-3 pb-3">
              <div className="group relative mx-auto w-full max-w-[200px] sm:max-w-[220px] lg:max-w-full">
                {/* The behind outline frame */}
                <div className="absolute inset-0 rounded-2xl border-2 border-emerald-600 dark:border-emerald-300 translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                
                {/* The main picture wrapper */}
                <div className="relative overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 bg-slate-800/70 dark:bg-slate-900/70">
                    <img
                      src="/avatars/avatar-cartoon.png"
                      alt="Profile"
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-slate-100">Peace Chan</h3>
              <p className="mt-1 text-sm text-slate-400">Software Engineer</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://github.com/AyeChanHtunNaing" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="ghost-button px-3 py-2">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/ayechanhtunnaing" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ghost-button px-3 py-2">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ghost-button px-3 py-2">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <a
            href="https://flowcv.com/resume/8gtnjbl6b4"
            target="_blank"
            rel="noopener noreferrer"
            className={`accent-button w-full justify-center transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '480ms' }}
          >
            <FileText className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
