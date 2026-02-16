const profile = {
  name: 'Ravi Gohel',
  role: 'AI & Machine Learning Engineer',
  subtitle: 'Building real-world AI systems, chatbots, and predictive platforms.',
  location: 'Rajkot, Gujarat',
  email: 'ravi.n.gohel811@gmail.com',
  resumeUrl: 'https://drive.google.com/',
  githubUrl: 'https://github.com/ravi-gohel',
  linkedInUrl: 'https://linkedin.com/in/ravi-gohel',
  portfolioUrl: '#projects',
}

const stats = [
  { value: '8+', label: 'Projects' },
  { value: '2+', label: 'Internships' },
  { value: '5+', label: 'Hackathons' },
  { value: 'AI/ML', label: 'Developer' },
]

const skillGroups = [
  {
    title: 'AI/ML Skills',
    items: ['Machine Learning', 'NLP', 'Generative AI', 'Model Evaluation'],
  },
  {
    title: 'Programming',
    items: ['Python', 'Flask', 'PostgreSQL', 'Streamlit', 'GitHub', 'HTML, CSS, JS'],
  },
]

const projects = [
  {
    title: 'CampusMate – Smart Campus Helper Bot',
    description: 'AI-powered assistant for campus navigation, resources, and student support conversations.',
    stack: ['Python', 'NLP', 'Flask', 'Streamlit'],
    github: 'https://github.com/ravi-gohel/campusmate',
    demo: 'https://campusmate-demo.vercel.app/',
  },
  {
    title: 'FraudShield AI – Fraud Detection System',
    description: 'Real-time anomaly detection and risk scoring pipeline to flag suspicious transactions.',
    stack: ['ML', 'Python', 'PostgreSQL'],
    github: 'https://github.com/ravi-gohel/fraudshield-ai',
    demo: 'https://fraudshield-ai-demo.vercel.app/',
  },
  {
    title: 'AI Startup Survival Prediction System',
    description: 'Predictive intelligence platform analyzing startup signals to estimate long-term viability.',
    stack: ['ML Modeling', 'Data Analytics', 'Flask'],
    github: 'https://github.com/ravi-gohel/startup-survival-prediction',
    demo: 'https://startup-survival-demo.vercel.app/',
  },
  {
    title: 'GroupTrip Maestro AI – GenAI Travel Assistant',
    description: 'Generative AI assistant that builds optimized collaborative itineraries for group travelers.',
    stack: ['GenAI', 'Prompt Engineering', 'APIs'],
    github: 'https://github.com/ravi-gohel/grouptrip-maestro-ai',
    demo: 'https://grouptrip-maestro.vercel.app/',
  },
  {
    title: 'Smart Feedback System',
    description: 'Sentiment and topic analysis engine for structured feedback insights and action tracking.',
    stack: ['NLP', 'Python', 'Dashboarding'],
    github: 'https://github.com/ravi-gohel/smart-feedback-system',
    demo: 'https://smart-feedback-demo.vercel.app/',
  },
  {
    title: 'Smart Entry Exit Monitoring System',
    description: 'Automated monitoring platform for secure attendance and access movement analytics.',
    stack: ['Computer Vision', 'ML', 'Web App'],
    github: 'https://github.com/ravi-gohel/smart-entry-exit-monitor',
    demo: 'https://entry-exit-monitor.vercel.app/',
  },
]

const experience = [
  {
    role: 'AI & ML Intern',
    bullets: [
      'Built and fine-tuned machine learning models for practical production-oriented use cases.',
      'Designed clean data preprocessing pipelines to improve model input quality and consistency.',
      'Performed model evaluation, hyperparameter tuning, and performance monitoring.',
    ],
  },
  {
    role: 'Web Development Intern',
    bullets: [
      'Developed secure login systems and role-based access workflows for web applications.',
      'Implemented backend APIs and frontend modules for full-stack features.',
      'Improved maintainability with reusable components and organized code structure.',
    ],
  },
]

const socialLinks = [
  { label: 'GitHub', href: profile.githubUrl },
  { label: 'LinkedIn', href: profile.linkedInUrl },
  { label: 'Portfolio', href: profile.portfolioUrl },
]

const sectionCardClass =
  'rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-glass transition duration-300 hover:border-secondary/60 hover:bg-white/15'

