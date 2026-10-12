// Personal portfolio blog data for mepathan

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  views: number;
  comments: number;
  category: string;
  image: string;
  tags: string[];
}

export const authors: Author[] = [
  {
    id: "1",
    name: "mepathan",
    role: "Software Engineer & Builder",
    avatar: "https://avatars.githubusercontent.com/u/10150231?v=4"
  }
];

export const categories = [
  { id: "projects", name: "Projects", color: "bg-purple-100 text-purple-700" },
  { id: "frontend", name: "Frontend", color: "bg-pink-100 text-pink-700" },
  { id: "engineering", name: "Engineering", color: "bg-blue-100 text-blue-700" },
  { id: "ideas", name: "Ideas", color: "bg-green-100 text-green-700" }
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Designing small products that feel personal and useful",
    excerpt: "A practical look at how I approach product thinking, fast iteration, and creating tools people actually want to use.",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "Updated recently",
    readTime: 4,
    views: 1800,
    comments: 9,
    category: "Projects",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=250&fit=crop",
    tags: ["product", "design", "build"]
  },
  {
    id: "2",
    title: "What I learned shipping React interfaces with clean structure",
    excerpt: "A framework for keeping components readable, fast, and maintainable when the project grows beyond the first prototype.",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "Recent post",
    readTime: 5,
    views: 1600,
    comments: 6,
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    tags: ["react", "frontend", "architecture"]
  },
  {
    id: "3",
    title: "Building a workflow around GitHub, feedback, and iteration",
    excerpt: "A reminder that momentum comes from smaller releases, better feedback loops, and shipping before the concept feels perfect.",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "Recent write-up",
    readTime: 3,
    views: 1250,
    comments: 5,
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    tags: ["github", "workflow", "productivity"]
  },
  {
    id: "4",
    title: "Why I still care about thoughtful UX in simple apps",
    excerpt: "The best experiences are often the result of clear decisions, strong visual hierarchy, and a product that removes friction.",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "This week",
    readTime: 4,
    views: 980,
    comments: 4,
    category: "Ideas",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    tags: ["ux", "product", "ideas"]
  },
  {
    id: "5",
    title: "From code experiments to portfolio projects worth sharing",
    excerpt: "Examples of how I turn curiosity into useful experiments, polished interfaces, and projects that teach me something new.",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "Recently",
    readTime: 5,
    views: 920,
    comments: 3,
    category: "Projects",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400&h=250&fit=crop",
    tags: ["portfolio", "code", "projects"]
  },
  {
    id: "6",
    title: "My approach to learning, building, and shipping consistently",
    excerpt: "A simple system for staying curious, learning quickly, and turning research into working software without losing momentum.",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "Latest",
    readTime: 6,
    views: 1700,
    comments: 8,
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    tags: ["learning", "engineering", "growth"]
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/eliaspathan", icon: "GitHub" }
];

export const navigationItems = [
  {
    name: "Home",
    href: "#home",
    subItems: [
      { name: "Portfolio", description: "Projects, experiments, and product ideas" },
      { name: "Writing", description: "Notes on code, UX, and shipping" },
      { name: "GitHub", description: "Public work and source code" },
      { name: "About", description: "A little more about mepathan", hot: true }
    ]
  },
  { name: "Projects", href: "#projects" },
  { name: "Writing", href: "#writing" },
  { name: "Code", href: "#code" },
  { name: "About", href: "#about" }
];
