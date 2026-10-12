import './App.css';

const stats = [
  { value: '08+', label: 'Years' },
  { value: '40+', label: 'Shipped' },
  { value: '98%', label: 'Retention' },
  { value: 'Q3', label: 'Available' },
];

const projects = [
  {
    year: '2026',
    title: 'Meridian Commerce',
    category: 'Brand / Commerce',
    description: 'A luxury commerce brand system balancing editorial storytelling with conversion clarity.',
    stack: 'Next.js',
    accent: 'rose',
  },
  {
    year: '2026',
    title: 'Lowercase Journal',
    category: 'Editorial / Product',
    description: 'A digital publication exploring typography, design culture, and thoughtful reading experiences.',
    stack: 'Astro',
    accent: 'gold',
  },
  {
    year: '2025',
    title: 'Stratum Design System',
    category: 'Design System',
    description: 'A scalable UI foundation for a high-growth product, built for consistency and speed.',
    stack: 'React',
    accent: 'blue',
  },
  {
    year: '2025',
    title: 'Canopy Health',
    category: 'Healthcare / UX',
    description: 'A trust-first patient experience redesigned to reduce friction and support emotional clarity.',
    stack: 'React Native',
    accent: 'green',
  },
];

const skillGroups = [
  {
    title: 'Design',
    items: ['Brand Identity', 'Product Design', 'Design Systems', 'Typography', 'Interaction', 'Research'],
  },
  {
    title: 'Engineering',
    items: ['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'Node.js', 'GraphQL'],
  },
  {
    title: 'Tools',
    items: ['Figma', 'Storybook', 'Vercel', 'Git', 'Sanity', 'Playwright'],
  },
];

const timeline = [
  {
    period: '2024 — Present',
    role: 'Lead Designer & Partner',
    company: 'Meridian Studio',
    text: 'Leading brand strategy and product design for a focused roster of studio and technology clients across Europe and Asia.',
  },
  {
    period: '2021 — 2024',
    role: 'Senior Product Designer',
    company: 'Canopy Health',
    text: 'Redesigned the end-to-end telehealth experience around patient trust and emotional safety for a large-scale product team.',
  },
  {
    period: '2019 — 2021',
    role: 'UI Engineer & Designer',
    company: 'Stratum Finance',
    text: 'Built a 140-component design system and product UI system used across all lines of business.',
  },
];

const testimonials = [
  {
    quote: 'He understood our story before we could articulate it ourselves.',
    author: 'Sarah Chen',
    role: 'Founder, Meridian',
  },
  {
    quote: 'The redesign changed how patients feel about our platform.',
    author: 'David Park',
    role: 'CPO, Canopy Health',
  },
  {
    quote: 'His design system became the single source of truth for our team.',
    author: 'Maria Kovacs',
    role: 'VP Eng, Stratum',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">M</span>
          <span className="brand-name">mepathan</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="https://github.com/eliaspathan" target="_blank" rel="noreferrer" className="nav-cta">
          GitHub
        </a>
      </header>

      <main>
        <section id="about" className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Product Designer / Frontend Developer</span>
            <h1>
              Designing <span className="accent-text">clarity</span>
              <br />
              for digital products.
            </h1>
            <p>
              I design and build digital products that balance aesthetic ambition with functional clarity.
              My work sits between brand, product, and engineering — turning complex ideas into experiences
              people can understand and trust.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">View projects</a>
              <a href="#contact" className="secondary-button">Get in touch</a>
            </div>

            <div className="stats-row" aria-label="Career stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <img
                src="https://avatars.githubusercontent.com/u/10150231?v=4"
                alt="mepathan portrait"
              />
            </div>

            <div className="info-panel">
              <div className="info-row">
                <span className="label">Location</span>
                <span className="value">Palo Alto, CA</span>
              </div>
              <div className="info-row">
                <span className="label">Experience</span>
                <span className="value">8+ Years</span>
              </div>
              <div className="info-row">
                <span className="label">Focus</span>
                <span className="value">Product & Brand</span>
              </div>
              <div className="info-row">
                <span className="label">Status</span>
                <span className="value">Available Q3</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="work-section">
          <div className="section-heading">
            <span className="eyebrow">Featured work</span>
            <h2>Selected projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className={`project-card project-${project.accent}`}>
                <div className="project-topline">
                  <span>{project.year}</span>
                  <span>{project.category}</span>
                </div>

                <div className="project-visual" aria-hidden="true">
                  <div className="project-shape" />
                </div>

                <div className="project-body">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-link">VIEW</span>
                  </div>
                  <p>{project.description}</p>
                  <strong>{project.stack}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-heading narrow">
            <span className="eyebrow">The index</span>
            <h2>Craft across design and engineering.</h2>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-column">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="section-heading narrow">
            <span className="eyebrow">The mission log</span>
            <h2>Experience shaped by craft and scale.</h2>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.period} className="timeline-item">
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <div className="timeline-role">
                    <h3>{item.role}</h3>
                    <span>{item.company}</span>
                  </div>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="voice-section">
          <div className="section-heading narrow">
            <span className="eyebrow">Signals from the field</span>
            <h2>Feedback from the teams I’ve worked with.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="quote-card">
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-copy">
            <span className="eyebrow">Let’s build something memorable</span>
            <h2>Bring your next product story to life.</h2>
            <p>
              Taking on select projects for Q3. I’m best suited for founders, creative directors, and product teams
              who care as much about craft as outcome.
            </p>
          </div>

          <div className="contact-card">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Details
              <textarea placeholder="Project brief or goals" rows={4} />
            </label>
            <button type="button">Send message</button>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div>© 2026 mepathan</div>
        <div className="footer-links">
          <a href="#about">Home</a>
          <a href="#projects">Projects</a>
          <a href="https://github.com/eliaspathan" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;