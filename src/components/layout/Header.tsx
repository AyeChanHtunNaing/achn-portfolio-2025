import { useEffect, useState } from 'react';
import { NAV_ITEMS, getSectionRoute, type HomeSectionId } from '@/constants/navigation';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<HomeSectionId>('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (!isHomePage) return;

      const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const sectionId = section.id as HomeSectionId;
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(sectionId);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavigation = (sectionId: HomeSectionId) => {
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        const mobileOffset = window.innerWidth >= 1024 ? 0 : 76;
        window.scrollTo({ top: section.offsetTop - mobileOffset, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActiveNavItem = (sectionId: HomeSectionId) => {
    if (sectionId === 'projects') return location.pathname === '/projects';
    return isHomePage && activeSection === sectionId;
  };

  const renderNavItems = (mode: 'desktop-home' | 'top') => (
    <>
      {NAV_ITEMS.map(({ id, label }) => {
        const target = isHomePage ? undefined : getSectionRoute(id);
        const active = isActiveNavItem(id);

        if (mode === 'desktop-home') {
          return isHomePage ? (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className={`nav-link-line ${active ? 'active' : ''}`}
            >
              {label}
            </button>
          ) : (
            <Link key={id} to={target || '/'} className={`nav-link-line ${active ? 'active' : ''}`}>
              {label}
            </Link>
          );
        }

        return isHomePage ? (
          <button
            key={id}
            onClick={() => handleNavigation(id)}
            className={`rounded-md px-3 py-2 text-sm transition ${
              active
                ? 'border border-emerald-600/25 dark:border-emerald-300/25 bg-emerald-600/10 dark:bg-emerald-300/10 text-emerald-700 dark:text-emerald-200'
                : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-slate-800 dark:hover:text-slate-100'
            }`}
          >
            {label}
          </button>
        ) : (
          <Link
            key={id}
            to={target || '/'}
            onClick={() => setIsOpen(false)}
            className={`rounded-md px-3 py-2 text-sm transition ${
              active
                ? 'border border-emerald-600/25 dark:border-emerald-300/25 bg-emerald-600/10 dark:bg-emerald-300/10 text-emerald-700 dark:text-emerald-200'
                : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-slate-800 dark:hover:text-slate-100'
            }`}
          >
            {label}
          </Link>
        );
      })}
    </>
  );

  if (isHomePage) {
    return (
      <>
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-[26rem] border-r border-black/5 dark:border-white/5 lg:flex">
          <div className="flex w-full flex-col justify-between px-10 py-14">
            <div>
              <Link to="/" className="inline-flex items-center gap-3 text-slate-100">
                <img src="/logo.svg" alt="Peace Chan logo" className="h-10 w-10 rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-1.5" />
                <span className="font-semibold tracking-tight text-slate-100">Peace Chan</span>
              </Link>

              <div className="mt-10 space-y-4">
                <p className="font-mono text-sm text-emerald-600 dark:text-emerald-300">Hi, my name is</p>
                <h1 className="text-3xl font-semibold leading-tight text-slate-100">Aye Chan Htun Naing</h1>
                <h2 className="text-2xl font-semibold leading-tight text-slate-500 dark:text-slate-400">
                  I build reliable software systems.
                </h2>
                <p className="max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Software engineer focused on backend systems and product-minded web applications with maintainable architecture and clear delivery.
                </p>
              </div>

              <nav className="mt-10 flex flex-col gap-4">{renderNavItems('desktop-home')}</nav>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://github.com/AyeChanHtunNaing" target="_blank" rel="noopener noreferrer" className="rounded-md p-2 transition hover:-translate-y-0.5 hover:text-emerald-500 dark:hover:text-emerald-200" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/ayechanhtunnaing" target="_blank" rel="noopener noreferrer" className="rounded-md p-2 transition hover:-translate-y-0.5 hover:text-emerald-500 dark:hover:text-emerald-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@peacechan.dev" className="rounded-md p-2 transition hover:-translate-y-0.5 hover:text-emerald-500 dark:hover:text-emerald-200" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <div className="ml-1 pl-2 border-l border-black/10 dark:border-white/10">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </aside>

        <header
          className={`fixed left-0 right-0 top-0 z-50 border-b transition lg:hidden ${
            scrolled
              ? 'border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#08111fcc] backdrop-blur'
              : 'border-transparent bg-transparent'
          }`}
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
              <img src="/logo.svg" alt="Peace Chan logo" className="h-8 w-8 rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-1" />
              <span className="text-slate-100">Peace Chan</span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-200"
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="border-t border-black/5 dark:border-white/10 bg-white/95 dark:bg-[#08111ff2] px-4 pb-4 pt-2 backdrop-blur sm:px-6">
              <nav className="grid grid-cols-2 gap-2">{renderNavItems('top')}</nav>
            </div>
          )}
        </header>
      </>
    );
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition ${
        scrolled ? 'border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#08111fcc] backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
          <img src="/logo.svg" alt="Peace Chan logo" className="h-8 w-8 rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-1" />
          <span className="text-slate-100">Peace Chan</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 md:flex">{renderNavItems('top')}</nav>
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-200 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-black/5 dark:border-white/10 bg-white/95 dark:bg-[#08111ff2] px-4 pb-4 pt-2 backdrop-blur md:hidden sm:px-6">
          <nav className="grid grid-cols-2 gap-2">{renderNavItems('top')}</nav>
        </div>
      )}
    </header>
  );
};

export default Header;
