
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Projects from '@/components/sections/Projects';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
          <div className="mb-8">
            <Link
              to="/#projects"
              className="ghost-button"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="mb-10 max-w-2xl">
            <div className="section-heading-row mb-4">
              <span className="section-eyebrow">Projects</span>
              <div className="section-rule" />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-slate-100 sm:text-4xl">All projects</h1>
            <p className="text-slate-400">
              Browse through my software engineering projects and implementations
            </p>
          </div>
          <Projects showViewAllButton={false} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
