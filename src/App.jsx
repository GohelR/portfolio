import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react'

const HeroParticles = lazy(() => import('./components/HeroParticles'))
const HoloCoreCanvas = lazy(() => import('./components/HoloCoreCanvas'))

const roles = ['AI Engineer', 'Machine Learning Developer', 'Full Stack Engineer', 'AI Product Builder']

const profile = {
  name: 'Ravi Gohel',
  subtitle:
    'I design premium AI products with production-grade model systems, cinematic UX, and high-performance full stack architecture.',
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
  { id: 'neural-core', label: '3D Core' },
  { id: 'activity', label: 'Activity' },
  { id: 'skills', label: 'Skills' },
  { id: 'terminal', label: 'Terminal' },
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

const skills = [
  { name: 'Python / Data Science', level: 96 },
  { name: 'Machine Learning Systems', level: 94 },
  { name: 'LLM Engineering', level: 92 },
  { name: 'React + Frontend Architecture', level: 91 },
  { name: 'Backend APIs & MLOps', level: 89 },
  { name: 'Product & UX Thinking', level: 90 },
]

const featuredRepos = [
  { name: 'campusmate', description: 'Conversational assistant for student support workflows.', stars: '46', lang: 'Python' },
  { name: 'fraudshield-ai', description: 'Anomaly-powered real-time fraud intelligence service.', stars: '39', lang: 'Python' },
  { name: 'startup-survival-prediction', description: 'ML forecasting product for startup health scoring.', stars: '31', lang: 'Jupyter' },
]

function TypewriterRoles() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = deleting ? 45 : 75

    const timer = setTimeout(() => {
      if (!deleting && typed.length < currentRole.length) return setTyped(currentRole.slice(0, typed.length + 1))
      if (deleting && typed.length > 0) return setTyped(currentRole.slice(0, typed.length - 1))
      if (!deleting && typed.length === currentRole.length) return setTimeout(() => setDeleting(true), 1200)
      if (deleting && typed.length === 0) {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [typed, deleting, roleIndex])

  return (
    <p className="mt-6 text-xl font-semibold text-slate-100 md:text-3xl">
      <span className="hero-gradient-text">{typed}</span>
      <span className="ml-1 animate-pulse text-cyan-300">|</span>
    </p>
  )
}

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#02030a]">
      <div className="text-center">
        <div className="loading-ring mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 p-[2px]">
          <div className="h-full w-full rounded-full bg-[#02030a]" />
        </div>
        <p className="loader-text text-xs uppercase text-cyan-200">Initializing Neural Portfolio</p>
      </div>
    </div>
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

function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -999, y: -999 })

  useEffect(() => {
    const update = (event) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return (
    <>
      <div className="pointer-events-none fixed z-[95] hidden h-10 w-10 rounded-full border border-cyan-200/60 bg-cyan-300/20 md:block" style={{ transform: `translate(${position.x - 20}px, ${position.y - 20}px)` }} />
      <div className="pointer-events-none fixed inset-0 z-[2] hidden md:block" style={{ background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.18), rgba(4,6,18,0.02) 35%, rgba(4,6,18,0.5) 60%)` }} />
    </>
  )
}

function ProjectCard({ project, onOpen }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article className="project-card group glass-card glow-border overflow-hidden rounded-2xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative overflow-hidden">
        <video src={project.video} className="h-52 w-full object-cover transition duration-700 group-hover:scale-110" muted loop playsInline preload="none" autoPlay={hovered} onMouseEnter={(event) => event.currentTarget.play()} onMouseLeave={(event) => event.currentTarget.pause()} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>
      <div className="space-y-4 p-5">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">{tech}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <ExternalLink href={project.github} className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold transition hover:border-cyan-300 hover:text-cyan-300">GitHub</ExternalLink>
          <ExternalLink href={project.demo} className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-xs font-semibold text-white transition hover:shadow-[0_0_22px_rgba(99,102,241,0.45)]">Live Demo</ExternalLink>
          <button onClick={() => onOpen(project)} type="button" className="rounded-lg border border-violet-300/35 bg-violet-300/10 px-4 py-2 text-xs font-semibold text-violet-100 transition hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]">Expand</button>
        </div>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-[130] grid place-items-center bg-black/70 px-4" onClick={onClose}>
      <div className="glass-card glow-border w-full max-w-3xl overflow-hidden rounded-2xl" onClick={(event) => event.stopPropagation()}>
        <video src={project.video} className="h-64 w-full object-cover" autoPlay muted loop playsInline />
        <div className="space-y-4 p-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">{tech}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <ExternalLink href={project.github} className="rounded-lg border border-white/25 px-4 py-2 text-sm">GitHub</ExternalLink>
            <ExternalLink href={project.demo} className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white">Live Demo</ExternalLink>
            <button type="button" onClick={onClose} className="rounded-lg border border-rose-300/35 bg-rose-400/10 px-4 py-2 text-sm text-rose-100">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function TerminalTyping() {
  const lines = ['> initializing AI systems...', '> loading ML models...', '> Ravi Gohel portfolio ready.']
  const [lineIdx, setLineIdx] = useState(0)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (lineIdx >= lines.length) return undefined
    const line = lines[lineIdx]

    const timer = setTimeout(() => {
      if (typed.length < line.length) {
        setTyped(line.slice(0, typed.length + 1))
      } else {
        setTimeout(() => {
          setLineIdx((prev) => prev + 1)
          setTyped('')
        }, 450)
      }
    }, 45)

    return () => clearTimeout(timer)
  }, [typed, lineIdx])

  return (
    <div className="rounded-2xl border border-cyan-200/20 bg-[#060914] p-5 font-mono text-sm text-cyan-100 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      {lines.slice(0, lineIdx).map((line) => (
        <p key={line} className="mb-1">{line}</p>
      ))}
      {lineIdx < lines.length && (
        <p>
          {typed}
          <span className="animate-pulse">▋</span>
        </p>
      )}
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const heroRef = useRef(null)
  const particles = useMemo(() => Array.from({ length: 20 }, (_, idx) => ({ id: idx, left: `${Math.random() * 100}%`, delay: Math.random() * 4, duration: 8 + Math.random() * 6 })), [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <LoadingScreen />

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#03040a] text-slate-100">
      <CursorSpotlight />
      <div className="mesh-bg" />
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {particles.map((particle) => (
          <span key={particle.id} className="absolute h-2 w-2 rounded-full bg-cyan-300/25 particle-rise" style={{ left: particle.left, top: '104%', animationDuration: `${particle.duration}s`, animationDelay: `${particle.delay}s` }} />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-2xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-sm font-semibold tracking-[0.35em] text-cyan-300">RAVI.GOHEL</a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-slate-200 transition duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">{item.label}</a>
            ))}
          </div>
          <ExternalLink href={profile.resumeUrl} className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-300 transition hover:shadow-[0_0_22px_rgba(34,211,238,0.5)]">Resume</ExternalLink>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-16 pt-8 md:pt-14">
        <section id="hero" ref={heroRef} className="relative grid min-h-[95vh] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Suspense fallback={null}><HeroParticles /></Suspense>
          <div className="section-entrance">
            <p className="glass-chip">Premium AI Product Engineering</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Building future-ready AI experiences<span className="block hero-gradient-text">{profile.name}</span></h1>
            <TypewriterRoles />
            <p className="mt-6 max-w-xl text-slate-300">{profile.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalLink href="#projects" className="energy-button rounded-xl px-6 py-3 text-sm font-semibold text-white">Explore Projects →</ExternalLink>
              <ExternalLink href="#contact" className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]">Let&apos;s Collaborate</ExternalLink>
            </div>
          </div>

          <div className="section-entrance mx-auto w-full max-w-sm"><div className="profile-ring p-[2px]"><div className="rounded-full bg-slate-950/70 p-3 backdrop-blur-2xl"><img src={profile.image} alt="Ravi Gohel" className="aspect-square w-full rounded-full object-cover" loading="lazy" /></div></div></div>
          <a href="#projects" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-300 animate-bounce">Scroll ↓</a>
        </section>

        <section id="projects" className="section-entrance space-y-6">
          <h2 className="section-title">Next-Gen Project Showcase</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => (<ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />))}</div>
        </section>

        <section id="neural-core" className="section-entrance space-y-6">
          <h2 className="section-title">Interactive Neural Core</h2>
          <div className="glass-card glow-border overflow-hidden rounded-3xl p-2"><Suspense fallback={<div className="grid h-[360px] place-items-center text-cyan-200">Loading 3D core...</div>}><HoloCoreCanvas /></Suspense></div>
        </section>

        <section id="activity" className="section-entrance space-y-6">
          <h2 className="section-title">Live GitHub Activity</h2>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-card glow-border rounded-2xl p-4"><img loading="lazy" src="https://github-readme-stats.vercel.app/api?username=ravi-gohel&show_icons=true&theme=tokyonight&hide_border=true" alt="GitHub stats" className="w-full rounded-xl" /></div>
            <div className="glass-card glow-border rounded-2xl p-4"><img loading="lazy" src="https://github-readme-streak-stats.herokuapp.com/?user=ravi-gohel&theme=tokyonight&hide_border=true" alt="GitHub streak" className="w-full rounded-xl" /></div>
          </div>
          <div className="glass-card glow-border rounded-2xl p-4"><img loading="lazy" src="https://ghchart.rshah.org/22d3ee/ravi-gohel" alt="GitHub contribution graph" className="w-full rounded-xl bg-slate-950/40 p-2" /></div>
          <div className="grid gap-4 md:grid-cols-3">{featuredRepos.map((repo) => (<article key={repo.name} className="glass-card repo-card rounded-2xl p-4"><p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{repo.lang}</p><h3 className="mt-2 text-lg font-semibold text-white">{repo.name}</h3><p className="mt-2 text-sm text-slate-300">{repo.description}</p><p className="mt-3 text-xs text-amber-300">★ {repo.stars}</p></article>))}</div>
        </section>

        <section id="skills" className="section-entrance space-y-6">
          <h2 className="section-title">Skill Systems</h2>
          <div className="grid gap-4">{skills.map((skill) => (<div key={skill.name} className="glass-card rounded-2xl p-4"><div className="mb-2 flex items-center justify-between text-sm"><span className="font-semibold text-white">{skill.name}</span><span className="text-cyan-300">{skill.level}%</span></div><div className="h-2 rounded-full bg-slate-700/50"><div className="skill-fill h-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400" style={{ width: `${skill.level}%` }} /></div></div>))}</div>
        </section>

        <section id="terminal" className="section-entrance space-y-6"><h2 className="section-title">AI Terminal</h2><TerminalTyping /></section>

        <section id="contact" className="section-entrance glass-card glow-border rounded-2xl p-6">
          <h2 className="section-title">Contact</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-slate-300"><p>✉️ {profile.email}</p><p>📍 {profile.location}</p><div className="pt-2"><ExternalLink href={`mailto:${profile.email}`} className="mr-3 inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 px-4 py-2 text-cyan-200 transition hover:shadow-[0_0_18px_rgba(34,211,238,0.45)]">🚀 Email Me</ExternalLink></div><div className="flex gap-4 pt-2 text-sm"><ExternalLink href={profile.githubUrl} className="text-cyan-300 transition hover:scale-110 hover:text-cyan-200">GitHub</ExternalLink><ExternalLink href={profile.linkedInUrl} className="text-cyan-300 transition hover:scale-110 hover:text-cyan-200">LinkedIn</ExternalLink></div></div>
            <form className="grid gap-3" onSubmit={(event) => event.preventDefault()}><input className="contact-input" placeholder="Your Name" /><input className="contact-input" placeholder="Your Email" type="email" /><textarea className="contact-input min-h-28" placeholder="Your Message" /><button type="submit" className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-[0_0_24px_rgba(6,182,212,0.55)]">Send Message</button></form>
          </div>
        </section>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default App
