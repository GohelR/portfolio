import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import HeroParticles from './components/HeroParticles'
import HoloCoreCanvas from './components/HoloCoreCanvas'

const bootSteps = [
  'Initializing Ravi AI Engine...',
  'Loading ML Models...',
  'Connecting Neural Systems...',
  'Welcome, visitor.',
]

const navItems = [
  { id: 'core', label: 'Core' },
  { id: 'lab', label: 'Project Lab' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    id: 'campusmate',
    title: 'CampusMate AI Assistant',
    description: 'Multi-intent campus intelligence layer for student navigation and support.',
    tech: ['Python', 'Flask', 'NLP', 'Streamlit'],
    video: 'https://cdn.coverr.co/videos/coverr-futuristic-data-center-1577/1080p.mp4',
    architecture: ['Input Router', 'Intent Classifier', 'Knowledge Memory', 'Response Generator'],
    github: 'https://github.com/ravi-gohel/campusmate',
    demo: 'https://campusmate-demo.vercel.app/',
  },
  {
    id: 'fraudshield',
    title: 'FraudShield AI',
    description: 'Real-time fraud scoring engine with explainable anomaly decisions.',
    tech: ['Python', 'XGBoost', 'PostgreSQL', 'FastAPI'],
    video: 'https://cdn.coverr.co/videos/coverr-working-with-a-robotic-arm-1579/1080p.mp4',
    architecture: ['Event Stream', 'Feature Store', 'Risk Inference', 'Alert Pipeline'],
    github: 'https://github.com/ravi-gohel/fraudshield-ai',
    demo: 'https://fraudshield-ai-demo.vercel.app/',
  },
  {
    id: 'survival',
    title: 'Startup Survival Prediction',
    description: 'Behavioral signal forecasting system for startup longevity.',
    tech: ['Scikit-learn', 'Pandas', 'Flask', 'Analytics'],
    video: 'https://cdn.coverr.co/videos/coverr-programming-at-night-1574/1080p.mp4',
    architecture: ['Data Ingestion', 'Feature Engineering', 'Ensemble Models', 'Insight Dashboard'],
    github: 'https://github.com/ravi-gohel/startup-survival-prediction',
    demo: 'https://startup-survival-demo.vercel.app/',
  },
]

const metrics = [
  { label: 'Projects Built', value: 8, suffix: '+' },
  { label: 'AI Models Created', value: 12, suffix: '+' },
  { label: 'Hackathons Participated', value: 6, suffix: '+' },
  { label: 'Deployment Success Rate', value: 100, suffix: '%' },
]

const assistantAnswers = {
  'who is ravi':
    'Ravi Gohel is an AI engineer focused on building production-ready intelligent products with polished UX and robust ML systems.',
  'what projects has ravi built':
    'Ravi has built projects like CampusMate AI Assistant, FraudShield AI, and Startup Survival Prediction with full-stack delivery.',
  'what skills does ravi have':
    'Ravi specializes in Python, ML systems, LLM workflows, React interfaces, FastAPI backends, and deployment architecture.',
}

