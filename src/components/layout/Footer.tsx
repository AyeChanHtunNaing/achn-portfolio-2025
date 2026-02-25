import { Github, Linkedin, Mail } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`border-t border-white/5 py-10 ${isHomePage ? 'lg:pl-[26rem]' : ''}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Portfolio</p>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Building backend systems and web applications with a focus on maintainability, testing, and practical product delivery.
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <a href="https://github.com/aungmoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md border border-white/10 bg-white/5 p-2.5 transition hover:-translate-y-0.5 hover:text-emerald-200">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/aung-moe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-white/10 bg-white/5 p-2.5 transition hover:-translate-y-0.5 hover:text-emerald-200">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:achn@peacechan.dev" aria-label="Email" className="rounded-md border border-white/10 bg-white/5 p-2.5 transition hover:-translate-y-0.5 hover:text-emerald-200">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/5 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Peace Chan</p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {NAV_ITEMS.filter(({ id }) => id !== 'home').map(({ id, label }) => {
              const to = id === 'projects' ? '/projects' : id === 'blog' ? '/articles' : `/#${id}`;
              return (
                <Link key={id} to={to} className="transition hover:text-slate-300">
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
