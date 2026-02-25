type HomeHeroProps = {
  isLoaded: boolean;
};

const HomeHero = ({ isLoaded }: HomeHeroProps) => {
  return (
    <section id="home" className="section-container pt-12 lg:pt-20">
      <div
        className={`space-y-6 transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <p className="font-mono text-sm text-emerald-300">Hi, I&apos;m Peace Chan.</p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl md:text-5xl">
          I build production-ready software that stays maintainable after launch.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Software engineer focused on Java, Spring Boot, React, and TypeScript. I care about code quality,
          testing, and shipping features that teams can confidently extend.
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a href="#projects" className="accent-button">
            View Projects
          </a>
          <a href="#contact" className="ghost-button">
            Get In Touch
          </a>
        </div>

        <div className="grid gap-4 pt-4 sm:grid-cols-2">
          <div className="surface-panel p-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Focus</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Backend systems, internal tools, and full-stack product features with strong testing discipline.
            </p>
          </div>
          <div className="surface-panel p-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Current Stack</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Java, Spring Boot, React, TypeScript, AWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
