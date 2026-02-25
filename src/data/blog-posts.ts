export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Accessible React Applications',
    excerpt:
      'Learn how to make your React applications accessible to all users by implementing ARIA attributes and keyboard navigation.',
    date: 'May 10, 2025',
    image:
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&h=450',
    category: 'React',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices for Large Projects',
    excerpt:
      'Discover effective strategies for managing TypeScript in large-scale projects to improve code quality and developer experience.',
    date: 'April 25, 2025',
    image:
      'https://images.unsplash.com/photo-1452960962994-acf4fd70b632?auto=format&fit=crop&w=800&h=450',
    category: 'TypeScript',
  },
  {
    id: 3,
    title: 'Optimizing Frontend Performance',
    excerpt:
      'Explore techniques to improve loading times and runtime performance of modern web applications.',
    date: 'March 18, 2025',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=450',
    category: 'Performance',
  },
  {
    id: 4,
    title: 'Modern CSS Techniques',
    excerpt:
      'Discover new CSS features and techniques that can enhance your web development workflow.',
    date: 'February 22, 2025',
    image:
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&h=450',
    category: 'CSS',
  },
  {
    id: 5,
    title: 'React State Management in 2025',
    excerpt:
      'An overview of the current state management solutions in the React ecosystem.',
    date: 'January 15, 2025',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=450',
    category: 'React',
  },
  {
    id: 6,
    title: 'The Future of Web Development',
    excerpt:
      'Exploring upcoming technologies and trends that will shape web development in the coming years.',
    date: 'December 10, 2024',
    image:
      'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&h=450',
    category: 'Web Development',
  },
];
