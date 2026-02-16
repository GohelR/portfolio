import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ['AI Engineer', 'ML Developer', 'Full Stack Developer']

const profile = {
  name: 'Ravi Gohel',
  subtitle:
    'I design and ship high-impact AI systems with production-grade ML pipelines, delightful product experiences, and scalable full-stack architecture.',
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
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    title: 'CampusMate – Smart Campus Helper Bot',
    description: 'AI assistant for student support, smart navigation, and multi-intent conversational search.',
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
    description: 'Predictive analytics platform to evaluate startup longevity using behavioral signals.',
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
    description: 'End-to-end flow: backend APIs, model serving, React UI, and cloud deployment.',
    video: 'https://cdn.coverr.co/videos/coverr-data-center-server-racks-1576/1080p.mp4',
  },
]

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Machine Learning', icon: '🧠' },
  { name: 'React', icon: '⚛️' },
  { name: 'Flask', icon: '🧪' },
  { name: 'Streamlit', icon: '📊' },
  { name: 'PostgreSQL', icon: '🐘' },
]

const experienceTimeline = [
  {
    title: 'AI Engineering Internship',
    org: 'Startup R&D Lab',
    date: '2024',
    detail: 'Built model inference APIs, prompt evaluation pipelines, and production monitoring dashboards.',
  },
  {
    title: 'Hackathon Finalist',
    org: 'National AI Build Sprint',
    date: '2023',
    detail: 'Led a team to deliver a real-time AI copilot prototype with full-stack deployment in 48 hours.',
  },
  {
    title: 'Flagship Product Projects',
    org: 'Independent Builder',
    date: '2022 — Present',
    detail: 'Shipped AI products across fintech, education, and predictive analytics with strong UX focus.',
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
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
    const speed = deleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!deleting && typed.length < currentRole.length) return setTyped(currentRole.slice(0, typed.length + 1))
      if (deleting && typed.length > 0) return setTyped(currentRole.slice(0, typed.length - 1))
      if (!deleting && typed.length === currentRole.length) return setTimeout(() => setDeleting(true), 1000)
      if (deleting && typed.length === 0) {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [typed, deleting, roleIndex])

  return (
    <p className="mt-5 text-xl font-semibold text-slate-100 md:text-3xl">
      <span className="hero-gradient-text">{typed}</span>
      <span className="ml-1 animate-pulse text-cyan-300">|</span>
    </p>
  )
}

function LoadingScreen() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#04050b]">
      <div className="text-center">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.2, ease: 'linear' }} className="mx-auto mb-6 h-20 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 p-[2px]">
          <div className="h-full w-full rounded-full bg-[#04050b]" />
        </motion.div>
        <p className="text-sm tracking-[0.4em] text-cyan-200">RAVI.GOHEL</p>
      </div>
    </motion.div>
  )
}

function ExternalLink({ href, className, children }) {
  const isAnchor = href.startsWith('#')
  return (
    <a href={href} className={className} target={isAnchor ? undefined : '_blank'} rel={isAnchor ? undefined : 'noreferrer noopener'}>
      {children}
    </a>
  )
}

function InteractiveBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const context = canvas.getContext('2d')
    if (!context) return undefined

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
    }))

    let animationFrame
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle, idx) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = 'rgba(103, 232, 249, 0.55)'
        context.fill()

        for (let next = idx + 1; next < particles.length; next += 1) {
          const dx = particle.x - particles[next].x
          const dy = particle.y - particles[next].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 120) {
            context.strokeStyle = `rgba(129, 140, 248, ${(120 - distance) / 420})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(particles[next].x, particles[next].y)
            context.stroke()
          }
        }
      })
      animationFrame = window.requestAnimationFrame(render)
    }

    render()
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-70" />
}

function GlowingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (event) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return <motion.div className="pointer-events-none fixed z-[99] hidden h-8 w-8 rounded-full border border-cyan-200/70 bg-cyan-300/25 blur-[1px] md:block" animate={{ x: position.x - 16, y: position.y - 16 }} transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.35 }} />
}

function VideoCard({ item, className }) {
  return (
    <motion.article whileHover={{ y: -6, scale: 1.01 }} className={className}>
      <div className="relative overflow-hidden rounded-t-2xl">
        <video src={item.video} className="h-56 w-full object-cover transition duration-500 group-hover:scale-110" muted loop playsInline preload="none" onMouseEnter={(event) => event.currentTarget.play()} onMouseLeave={(event) => event.currentTarget.pause()} />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 transition group-hover:opacity-100">
          <span className="rounded-full border border-white/40 bg-white/20 px-4 py-2 text-lg backdrop-blur">▶</span>
        </div>
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-slate-300">{item.description}</p>
      </div>
    </motion.article>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const particles = useMemo(() => Array.from({ length: 12 }, (_, idx) => ({ id: idx, left: `${Math.random() * 100}%`, delay: Math.random() * 5, duration: 8 + Math.random() * 8 })), [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <LoadingScreen />

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060d] text-slate-100">
      <GlowingCursor />
      <div className="mesh-bg" />
      <InteractiveBackground />
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {particles.map((p) => (
          <motion.span key={p.id} className="absolute h-2 w-2 rounded-full bg-cyan-300/30" style={{ left: p.left, top: '102%' }} animate={{ y: ['0%', '-110vh'], opacity: [0, 1, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: p.duration, delay: p.delay, ease: 'linear' }} />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/40 backdrop-blur-2xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-sm font-semibold tracking-[0.35em] text-cyan-300">RAVI.GOHEL</a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-slate-200 transition duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">{item.label}</a>
            ))}
          </div>
          <ExternalLink href={profile.resumeUrl} className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-300 transition hover:shadow-[0_0_22px_rgba(34,211,238,0.5)]">Resume</ExternalLink>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-16 pt-8 md:pt-14">
        <section id="hero" className="relative grid min-h-[88vh] items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <p className="glass-chip">Building intelligent products at startup speed</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Futuristic AI Engineer<span className="block hero-gradient-text">{profile.name}</span></h1>
            <TypewriterRoles />
            <p className="mt-6 max-w-xl text-slate-300">{profile.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalLink href="#projects" className="rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(99,102,241,0.55)]">Explore Projects →</ExternalLink>
              <ExternalLink href="#contact" className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]">Let&apos;s Collaborate</ExternalLink>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mx-auto w-full max-w-sm">
            <div className="profile-ring p-[2px]"><div className="rounded-full bg-slate-950/70 p-3 backdrop-blur-2xl"><img src={profile.image} alt="Ravi Gohel" className="aspect-square w-full rounded-full object-cover" loading="lazy" /></div></div>
          </motion.div>

          <a href="#projects" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cyan-300 md:block">
            <motion.span animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }} className="inline-flex items-center gap-2 text-sm">Scroll ↓</motion.span>
          </a>
        </section>

        <motion.section id="projects" className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.article key={project.title} whileHover={{ rotateX: -4, rotateY: 4, y: -10 }} transition={{ type: 'spring', stiffness: 190, damping: 16 }} className="group glass-card glow-border overflow-hidden rounded-2xl" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative overflow-hidden">
                  <video src={project.video} className="h-52 w-full object-cover transition duration-700 group-hover:scale-110" muted loop playsInline preload="none" onMouseEnter={(event) => event.currentTarget.play()} onMouseLeave={(event) => event.currentTarget.pause()} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                </div>
                <div className="space-y-4 p-5">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.tech.map((tech) => (<span key={tech} className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">{tech}</span>))}</div>
                  <div className="flex gap-3">
                    <ExternalLink href={project.github} className="rounded-lg border border-white/20 px-4 py-2 text-xs font-semibold transition hover:border-cyan-300 hover:text-cyan-300">GitHub</ExternalLink>
                    <ExternalLink href={project.demo} className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-xs font-semibold text-white transition group-hover:shadow-[0_0_22px_rgba(99,102,241,0.4)]">Live Demo</ExternalLink>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="showcase" className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <h2 className="section-title">Video Showcase</h2>
          <div className="grid gap-6 md:grid-cols-3">{showcaseVideos.map((item) => (<VideoCard key={item.title} item={item} className="group glass-card glow-border overflow-hidden rounded-2xl" />))}</div>
        </motion.section>

        <motion.section id="skills" className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid gap-5 md:grid-cols-3">{skills.map((skill) => (<motion.div key={skill.name} whileHover={{ y: -5, scale: 1.02 }} className="glass-card glow-border rounded-2xl p-5"><p className="mb-3 text-2xl">{skill.icon}</p><p className="font-semibold text-white">{skill.name}</p></motion.div>))}</div>
        </motion.section>

        <motion.section id="experience" className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={sectionVariants}>
          <h2 className="section-title">Experience Timeline</h2>
          <div className="relative ml-2 border-l border-cyan-300/30 pl-8 md:ml-6 md:pl-10">{experienceTimeline.map((item, index) => (<motion.article key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.5 }} className="relative mb-8 last:mb-0"><span className="absolute -left-[2.55rem] top-3 h-4 w-4 rounded-full border border-cyan-200/70 bg-cyan-300/30 shadow-[0_0_16px_rgba(34,211,238,0.7)]" /><div className="glass-card rounded-2xl p-5"><p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.date}</p><h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3><p className="text-sm text-violet-200">{item.org}</p><p className="mt-2 text-sm text-slate-300">{item.detail}</p></div></motion.article>))}</div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} className="glass-card glow-border rounded-2xl p-6">
          <h2 className="section-title">Contact</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-slate-300">
              <p>✉️ {profile.email}</p><p>📍 {profile.location}</p>
              <div className="pt-2"><ExternalLink href={`mailto:${profile.email}`} className="mr-3 inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 px-4 py-2 text-cyan-200 transition hover:shadow-[0_0_18px_rgba(34,211,238,0.45)]">🚀 Email Me</ExternalLink></div>
              <div className="flex gap-4 pt-2 text-sm"><ExternalLink href={profile.githubUrl} className="text-cyan-300 transition hover:scale-110 hover:text-cyan-200">GitHub</ExternalLink><ExternalLink href={profile.linkedInUrl} className="text-cyan-300 transition hover:scale-110 hover:text-cyan-200">LinkedIn</ExternalLink></div>
            </div>
            <form className="grid gap-3" onSubmit={(event) => event.preventDefault()}>
              <input className="contact-input" placeholder="Your Name" /><input className="contact-input" placeholder="Your Email" type="email" /><textarea className="contact-input min-h-28" placeholder="Your Message" />
              <button type="submit" className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-[0_0_24px_rgba(6,182,212,0.55)]">Send Message</button>
            </form>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
