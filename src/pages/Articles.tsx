import { ArrowLeft, ArrowRight } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { blogPosts } from '@/data/blog-posts';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 pb-16">
        <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
          <div className="mb-8">
            <Link to="/#blog" className="ghost-button">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="mb-10 max-w-3xl">
            <div className="section-heading-row mb-4">
              <span className="section-eyebrow">Articles</span>
              <div className="section-rule" />
            </div>
            <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">All articles</h1>
            <p className="mt-3 text-slate-400">
              Notes on software engineering, frontend development, TypeScript, accessibility, and performance.
            </p>
          </div>

          <div className="space-y-4">
            {blogPosts.map((post) => (
              <article key={post.id} className="list-hover-card group">
                <div className="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)]">
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/50">
                    <img src={post.image} alt={post.title} className="aspect-[4/3] w-full object-cover opacity-80 transition duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-slate-500">
                      <span>{post.date}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-emerald-200/90">{post.category}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-slate-100">{post.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{post.excerpt}</p>
                    <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-300 transition hover:text-emerald-200">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
