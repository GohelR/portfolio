import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ['AI Engineer', 'Machine Learning Developer', 'Full Stack Developer']

const profile = {
  name: 'Ravi Gohel',
  subtitle:
    'I design and ship high-impact AI products with production-grade ML pipelines, modern web experiences, and real-time intelligent systems.',
  location: 'Rajkot, Gujarat, India',
  email: 'ravi.n.gohel811@gmail.com',
  resumeUrl: 'https://drive.google.com/',
  githubUrl: 'https://github.com/ravi-gohel',
  linkedInUrl: 'https://linkedin.com/in/ravi-gohel',
  image:
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=900&q=80',
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    title: 'CampusMate – Smart Campus Helper Bot',
    description: 'AI assistant for student support, smart campus navigation, and multi-intent conversational search.',
    tech: ['Python', 'NLP', 'Flask', 'Streamlit'],
    github: 'https://github.com/ravi-gohel/campusmate',
    demo: 'https://campusmate-demo.vercel.app/',
    video: 'https://cdn.coverr.co/videos/coverr-working-with-a-robotic-arm-1579/1080p.mp4',
  },
  {
    title: 'FraudShield AI – Fraud Detection Platform',
    description: 'Real-time fraud scoring engine with anomaly detection and explainable machine learning outputs.',
    tech: ['Machine Learning', 'Python', 'PostgreSQL'],
    github: 'https://github.com/ravi-gohel/fraudshield-ai',
    demo: 'https://fraudshield-ai-demo.vercel.app/',
    video: 'https://cdn.coverr.co/videos/coverr-futuristic-data-center-1577/1080p.mp4',
  },
  {
    title: 'AI Startup Survival Prediction System',
    description: 'Predictive analytics platform to evaluate startup longevity using historical and behavioral signals.',
    tech: ['ML Modeling', 'Analytics', 'Flask'],
    github: 'https://github.com/ravi-gohel/startup-survival-prediction',
    demo: 'https://startup-survival-demo.vercel.app/',
    video: 'https://cdn.coverr.co/videos/coverr-programming-at-night-1574/1080p.mp4',
  },
]

const showcaseVideos = [
  {
    title: 'GenAI Product Demo Reel',
    description: 'Prompt-to-production demos of AI agents, retrieval workflows, and automation projects.',
    video: 'https://cdn.coverr.co/videos/coverr-digital-network-connections-9717/1080p.mp4',
  },
  {
    title: 'ML Dashboard Walkthrough',
    description: 'Interactive monitoring of model performance, feature drift, and inference latency.',
    video: 'https://cdn.coverr.co/videos/coverr-coding-with-multiple-screens-1573/1080p.mp4',
  },
  {
    title: 'Full Stack AI App Showcase',
    description: 'End-to-end product flow: backend APIs, model serving, modern React UI, and deployment.',
    video: 'https://cdn.coverr.co/videos/coverr-data-center-server-racks-1576/1080p.mp4',
  },
]

const skills = [
  { name: 'Python', level: 95, icon: '🐍' },
  { name: 'AI Systems', level: 92, icon: '🤖' },
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'Machine Learning', level: 93, icon: '🧠' },
  { name: 'Flask', level: 88, icon: '🌶️' },
  { name: 'Streamlit', level: 86, icon: '📊' },
]

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

function TypewriterRoles() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = deleting ? 45 : 85

    const timer = setTimeout(() => {
      if (!deleting && typed.length < currentRole.length) {
        setTyped(currentRole.slice(0, typed.length + 1))
        return
      }

      if (deleting && typed.length > 0) {
        setTyped(currentRole.slice(0, typed.length - 1))
        return
      }

      if (!deleting && typed.length === currentRole.length) {
        setTimeout(() => setDeleting(true), 1200)
        return
      }

      if (deleting && typed.length === 0) {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [typed, deleting, roleIndex])

  return (
    <p className="mt-4 text-xl font-medium text-slate-200 md:text-2xl">
      <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
        {typed}
      </span>
      <span className="ml-1 animate-pulse text-cyan-300">|</span>
    </p>
  )
}

function ExternalLink({ href, className, children }) {
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

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        id: index,
        size: Math.floor(Math.random() * 6) + 4,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 10,
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/20"
          style={{ width: particle.size, height: particle.size, left: particle.left, top: '105%' }}
          animate={{ y: ['0%', '-120vh'], opacity: [0, 1, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-slate-100">
      <FloatingParticles />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(99,102,241,0.35),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.22),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.18),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/45 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-base font-semibold tracking-[0.2em] text-cyan-300 md:text-lg">
            RAVI.GOHEL
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-slate-200 transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>
          <ExternalLink
            href={profile.resumeUrl}
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-medium text-cyan-300 transition hover:shadow-[0_0_18px_rgba(34,211,238,0.5)]"
          >
            Resume
          </ExternalLink>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-16 pt-12 md:pt-20">
        <section id="hero" className="relative grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-lg">
              Premium AI Engineer Portfolio
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                Ravi Gohel
              </span>
            </h1>
            <TypewriterRoles />
            <p className="mt-6 max-w-xl text-slate-300">{profile.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalLink
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]"
              >
                Explore Projects
              </ExternalLink>
              <ExternalLink
                href="#contact"
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]"
              >
                Let&apos;s Collaborate
              </ExternalLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="animate-float rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 p-1">
              <div className="rounded-full bg-slate-900/80 p-3 backdrop-blur-xl">
                <img
                  src={profile.image}
                  alt="Ravi Gohel"
                  className="aspect-square w-full rounded-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="projects"
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                className="group overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl"
              >
                <div className="relative">
                  <video
                    src={project.video}
                    className="h-48 w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                </div>
                <div className="space-y-4 p-5">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((skill) => (
                      <span key={skill} className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <ExternalLink
                      href={project.github}
                      className="rounded-lg border border-white/20 px-4 py-2 text-xs font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
                    >
                      GitHub
                    </ExternalLink>
                    <ExternalLink
                      href={project.demo}
                      className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-xs font-semibold text-white transition group-hover:shadow-[0_0_24px_rgba(79,70,229,0.35)]"
                    >
                      Live Demo
                    </ExternalLink>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="showcase"
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">Video Showcase</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {showcaseVideos.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ scale: 1.02 }}
                className="group overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl"
              >
                <div className="relative">
                  <video
                    src={item.video}
                    className="h-52 w-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/25 transition group-hover:bg-slate-950/40">
                    <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xl backdrop-blur">▶</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill) => (
              <motion.div key={skill.name} whileHover={{ scale: 1.01 }} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-200">
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </p>
                  <span className="text-xs text-cyan-300">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-700/70">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-slate-300">
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a className="text-cyan-300 hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span> {profile.location}
              </p>
              <div className="pt-2">
                <ExternalLink href={profile.githubUrl} className="mr-3 text-cyan-300 hover:underline">
                  GitHub
                </ExternalLink>
                <ExternalLink href={profile.linkedInUrl} className="text-cyan-300 hover:underline">
                  LinkedIn
                </ExternalLink>
              </div>
            </div>
            <form className="grid gap-3" onSubmit={(event) => event.preventDefault()}>
              <input className="rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-sm" placeholder="Your Name" />
              <input
                className="rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-sm"
                placeholder="Your Email"
                type="email"
              />
              <textarea
                className="min-h-28 rounded-lg border border-white/20 bg-slate-900/50 px-4 py-3 text-sm"
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-[0_0_24px_rgba(6,182,212,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
