import { useEffect, useRef } from 'react'
import styles from '../styles/Background.module.css'

/**
 * Animated network-node canvas — fixed, full-viewport, behind all content.
 * Node count and speed are kept low intentionally so it stays subtle.
 */
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    const NODE_COUNT = 50
    const MAX_DIST = 155

    // Resize canvas to always fill the viewport
    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Each node has position, velocity, and radius
    class Node {
      constructor() {
        this.x  = Math.random() * canvas.width
        this.y  = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.r  = Math.random() * 1.4 + 0.4
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width)  this.vx *= -1
        if (this.y < 0 || this.y > canvas.height)  this.vy *= -1
      }
    }

    const nodes = Array.from({ length: NODE_COUNT }, () => new Node())

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update positions
      nodes.forEach(n => n.update())

      // Draw connecting lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)

          if (d < MAX_DIST) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(160,160,180,${(1 - d / MAX_DIST) * 0.28})`
            ctx.lineWidth   = 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw node dots
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(180,180,200,0.55)'
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
