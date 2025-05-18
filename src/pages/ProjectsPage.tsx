
import Projects from '@/components/Projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
          <div className="container mx-auto px-4 max-w-5xl py-10">
              <div className="mb-8">
                  <Link to="/#projects"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors">
                      <ArrowLeft className="w-4 h-4 mr-2"/>
                      Back to Home
                  </Link>
              </div>
              <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-2">All Projects</h1>
                  <p className="text-gray-500">Browse through all my development projects</p>
              </div>
              <Projects showViewAllButton={false}/>
          </div>
      </main>
        <Footer/>
    </div>
  );
};

export default ProjectsPage;
