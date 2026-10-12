import Link from "next/link";
import { notFound } from "next/navigation";

import { DEFAULT_FEATURED_IMAGE, getPostBySlug, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | mepathan`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-shell">
      <header className="topbar">
        <Link href="/" className="brand-block" aria-label="Go to home page">
          <span className="brand-mark">M</span>
          <span className="brand-name">mepathan</span>
        </Link>
        <div className="footer-links">
          <Link href="/blog">Blog</Link>
          <Link href="/">Home</Link>
        </div>
      </header>

      <main>
        <article className="post-entry blog-article" style={{ maxWidth: "840px", marginTop: "32px" }}>
          <img
            src={post.featuredImage || DEFAULT_FEATURED_IMAGE}
            alt={post.title}
            className="featured-image article-hero"
          />

          <div className="post-meta">
            <time dateTime={post.dateTime}>{post.date}</time>
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, margin: "20px 0" }}>
            {post.title}
          </h1>

          <p className="post-excerpt" style={{ marginBottom: "24px" }}>{post.excerpt}</p>

          <div className="post-body">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div style={{ marginTop: "32px" }}>
            <Link href="/blog" className="primary-button">
              Back to blog
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
