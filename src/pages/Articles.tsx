
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

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
  },
  {
    id: 4,
    title: "Modern CSS Techniques",
    excerpt: "Discover new CSS features and techniques that can enhance your web development workflow.",
    date: "February 22, 2025",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&h=450",
    category: "CSS"
  },
  {
    id: 5,
    title: "React State Management in 2025",
    excerpt: "An overview of the current state management solutions in the React ecosystem.",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=450",
    category: "React"
  },
  {
    id: 6,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming technologies and trends that will shape web development in the coming years.",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&h=450",
    category: "Web Development"
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <Link to="/#blog" className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="mb-12">
            <h1 className="text-3xl font-bold">All Articles</h1>
            <p className="text-gray-500 mt-2">Browse through all my articles and insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="group" style={{"--index": index} as React.CSSProperties}>
                <div className="mb-4 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-xs font-medium bg-gray-100 px-2 py-1">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                
                <h3 className="text-lg font-medium mb-2 group-hover:underline">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
                
                <Button variant="link" className="p-0 h-auto font-medium text-sm flex items-center gap-1 text-black hover:text-gray-700 group-hover:gap-2 transition-all duration-200">
                  Read more <ArrowRight className="w-3 h-3" />
                </Button>
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
