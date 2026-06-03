import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) setIsVisible(true);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="testimonials" className="section-container">
      <div
        className={`section-heading-row transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <span className="section-eyebrow">05. Testimonials</span>
        <div className="section-rule" />
      </div>

      <div
        className={`mb-12 max-w-3xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">What colleagues and clients say</h2>
        <p className="mt-3 text-slate-400">
          Professional feedback and recommendations from team leads, managers, and partners I have had the privilege to collaborate with.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonialsData.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${200 + index * 90}ms` }}
          >
            <div className="border border-black/5 dark:border-white/5 bg-slate-800/40 dark:bg-slate-900/40 group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600/20 dark:hover:border-emerald-300/10 hover:bg-slate-800/60 dark:hover:bg-slate-900/60 sm:p-8 shadow-md">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-emerald-600/5 dark:text-emerald-300/5 transition-colors duration-300 group-hover:text-emerald-600/15 dark:group-hover:text-emerald-300/15" />
              
              <div className="relative z-10 flex-1">
                <p className="text-sm leading-relaxed text-slate-300">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="relative z-10 mt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full border border-emerald-600/15 dark:border-emerald-300/15 object-cover bg-slate-800/60 dark:bg-slate-900/60"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100">{item.name}</h4>
                    <p className="text-xs text-slate-400">
                      {item.role}, <span className="text-emerald-700/90 dark:text-emerald-300/90">{item.company}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-black/5 dark:border-white/5">
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
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
