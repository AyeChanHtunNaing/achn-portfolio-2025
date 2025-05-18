
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Accessible React Applications",
    excerpt: "Learn how to make your React applications accessible to all users by implementing ARIA attributes and keyboard navigation.",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&h=450",
    category: "React"
  },
  {
    id: 2,
    title: "TypeScript Best Practices for Large Projects",
    excerpt: "Discover effective strategies for managing TypeScript in large-scale projects to improve code quality and developer experience.",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&w=800&h=450",
    category: "TypeScript"
  },
  {
    id: 3,
    title: "Optimizing Frontend Performance",
    excerpt: "Explore techniques to improve loading times and runtime performance of modern web applications.",
    date: "March 18, 2025",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=450",
    category: "Performance"
  }
];

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
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-theme-lightBlue to-white opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-5xl">
        <div className={`mb-12 max-w-md transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-2 border-b-2 border-theme-skyBlue">
            <span className="text-xs font-medium uppercase tracking-wider">Blog</span>
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-skyBlue to-theme-brightBlue">Latest Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${300 + (index * 200)}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full aspect-[16/9] object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-xs font-medium bg-white px-2 py-1 rounded-sm">{post.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-theme-skyBlue transition-colors duration-300">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                
                <Button variant="link" className="p-0 h-auto font-medium text-sm flex items-center gap-1 text-theme-skyBlue hover:text-theme-brightBlue group-hover:gap-2 transition-all duration-200">
                  Read more <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link to="/articles">
            <Button variant="outline" className="border-2 border-theme-skyBlue text-theme-skyBlue hover:bg-theme-skyBlue hover:text-white transition-all duration-300 rounded-md px-8 py-3 h-auto shadow-md hover:shadow-lg transform hover:-translate-y-1">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
