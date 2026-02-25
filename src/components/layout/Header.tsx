
import { useState, useEffect } from 'react';
import { NAV_ITEMS, getSectionRoute, type HomeSectionId } from '@/constants/navigation';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (isHomePage) {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    }

    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // On homepage, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    } else {
      // On other pages, navigate to homepage with anchor
      // The setOpen(false) will be handled by the Link component
    }
    setIsOpen(false);
  };

  const isActiveNavItem = (sectionId: HomeSectionId) => {
    if (sectionId === 'projects') {
      return location.pathname === '/projects';
    }

    if (sectionId === 'blog') {
      return location.pathname === '/articles';
    }

    return location.pathname === '/' && activeSection === sectionId;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/50 backdrop-blur-xl border-b border-white/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2.5 text-base font-semibold tracking-tight text-slate-900">
            <img
              src="/logo.svg"
              alt="Peace Chan logo"
              className="h-8 w-8 rounded-lg border border-slate-200 shadow-sm"
            />
            <span>
              Peace<span className="font-bold text-theme-skyBlue">Chan</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="glass-panel hidden lg:flex items-center gap-1 rounded-full p-1">
            {NAV_ITEMS.map(({ id, label }) => {
              const target = isHomePage ? undefined : getSectionRoute(id);
              
              return isHomePage ? (
                <button
                  key={id}
                  onClick={() => handleNavigation(id)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    activeSection === id 
                      ? 'glass-accent text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={id}
                  to={target || '/'}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActiveNavItem(id)
                      ? 'glass-accent text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="glass-panel lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full px-4 pt-2">
          <div className="container mx-auto max-w-2xl px-0">
            <nav className="glass-panel-strong flex flex-col rounded-2xl p-2">
              {NAV_ITEMS.map(({ id, label }) => {
                const target = isHomePage ? undefined : getSectionRoute(id);
                
                return isHomePage ? (
                  <button
                    key={id}
                    onClick={() => handleNavigation(id)}
                    className={`rounded-xl px-3 py-2.5 text-left text-sm ${
                      activeSection === id 
                        ? 'glass-accent text-slate-900 font-semibold'
                        : 'text-slate-600 hover:bg-white/50 hover:text-slate-900'
                    }`}
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    key={id}
                    to={target || '/'}
                    className={`rounded-xl px-3 py-2.5 text-left text-sm ${
                      isActiveNavItem(id)
                        ? 'glass-accent text-slate-900 font-semibold'
                        : 'text-slate-600 hover:bg-white/50 hover:text-slate-900'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
