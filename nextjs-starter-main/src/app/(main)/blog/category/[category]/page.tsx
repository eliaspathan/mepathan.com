import Link from "next/link";
import { notFound } from "next/navigation";

import { DEFAULT_FEATURED_IMAGE, getCategories, getPostsByCategory } from "@/data/posts";

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: encodeURIComponent(category) }));
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const categoryPosts = getPostsByCategory(decodedCategory);

  if (!categoryPosts.length) {
    notFound();
  }

  const categories = getCategories();

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
        <section className="posts-section">
          <div className="section-heading">
            <span className="eyebrow">Notes on data</span>
            <h2>{decodedCategory}</h2>
          </div>

          <div className="category-pills" aria-label="Blog categories">
            <Link href="/blog" className="category-pill">
              All
            </Link>
            {categories.map((item) => (
              <Link
                key={item}
                href={`/blog/category/${encodeURIComponent(item)}`}
                className={`category-pill ${item === decodedCategory ? "active" : ""}`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="posts-list">
            {categoryPosts.map((post) => (
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
