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
    <div className="min-h-screen">
      <Header />

      <main className="pb-12 lg:pl-[26rem]">
        <div className="mx-auto w-full max-w-4xl px-6 pt-20 sm:px-8 lg:max-w-5xl lg:px-10 lg:pt-16">
          <HomeHero isLoaded={isLoaded} />
          <About />
          <Resume />
          <Projects />
          <Blog />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
