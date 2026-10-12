import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import PostFeed from "@/components/PostFeed";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <div className="blog-shell">
      <header className="topbar">
        <Link href="/" className="brand-block" aria-label="Go to home page">
          <span className="brand-mark">M</span>
          <span className="brand-name">mepathan</span>
        </Link>
        <nav className="header-links" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>

      <main>
        <section id="about" className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Data Analyst</span>
            <h1>
              Believes
              <br />
              in
              <br />
              <span className="accent-text">Data democracy.</span>
            </h1>
            <p>Right People, Right data - Anytime.</p>

            <div className="hero-actions">
              <a href="/blog" className="primary-button">Read More</a>
              <div className="hero-socials">
                <a href="https://github.com/eliaspathan" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub" title="GitHub">
                  <FaGithub size={20} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/epathan" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn" title="LinkedIn">
                  <FaLinkedinIn size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <PostFeed posts={posts} />
      </main>

      <footer className="page-footer">
        <div>© 2026 mepathan</div>
      </footer>
    </div>
  );
}
