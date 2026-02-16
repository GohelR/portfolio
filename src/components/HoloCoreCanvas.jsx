import { useEffect, useRef } from 'react'

export default function HoloCoreCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return undefined

    const mouse = { x: 0, y: 0 }
    let raf = 0
    let t = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = canvas.clientWidth * ratio
      canvas.height = canvas.clientHeight * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const draw = () => {
      t += 0.015
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      ctx.clearRect(0, 0, width, height)

      ctx.save()
      ctx.translate(width / 2 + mouse.x * 18, height / 2 + mouse.y * 18)

      for (let i = 0; i < 14; i += 1) {
        const angle = t * (0.6 + i * 0.06)
        const radius = 28 + i * 8 + Math.sin(t * 2 + i) * 2
        const alpha = 0.2 + i * 0.04

        ctx.beginPath()
        for (let p = 0; p <= 6; p += 1) {
          const a = (Math.PI * 2 * p) / 6 + angle
          const x = Math.cos(a) * radius
          const y = Math.sin(a) * radius * 0.58
          p === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(103, 232, 249, ${Math.min(alpha, 0.85)})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      const glow = 14 + Math.sin(t * 2.5) * 3
      ctx.beginPath()
      ctx.arc(0, 0, glow, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(34, 211, 238, 0.8)'
      ctx.shadowColor = 'rgba(34, 211, 238, 0.9)'
      ctx.shadowBlur = 25
      ctx.fill()
      ctx.restore()

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMove)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="h-[380px] rounded-3xl border border-cyan-300/25 bg-slate-950/60 p-1">
      <canvas ref={canvasRef} className="h-full w-full rounded-[1.35rem]" />
      <p className="pointer-events-none -mt-6 text-center text-xs text-cyan-200/80">Interactive AI Core · hover to influence orbital field</p>
    </div>
  )
}
