import React from 'react';
import { ChevronUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    links: [
      { name: "GitHub", href: "https://github.com/eliaspathan" },
      { name: "Projects", href: "#projects" },
      { name: "Writing", href: "#writing" }
    ],
    more: [
      { name: "About", href: "#about" },
      { name: "Code", href: "#code" },
      { name: "Connect", href: "#connect" }
    ],
    categories: [
      { name: "Frontend", href: "#frontend" },
      { name: "Engineering", href: "#engineering" },
      { name: "Ideas", href: "#ideas" }
    ],
    help: [
      { name: "Home", href: "#" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "GitHub", href: "https://github.com/eliaspathan" }
    ]
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                More
              </h3>
              <ul className="space-y-3">
                {footerLinks.more.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Focus
              </h3>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Info
              </h3>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold font-heading text-gradient">
                mepathan
              </div>
              <span className="text-gray-400">-</span>
              <span className="text-sm text-gray-600">
                software engineer & builder
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 group"
            >
              <span>back to top</span>
              <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} mepathan. Made with{' '}
              <Heart className="inline h-3 w-3 text-red-500 mx-1" />
              and a passion for building useful things.
            </p>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', left: '-5000px' }}>
        <input type="text" name="honeypot" tabIndex={-1} aria-hidden="true" />
        <label htmlFor="honeypot">Leave this field empty if you're human:</label>
      </div>
    </footer>
  );
};

export default Footer;
