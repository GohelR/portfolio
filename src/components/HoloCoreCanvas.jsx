import { useEffect, useRef } from 'react'

function HoloCoreCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let raf
    let t = 0
    const mouse = { x: 0, y: 0 }

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio
      canvas.height = canvas.clientHeight * window.devicePixelRatio
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const drawPoly = (radius, sides, offset, hue) => {
      ctx.beginPath()
      for (let i = 0; i <= sides; i += 1) {
        const a = (i / sides) * Math.PI * 2 + offset
        const x = Math.cos(a) * radius
        const y = Math.sin(a) * radius * 0.6
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = `hsla(${hue}, 100%, 70%, 0.75)`
      ctx.lineWidth = 1.2
      ctx.stroke()
    }

    const render = () => {
      t += 0.014
      const width = canvas.clientWidth
      const height = canvas.clientHeight

      ctx.clearRect(0, 0, width, height)
      ctx.save()
      ctx.translate(width / 2 + mouse.x * 25, height / 2 + mouse.y * 20)

      for (let i = 0; i < 8; i += 1) {
        drawPoly(36 + i * 18 + Math.sin(t + i) * 4, 6, t * (1 + i * 0.14), 180 + i * 14)
      }

      ctx.beginPath()
      ctx.arc(0, 0, 12 + Math.sin(t * 2) * 2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(56, 189, 248, 0.75)'
      ctx.shadowBlur = 30
      ctx.shadowColor = 'rgba(56, 189, 248, 0.9)'
      ctx.fill()

      ctx.restore()
      raf = window.requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMove)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="relative h-[360px] rounded-3xl bg-slate-950/70">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-sm text-cyan-100/70">
        Move cursor to interact with the holographic core
      </div>
    </div>
  )
}

export default HoloCoreCanvas
