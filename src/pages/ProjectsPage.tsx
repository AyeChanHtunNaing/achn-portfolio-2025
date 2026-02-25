
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Projects from '@/components/sections/Projects';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="mb-8">
            <Link
              to="/#projects"
              className="glass-accent-soft inline-flex items-center rounded-full px-3 py-1.5 text-sm transition hover:text-slate-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="mb-10 max-w-2xl">
            <div className="glass-accent-soft mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
              Projects
            </div>
            <h1 className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl">All projects</h1>
            <p className="text-slate-600">
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
