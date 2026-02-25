import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('blog');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) setIsVisible(true);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="blog" className="section-container">
      <div className="section-heading-row">
        <span className="section-eyebrow">04. Writing</span>
        <div className="section-rule" />
      </div>

      <div className="space-y-2">
        {blogPosts.slice(0, 4).map((post, index) => (
          <article
            key={post.id}
            className={`list-hover-card ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} transition-all duration-500`}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">{post.date}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-100">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{post.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="soft-tag">{post.category}</span>
                </div>
              </div>
              <ArrowRight className="mt-0.5 hidden h-4 w-4 shrink-0 text-slate-500 sm:block" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/articles" className="ghost-button">
          View all articles
        </Link>
      </div>
    </section>
  );
};

export default Blog;
