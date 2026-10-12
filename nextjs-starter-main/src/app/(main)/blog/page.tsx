import Link from "next/link";

import { DEFAULT_FEATURED_IMAGE, getCategories, posts } from "@/data/posts";

export default function BlogPage() {
  const categories = getCategories();

  return (
    <div className="blog-shell">
      <header className="topbar">
        <Link href="/" className="brand-block" aria-label="Go to home page">
          <span className="brand-mark">M</span>
          <span className="brand-name">mepathan</span>
        </Link>
        <div className="footer-links">
          <Link href="/">Home</Link>
        </div>
      </header>

      <main>
        <section className="posts-section">
          <div className="section-heading">
            <span className="eyebrow">Notes on data</span>
            <h2>Blog</h2>
          </div>

          <div className="category-pills" aria-label="Blog categories">
            <Link href="/blog" className="category-pill active">
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${encodeURIComponent(category)}`}
                className="category-pill"
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="posts-list">
            {posts.map((post) => (
              <article key={post.slug} className="post-entry blog-card">
                <img
                  src={post.featuredImage || DEFAULT_FEATURED_IMAGE}
                  alt={post.title}
                  className="featured-image"
                />
                <div className="post-content">
                  <div className="post-meta">
                    <time dateTime={post.dateTime}>{post.date}</time>
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="primary-button">
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