function ExternalLink({ href, children, className }) {
  const isAnchor = href.startsWith('#')
  return (
    <a
      href={href}
      className={className}
      target={isAnchor ? undefined : '_blank'}
      rel={isAnchor ? undefined : 'noreferrer noopener'}
    >
      {children}
    </a>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-base text-text">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#4F46E560,transparent_35%),radial-gradient(circle_at_80%_10%,#8B5CF64A,transparent_30%),linear-gradient(160deg,#0F172A,#101B35,#0F172A)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-base/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-lg font-semibold tracking-wide text-white">
            {profile.name}
          </a>
          <div className="hidden gap-6 text-sm md:flex">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-secondary">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:py-20">
        <section id="hero" className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 animate-fadeInUp">
            <span className="inline-flex rounded-full border border-secondary/50 bg-secondary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-secondary">
              AI / ML Portfolio
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              {profile.name}
              <span className="mt-2 block bg-gradient-to-r from-secondary via-cyan-300 to-accent bg-clip-text text-3xl text-transparent md:text-5xl">
                {profile.role}
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-300">{profile.subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <ExternalLink
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
              >
                View Projects
              </ExternalLink>

              <ExternalLink
                href={profile.resumeUrl}
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium transition hover:border-secondary hover:text-secondary"
              >
                Download Resume
              </ExternalLink>

              <ExternalLink
                href="#contact"
                className="rounded-xl border border-secondary/30 px-5 py-3 text-sm font-medium text-secondary transition hover:bg-secondary/15"
              >
                Contact Me
              </ExternalLink>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <ExternalLink
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider transition hover:border-secondary hover:text-secondary"
                >
                  {social.label}
                </ExternalLink>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs animate-float">
            <div className="relative rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 shadow-2xl shadow-primary/30">
              <div className="aspect-square rounded-full border border-white/20 bg-slate-900/90 p-3">
                <img
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=600&q=80"
                  alt="Ravi Gohel portrait"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={sectionCardClass}>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">About</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Highly motivated B.Tech AI & ML student specializing in building deployable AI systems, chatbots, fraud
            detection systems, and ML platforms. Skilled in Python, Machine Learning, NLP, Flask, Streamlit, and Web
            Development.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-4 animate-fadeInUp"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                <p className="text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className={sectionCardClass}>
                <h3 className="mb-4 text-xl font-semibold text-white">{group.title}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium transition hover:border-secondary hover:bg-secondary/10"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Projects</h2>
            <ExternalLink href={profile.githubUrl} className="text-sm text-secondary hover:underline">
              View all on GitHub →
            </ExternalLink>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className={`${sectionCardClass} group flex flex-col`}>
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <ExternalLink
                    href={project.github}
                    className="rounded-lg border border-white/20 px-3 py-2 text-xs transition hover:border-secondary hover:text-secondary"
                  >
                    GitHub
                  </ExternalLink>
                  <ExternalLink
                    href={project.demo}
                    className="rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2 text-xs text-white transition group-hover:shadow-lg group-hover:shadow-primary/30"
                  >
                    Live Demo
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Experience</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((item) => (
              <article key={item.role} className={sectionCardClass}>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={sectionCardClass}>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Contact</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-slate-300">
              <p>
                <span className="font-medium text-white">Email:</span>{' '}
                <a href={`mailto:${profile.email}`} className="text-secondary hover:underline">
                  {profile.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-white">Location:</span> {profile.location}
              </p>
              <div className="flex gap-3 pt-2">
                <ExternalLink
                  href={profile.linkedInUrl}
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:border-secondary hover:text-secondary"
                >
                  LinkedIn
                </ExternalLink>
                <ExternalLink
                  href={profile.githubUrl}
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:border-secondary hover:text-secondary"
                >
                  GitHub
                </ExternalLink>
              </div>
            </div>

            <form className="grid gap-3" onSubmit={(event) => event.preventDefault()}>
              <input
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-secondary"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-secondary"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className="min-h-28 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-secondary"
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-base/70 px-6 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {profile.name} • {profile.role}
        <ExternalLink href={profile.githubUrl} className="ml-2 text-secondary hover:underline">
          GitHub
        </ExternalLink>
        <ExternalLink href={profile.linkedInUrl} className="ml-2 text-secondary hover:underline">
          LinkedIn
        </ExternalLink>
      </footer>
    </div>
  )
}

export default App
