
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blog-posts';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <Link to="/#blog" className="glass-accent-soft inline-flex items-center rounded-full px-3 py-1.5 text-sm transition hover:text-slate-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="mb-12 max-w-2xl">
            <div className="glass-accent-soft mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
              Articles
            </div>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">All articles</h1>
            <p className="mt-3 text-slate-600">Browse articles and notes on software engineering, frontend development, TypeScript, accessibility, and performance.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="glass-panel group overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-lg" style={{ '--index': index } as React.CSSProperties}>
                <div className="overflow-hidden border-b border-white/70">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full aspect-[16/9] object-cover transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="glass-accent-soft rounded-full px-2.5 py-1 text-xs font-medium">{post.category}</span>
                    <span className="text-xs uppercase tracking-[0.1em] text-slate-500">{post.date}</span>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{post.title}</h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  
                  <Button variant="link" className="h-auto p-0 text-sm font-semibold text-slate-900 hover:text-slate-700">
                    Read more <ArrowRight className="w-3 h-3" />
                  </Button>
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
