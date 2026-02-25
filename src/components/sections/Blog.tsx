
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blog-posts';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('blog');
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
    <section id="blog" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.12),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(233,213,255,0.14),_transparent_40%)] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className={`mb-12 max-w-2xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-accent-soft mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
            Articles
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Writing and insights</h2>
          <p className="mt-3 text-slate-600">
            Notes on software engineering, frontend development, TypeScript, accessibility, and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`glass-panel group overflow-hidden rounded-2xl transition-all duration-700 will-change-transform hover:-translate-y-1 hover:shadow-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${240 + (index * 120)}ms` }}
            >
              <div className="relative overflow-hidden border-b border-white/70">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full aspect-[16/9] object-cover transition-all duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/80 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-[0.1em] text-slate-500">{post.date}</span>
                </div>
                
                <h3 className="mb-2 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-slate-700">{post.title}</h3>
                <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                
                <Button variant="link" className="h-auto p-0 text-sm font-semibold text-slate-900 hover:text-slate-700">
                  Read more <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link to="/articles">
            <Button variant="outline" className="glass-accent h-auto rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold text-slate-900 hover:brightness-[1.02]">
              View All Engineering Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
