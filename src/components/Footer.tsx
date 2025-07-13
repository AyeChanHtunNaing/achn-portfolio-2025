
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-lightBlue text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="mb-2">
              <h3 className="text-lg font-medium">
                Peace<span className="text-gray-700">Chan</span>
              </h3>
            </div>
            <p className="text-gray-700 text-sm">Software Engineer with expertise in Java, JavaScript and React.</p>
          </div>
          
          <div className="flex space-x-3">
            <a href="https://github.com/aungmoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 border border-gray-400 hover:border-gray-700 hover:bg-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/aung-moe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 border border-gray-400 hover:border-gray-700 hover:bg-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 border border-gray-400 hover:border-gray-700 hover:bg-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="mailto:aungmoe@example.com" aria-label="Email" className="p-2 border border-gray-400 hover:border-gray-700 hover:bg-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-700 mb-4 md:mb-0">
            © 2019 - {currentYear} Peace Chan . All rights reserved.
          </p>
          
          <div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              <a href="#about" className="text-xs text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#resume" className="text-xs text-gray-700 hover:text-gray-900 transition-colors">Resume</a>
              <a href="#projects" className="text-xs text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#blog" className="text-xs text-gray-700 hover:text-gray-900 transition-colors">Blog</a>
              <a href="#contact" className="text-xs text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
