type HomeHeroProps = {
  isLoaded: boolean;
};

const HomeHero = ({ isLoaded }: HomeHeroProps) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28 md:pt-36 md:pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(186,230,253,0.55),transparent_36%),radial-gradient(circle_at_90%_10%,rgba(221,214,254,0.5),transparent_36%),radial-gradient(circle_at_80%_85%,rgba(209,250,229,0.35),transparent_30%)]"></div>
      <div className="ambient-blob ambient-blob-a h-28 w-28 bg-sky-200/60 left-[8%] top-[14%]" />
      <div className="ambient-blob ambient-blob-b h-36 w-36 bg-indigo-200/50 right-[10%] top-[18%]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div
              className={`pastel-chip mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '120ms' }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
              Software Engineer
            </div>

            <h1
              className={`text-3xl font-extrabold leading-tight text-slate-900 transition-all duration-700 sm:text-5xl md:text-6xl ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              Building production-ready software with a focus on quality and maintainability.
            </h1>

            <p
              className={`mt-5 max-w-2xl text-base leading-7 text-slate-600 transition-all duration-700 sm:text-lg ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '360ms' }}
            >
              I&apos;m Peace Chan, focused on Java, JavaScript,
              and React. I design and deliver production-ready applications with a
              focus on code quality, testing, and long-term maintainability.
            </p>

            <div
              className={`mt-8 flex flex-col gap-3 sm:flex-row transition-all duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '480ms' }}
            >
              <a
                href="#projects"
                className="glass-accent glass-sheen inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition hover:brightness-[1.02] float-soft"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="glass-accent-soft inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition hover:text-slate-900 float-soft-delayed"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '420ms' }}
          >
            <div className="glass-panel-strong glass-sheen mx-auto max-w-xl rounded-2xl p-6 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-16 before:rounded-t-2xl before:bg-gradient-to-b before:from-white/70 before:to-transparent relative">
              <dl className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2 border-b border-slate-200 pb-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Focus
                  </dt>
                  <dd className="mt-2 text-base font-semibold text-slate-900">
                    Backend systems, web applications, and production feature delivery
                  </dd>
                </div>
                <div className="sm:pr-2">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Stack
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-700">
                    Java, Spring Boot, React, TypeScript
                  </dd>
                </div>
                <div className="sm:pl-2">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Strengths
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-700">
                    Testing, maintainability, collaboration
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Experience
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-700">5+ years</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Work Style
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-700">Remote / collaborative</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
