
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import HomeHero from '@/components/sections/HomeHero';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
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
        <HomeHero isLoaded={isLoaded} />
        
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
