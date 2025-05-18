
import Header from '@/components/Header';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center bg-white relative overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-theme-lightBlue to-blue-50 opacity-70"></div>
            <div className="blob absolute -bottom-40 -left-40 w-96 h-96 bg-theme-skyBlue opacity-20 mix-blend-multiply"></div>
            <div className="blob absolute top-20 -right-20 w-80 h-80 bg-theme-lightBlue opacity-30 mix-blend-multiply"></div>
            <div className="absolute inset-0 z-0 opacity-30">
              <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="border-[0.5px] border-gray-100"
                  >
                    {i % 11 === 0 && <div className="w-1 h-1 bg-theme-skyBlue rounded-full opacity-30 mx-auto my-auto"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-start max-w-3xl mx-auto">
              <div 
                className={`mb-2 inline-block px-3 py-1 border border-theme-skyBlue bg-white shadow-sm transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '300ms' }}
              >
                <span className="text-xs font-medium uppercase tracking-wider">Software Engineer</span>
              </div>
              
              <h1 
                className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '500ms' }}
              >
                Hello, I'm <span className="inline-block relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-theme-skyBlue after:bottom-2 after:left-0 after:transform after:origin-bottom-right after:scale-x-100">Peace Chan</span>
              </h1>
              
              <p 
                className={`text-lg text-gray-600 mb-10 max-w-lg transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '700ms' }}
              >
                I build robust applications using Java, JavaScript and React to solve complex business problems.
              </p>
              
              <div 
                className={`flex gap-4 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '900ms' }}
              >
                <a 
                  href="#about" 
                  className="px-8 py-3 bg-theme-skyBlue text-white hover:bg-theme-brightBlue transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  About Me
                </a>
                <a 
                  href="#projects" 
                  className="px-8 py-3 border border-theme-skyBlue text-theme-skyBlue hover:bg-theme-skyBlue hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  View Projects
                </a>
              </div>
              
              {/* Floating element */}
              <div 
                className="hidden md:block absolute right-20 bottom-10 animate-float"
                style={{ transitionDelay: '1100ms' }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-theme-skyBlue to-theme-brightBlue opacity-70 blur-md"></div>
              </div>
            </div>
          </div>
        </section>
        
        <About />
        <Resume />
        <Projects />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
