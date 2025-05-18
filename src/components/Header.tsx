
import { useState, useEffect } from 'react';
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white py-3 shadow-sm' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-medium text-lg">
            Peace<span className="font-bold">Chan</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {['home', 'about', 'resume', 'projects', 'blog', 'contact'].map((section) => {
              // For non-home sections, create links to specific pages or homepage anchors
              const isProjectsSection = section === 'projects';
              const isBlogSection = section === 'blog';
              const target = isHomePage 
                ? undefined 
                : (isProjectsSection ? '/projects' : (isBlogSection ? '/articles' : `/#${section}`));
              
              return isHomePage ? (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={`px-4 py-1 transition-colors ${
                    activeSection === section 
                      ? 'text-black font-medium' 
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ) : (
                <Link
                  key={section}
                  to={target || '/'}
                  className={`px-4 py-1 transition-colors ${
                    (isProjectsSection && location.pathname === '/projects') || 
                    (isBlogSection && location.pathname === '/articles') ||
                    (location.pathname === '/' && activeSection === section)
                      ? 'text-black font-medium' 
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-2 animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col">
              {['home', 'about', 'resume', 'projects', 'blog', 'contact'].map((section) => {
                // For non-home sections, create links to specific pages or homepage anchors
                const isProjectsSection = section === 'projects';
                const isBlogSection = section === 'blog';
                const target = isHomePage 
                  ? undefined 
                  : (isProjectsSection ? '/projects' : (isBlogSection ? '/articles' : `/#${section}`));
                
                return isHomePage ? (
                  <button
                    key={section}
                    onClick={() => handleNavigation(section)}
                    className={`py-2 text-left ${
                      activeSection === section 
                        ? 'text-black font-medium' 
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ) : (
                  <Link
                    key={section}
                    to={target || '/'}
                    className={`py-2 text-left ${
                      (isProjectsSection && location.pathname === '/projects') || 
                      (isBlogSection && location.pathname === '/articles') ||
                      (location.pathname === '/' && activeSection === section)
                        ? 'text-black font-medium' 
                        : 'text-gray-500 hover:text-black'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
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
