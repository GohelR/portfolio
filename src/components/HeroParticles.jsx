import { useEffect, useMemo, useState } from 'react'

function HeroParticles() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })
  const dots = useMemo(
    () =>
      Array.from({ length: 34 }, (_, idx) => ({
        id: idx,
        x: Math.random() * size.w,
        y: Math.random() * size.h,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 0.4 + 0.15,
      })),
    [size.h, size.w],
  )

  useEffect(() => {
    const resize = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="particle-dot"
          style={{
            width: `${dot.radius * 2}px`,
            height: `${dot.radius * 2}px`,
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            animationDuration: `${6 + dot.speedY * 8}s`,
            animationDelay: `${dot.id * 0.09}s`,
          }}
        />
      ))}
    </div>
  )
}

export default HeroParticles
