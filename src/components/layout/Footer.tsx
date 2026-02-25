
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-white/60 bg-white/20 py-12 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Peace<span className="text-theme-skyBlue">Chan</span>
              </h3>
            </div>
            <p className="text-sm text-slate-600">Building backend systems and web applications with Java, JavaScript, and React.</p>
          </div>
          
          <div className="flex space-x-2">
            <a href="https://github.com/aungmoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="glass-accent-soft inline-flex h-10 w-10 items-center justify-center rounded-xl transition hover:text-slate-900">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/aung-moe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="glass-accent-soft inline-flex h-10 w-10 items-center justify-center rounded-xl transition hover:text-slate-900">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="glass-accent-soft inline-flex h-10 w-10 items-center justify-center rounded-xl transition hover:text-slate-900">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="mailto:aungmoe@example.com" aria-label="Email" className="glass-accent-soft inline-flex h-10 w-10 items-center justify-center rounded-xl transition hover:text-slate-900">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/60 pt-6 md:flex-row">
          <p className="text-xs text-slate-500">
            © 2019 - {currentYear} Peace Chan. All rights reserved.
          </p>
          
          <div>
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {NAV_ITEMS.filter(({ id }) => id !== 'home').map(({ id, label }) => (
                <a
                  key={id}
                  href={`/#${id}`}
                  className="text-xs font-medium text-slate-500 transition hover:text-slate-900"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
