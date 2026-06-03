import { useEffect, useState } from 'react';
import { Award, Trophy, ExternalLink } from 'lucide-react';
import { awardsData } from '@/data/awards';

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('awards');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) setIsVisible(true);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="awards" className="section-container">
      <div
        className={`section-heading-row transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <span className="section-eyebrow">04. Honors & Awards</span>
        <div className="section-rule" />
      </div>

      <div
        className={`mb-12 max-w-3xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">Honors & awards</h2>
        <p className="mt-3 text-slate-400">
          Recognitions, competition prizes, and international accolades awarded for engineering excellence and technical contributions.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl">
        {awardsData.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${200 + index * 90}ms` }}
          >
            <div className="group rounded-xl border border-transparent p-5 transition-all duration-300 md:hover:border-black/5 dark:md:hover:border-white/5 md:hover:bg-black/[0.02] dark:md:hover:bg-slate-800/30 md:hover:shadow-lg flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
              <div className="md:w-1/4 pt-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.date}
                </span>
              </div>

              <div className="md:w-3/4 min-w-0">
                <h3 className="text-base font-semibold text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-200 break-words">
                  {item.credentialLink ? (
                    <a href={item.credentialLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 group/link">
                      <span>{item.title}</span>
                      <span className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-xs text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300">
                        ↗
                      </span>
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>

                <p className="mt-1 text-xs text-slate-400 font-medium">
                  Issued by <span className="text-slate-300 font-semibold">{item.issuer}</span>
                  {item.association && (
                    <>
                      {" "}• Associated with <span className="text-emerald-700/90 dark:text-emerald-300/90 font-mono text-[11px]">{item.association}</span>
                    </>
                  )}
                </p>

                <p className="mt-3 text-[13px] leading-relaxed text-slate-400 whitespace-pre-line">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  {item.credentialLink && (
                    <a
                      href={item.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-300 hover:text-emerald-700 dark:hover:text-emerald-200 transition-colors"
                    >
                      Show credential ↗
                    </a>
                  )}

                  <div className="flex flex-wrap gap-1.5 ml-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-emerald-600/10 dark:bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] font-medium leading-normal text-emerald-700 dark:text-emerald-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
