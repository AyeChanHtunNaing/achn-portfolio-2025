import { FileText, Github, Instagram, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-heading-row">
        <span className="section-eyebrow">01. About</span>
        <div className="section-rule" />
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="space-y-5 text-slate-400">
          <p className="leading-7">
            I am a software engineer with over 5 years of project-based experience building dependable applications
            across backend systems and web products. I care about maintainable code, strong collaboration, and clear
            communication from planning to delivery.
          </p>
          <p className="leading-7">
            My background includes enterprise and offshore projects, financial systems, and product delivery work using
            Java, Spring Boot, React, Vue, and cloud services. I also prioritize testing and long-term system health,
            not just feature output.
          </p>
          <p className="leading-7">
            I&apos;m currently open to software engineering opportunities and collaborations where quality and product impact
            both matter.
          </p>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <div className="surface-panel p-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Name</p>
              <p className="mt-2 text-sm font-medium text-slate-200">Aye Chan Htun Naing</p>
            </div>
            <div className="surface-panel p-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Location</p>
              <p className="mt-2 text-sm font-medium text-slate-200">Remote</p>
            </div>
            <div className="surface-panel p-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Email</p>
              <p className="mt-2 break-all text-sm font-medium text-slate-200">achn@peacechan.dev</p>
            </div>
            <div className="surface-panel p-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Experience</p>
              <p className="mt-2 text-sm font-medium text-slate-200">5+ years</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="surface-panel-strong p-4">
            <div className="mx-auto w-full max-w-[220px] sm:max-w-[240px] lg:max-w-full">
              <div className="relative overflow-hidden rounded-2xl border border-emerald-300/20 bg-slate-900/60 p-1">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/70">
                  <img
                    src="/avatars/avatar-cartoon.png"
                    alt="Profile"
                    loading="lazy"
                    decoding="async"
                    className="block aspect-square h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-slate-100">Peace Chan</h3>
              <p className="mt-1 text-sm text-slate-400">Software Engineer</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://github.com/aungmoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="ghost-button px-3 py-2">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/aung-moe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ghost-button px-3 py-2">
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
            className="accent-button w-full justify-center"
          >
            <FileText className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
