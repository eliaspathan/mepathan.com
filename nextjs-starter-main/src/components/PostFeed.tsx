"use client";

import Link from "next/link";
import { useState } from "react";

import type { BlogPost } from "@/data/posts";

type PostFeedProps = {
  posts: BlogPost[];
};

const categories = [
  "All categories",
  "Power Query",
  "Power BI",
  "SharePoint",
  "Power Platform",
  "Data & Analytics",
];

export default function PostFeed({ posts }: PostFeedProps) {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const filteredPosts = posts.filter(
    (post) => selectedCategory === "All categories" || post.category === selectedCategory,
  );

  return (
    <section id="latest-posts" className="posts-section">
      <div className="section-heading post-section-heading">
        <div>
          <span className="eyebrow">Notes on data</span>
          <h2>Latest writing</h2>
        </div>
        <label className="category-filter">
          <span>Category</span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="posts-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.title} className="post-entry">
              <div className="post-meta">
                <time dateTime={post.dateTime}>{post.date}</time>
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <details className="post-details">
                <summary>Read More</summary>
                <div className="post-body">
                  <p>{post.excerpt}</p>
                  {post.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="primary-button">
                  Open article
                </Link>
              </details>
            </article>
          ))
        ) : (
          <p className="empty-posts">No posts in this category yet.</p>
        )}
      </div>
    </section>
  );
}