function BootSequence({ onFinish }) {
  const [visibleLines, setVisibleLines] = useState([])

  useEffect(() => {
    const timers = bootSteps.map((step, index) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, step])
        if (index === bootSteps.length - 1) {
          setTimeout(onFinish, 700)
        }
      }, index * 650),
    )

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#02040d]">
      <div className="w-full max-w-2xl rounded-xl border border-cyan-400/30 bg-black/55 p-6 font-mono text-cyan-300 shadow-[0_0_80px_rgba(6,182,212,0.25)]">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-100/70">Ravi AI OS Bootloader</p>
        {bootSteps.map((line) => (
          <p key={line} className={`boot-line ${visibleLines.includes(line) ? 'is-visible' : ''}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame
    let start

    const run = (time) => {
      if (!start) start = time
      const progress = Math.min((time - start) / 1200, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) frame = requestAnimationFrame(run)
    }

    frame = requestAnimationFrame(run)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi, I am Ravi AI Assistant. Ask: “Who is Ravi?”, “What projects has Ravi built?”, or “What skills does Ravi have?”' },
  ])

  const handleAsk = (question) => {
    if (!question.trim()) return
    const normalized = question.toLowerCase().replace(/[?]/g, '').trim()
    const answer = assistantAnswers[normalized] ?? 'Query understood. Ravi is currently training this knowledge module. Please try one of the sample prompts.'

    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: answer }])
      setTyping(false)
    }, 950)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[120] w-[min(360px,calc(100vw-2rem))]">
      <button type="button" onClick={() => setOpen((prev) => !prev)} className="mb-3 w-full rounded-xl border border-cyan-300/40 bg-cyan-400/15 px-4 py-3 text-left text-sm font-semibold text-cyan-100 backdrop-blur">
        {open ? 'Close Ravi AI Assistant' : 'Open Ravi AI Assistant'}
      </button>
      {open && (
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-950/90 p-4 shadow-[0_0_35px_rgba(6,182,212,0.35)]">
          <div className="max-h-64 space-y-2 overflow-auto pr-1 text-sm">
            {messages.map((msg, index) => (
              <p key={`${msg.role}-${index}`} className={msg.role === 'ai' ? 'text-cyan-100' : 'text-indigo-200'}>
                <span className="font-semibold">{msg.role === 'ai' ? 'AI' : 'You'}:</span> {msg.text}
              </p>
            ))}
            {typing && <p className="text-cyan-300">AI is typing<span className="typing-dots">...</span></p>}
          </div>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(event) => {
              event.preventDefault()
              handleAsk(input)
            }}
          >
            <input value={input} onChange={(event) => setInput(event.target.value)} className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100" placeholder="Ask Ravi AI..." />
            <button type="submit" className="rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-2 text-xs font-semibold">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}


function AnimatedSection({ id, className = '', children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={`${className} reveal ${visible ? 'is-visible' : ''}`}>
      {children}
    </section>
  )
}

function App() {
  const [booting, setBooting] = useState(true)
  const [activeProject, setActiveProject] = useState(projects[0])
  const [terminalMode, setTerminalMode] = useState(false)
  const containerRef = useRef(null)

  const onBootFinish = useCallback(() => setBooting(false), [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const className = `app-shell ${terminalMode ? 'terminal-mode' : ''}`

  const parallaxStyle = useMemo(() => ({
    transform: terminalMode ? 'none' : 'translateY(var(--parallax-shift, 0px))',
  }), [terminalMode])

  useEffect(() => {
    const handler = () => {
      const top = window.scrollY * -0.08
      if (containerRef.current) containerRef.current.style.setProperty('--parallax-shift', `${top}px`)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className={className} ref={containerRef}>
      {booting && <BootSequence onFinish={onBootFinish} />}
      <HeroParticles />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button type="button" onClick={() => scrollTo('core')} className="text-xs tracking-[0.35em] text-cyan-200">RAVI.AI.SYSTEM</button>
          <div className="hidden gap-4 md:flex">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className="text-sm text-slate-300 transition hover:text-cyan-200">
                {item.label}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setTerminalMode((prev) => !prev)} className="rounded-full border border-cyan-300/40 px-3 py-1 text-xs text-cyan-200">
            {terminalMode ? 'UI Mode' : 'Terminal Mode'}
          </button>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-24 px-5 py-10" style={parallaxStyle}>
        <AnimatedSection id="core" className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="chip">AI SYSTEM ENTRY</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">Enter Ravi Gohel&apos;s Immersive AI Interface</h1>
            <p className="mt-4 text-slate-300">A cinematic portfolio transformed into an AI operating environment with live modules, neural visuals, and intelligent interaction.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={() => scrollTo('lab')} className="cta">Launch Project Lab</button>
              <button type="button" onClick={() => scrollTo('terminal')} className="ghost-btn">Open Terminal</button>
            </div>
          </div>
          <HoloCoreCanvas />
        </AnimatedSection>

        <AnimatedSection id="lab" className="panel">
          <h2 className="section-title">Interactive Project Lab</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-3">
              {projects.map((project) => (
                <button key={project.id} type="button" onClick={() => setActiveProject(project)} className={`project-tab ${activeProject.id === project.id ? 'active' : ''}`}>
                  <p className="font-semibold text-slate-100">{project.title}</p>
                  <p className="mt-1 text-xs text-slate-400">{project.description}</p>
                </button>
              ))}
            </div>
            <article className="module-card">
              <video src={activeProject.video} autoPlay loop muted playsInline className="h-52 w-full rounded-xl object-cover" />
              <h3 className="mt-4 text-2xl font-semibold text-white">{activeProject.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeProject.tech.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {activeProject.architecture.map((node) => (
                  <div key={node} className="arch-node">{node}</div>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a className="ghost-btn" href={activeProject.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="cta" href={activeProject.demo} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          </div>
        </AnimatedSection>

        <AnimatedSection id="metrics" className="panel">
          <h2 className="section-title">Live AI Metrics Dashboard</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="text-3xl font-bold text-cyan-200">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="terminal" className="panel font-mono">
          <h2 className="section-title">AI Terminal Mode</h2>
          <div className="terminal-window mt-4">
            <p>&gt; boot --ravi-ai --interactive</p>
            <p>&gt; modules loaded: project-lab, assistant, metrics, neural-core</p>
            <p>&gt; status: <span className="text-emerald-300">ONLINE</span></p>
            <p>&gt; tip: use the top-right toggle to switch complete UI into terminal styling.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="panel">
          <h2 className="section-title">Connect to Ravi</h2>
          <p className="mt-3 text-slate-300">Email: ravi.n.gohel811@gmail.com</p>
          <p className="text-slate-300">GitHub: github.com/ravi-gohel</p>
          <p className="text-slate-300">LinkedIn: linkedin.com/in/ravi-gohel</p>
        </AnimatedSection>
      </main>

      <ChatAssistant />
    </div>
  )
}

export default App
