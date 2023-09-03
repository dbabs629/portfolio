import { useRef, useEffect } from 'react'

export default function CanvasAnimate() {
  const canvasRef = useRef(null)

  const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4,
  }

  let draw = (ctx) => {
    ctx.globalAlpha = 0.7
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
    ctx.fillStyle = '#74C7FE'
    ctx.fill()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      draw(ctx)

      circle.x += circle.dx
      circle.y += circle.dy

      if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1
      }

      if (
        circle.y + circle.size > canvas.height ||
        circle.y - circle.size < 0
      ) {
        circle.dy *= -1
      }

      requestAnimationFrame(update)
    }
    update(ctx)
  }, [draw, circle])

  return (
    <canvas ref={canvasRef} className='fixed z-0' width='800' height='800' />
  )
}
