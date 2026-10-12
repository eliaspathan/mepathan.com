import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  date: string;
  dateTime: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
  featuredImage?: string;
};

const POSTS_DIRECTORY = path.join(process.cwd(), "src", "content", "posts");

function parseFrontmatter(content: string) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Markdown blog post is missing frontmatter.");
  }

  const [, frontmatter, body] = match;
  const values: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || !trimmed.includes(":")) {
      continue;
    }

    const [key, ...rest] = trimmed.split(":");
    const rawValue = rest.join(":").trim();
    const normalizedValue = rawValue.replace(/^['"]|['"]$/g, "");
    values[key.trim()] = normalizedValue;
  }

  return { values, body };
}

function parseMarkdownPost(fileName: string, content: string): BlogPost {
  const { values, body } = parseFrontmatter(content);
  const title = values.title || fileName.replace(/\.md$/, "");
  const slug = values.slug || fileName.replace(/\.md$/, "");
  const excerpt = values.excerpt || "";
  const category = values.category || "General";
  const date = values.date || "";
  const dateTime = values.dateTime || date;
  const readTime = values.readTime || "4 min read";
  const featuredImage = values.featuredImage || undefined;

  const paragraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => paragraph.replace(/\n+/g, " "));

  return {
    slug,
    date: new Date(dateTime).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    dateTime,
    category,
    readTime,
    title,
    excerpt,
    paragraphs,
    featuredImage,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(POSTS_DIRECTORY, fileName);
      const content = fs.readFileSync(filePath, "utf8");
      return parseMarkdownPost(fileName, content);
    })
    .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
}

export const DEFAULT_FEATURED_IMAGE = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";

export const posts = getAllPosts();

export function getCategories() {
  return Array.from(new Set(posts.map((post) => post.category))).sort();
}

export function getPostsByCategory(category: string) {
  return posts.filter((post) => post.category === category);
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
