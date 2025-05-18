
import { FileText, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-theme-lightBlue rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-theme-skyBlue rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-5xl">
        <div className={`mb-12 max-w-md transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-2 border-b-2 border-theme-skyBlue">
            <span className="text-xs font-medium uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-skyBlue to-theme-brightBlue">Who am I?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className={`md:col-span-4 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-theme-skyBlue to-theme-brightBlue rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/480303843_1772773579963826_7005570644937049789_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEO8GFpSF68qIE6rHigfScw-Dcd-8joGzf4Nx37yOgbN-IcpNagC9EultBiw4b8t9pmUTF3ouiwTv9yvFSB-G1m&_nc_ohc=iCe5KishiFsQ7kNvwFVKMoE&_nc_oc=AdltZrxq6wYHEnDefP1Fpq1s0cSODtwAOlpqtqwnxV9mv8spmdKyNYaZOY4BlAaBOII&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=WNobTAGZvZi9rQA63U8DLg&oh=00_AfIdT2b35xA1BWG2ne4d6w3lx0HN8611MRn7KDtsA9Hlhw&oe=682FD71A"
                    alt="Profile" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-start space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
                className="p-3 border border-gray-200 hover:border-theme-skyBlue hover:bg-theme-skyBlue hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                className="p-3 border border-gray-200 hover:border-theme-skyBlue hover:bg-theme-skyBlue hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" 
                className="p-3 border border-gray-200 hover:border-theme-skyBlue hover:bg-theme-skyBlue hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className={`md:col-span-8 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-2">Hello, I'm <span className="relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-theme-skyBlue after:bottom-0 after:left-0">Aye Chan Htun Naing</span></h3>
            <h4 className="text-lg text-gray-500 mb-6">Software Engineer</h4>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Experienced software developer with over 4 years of project-based experience, known for a strong work ethic, attention to detail, and excellent communication skills. Passionate about leveraging technology to enhance living standards, dedicated to continuous learning and growth in software development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 mb-10 border-t border-b border-gray-100 py-8">
              <div className="flex flex-col gap-6">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-xs text-gray-500 block mb-1">Name</span>
                  <p className="font-medium">Aye Chan Htun Naing</p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-xs text-gray-500 block mb-1">Email</span>
                  <p className="font-medium">achn.peacechan@gmail.com</p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-xs text-gray-500 block mb-1">Location</span>
                  <p className="font-medium">Remote</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-xs text-gray-500 block mb-1">Experience</span>
                  <p className="font-medium">4+ years</p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-xs text-gray-500 block mb-1">Education</span>
                  <p className="font-medium">B.Sc (Hons) Computing</p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <span className="text-xs text-gray-500 block mb-1">Freelance</span>
                  <p className="font-medium">Available</p>
                </div>
              </div>
            </div>
            
            <Button className="h-auto py-3 px-6 bg-gradient-to-r from-theme-skyBlue to-theme-brightBlue text-white hover:from-theme-brightBlue hover:to-theme-skyBlue transition-all duration-500 rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
