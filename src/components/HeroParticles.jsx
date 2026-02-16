import { useEffect, useMemo, useState } from 'react'

export default function HeroParticles() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })
  const [cursor, setCursor] = useState({ x: -300, y: -300 })

  const dots = useMemo(
    () =>
      Array.from({ length: 90 }, (_, id) => ({
        id,
        left: Math.random() * size.w,
        top: Math.random() * size.h,
        duration: 9 + Math.random() * 12,
        delay: Math.random() * 6,
        size: Math.random() * 2.8 + 1,
      })),
    [size.h, size.w],
  )

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    const onMove = (event) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1]" style={{ background: `radial-gradient(260px circle at ${cursor.x}px ${cursor.y}px, rgba(56,189,248,0.18), transparent 48%)` }} />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {dots.map((dot) => (
          <span
            key={dot.id}
            className="data-particle"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}px`,
              top: `${dot.top}px`,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
