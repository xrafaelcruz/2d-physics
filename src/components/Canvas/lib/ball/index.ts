export const createBall = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath()
    ctx.arc(100, 100, 10, 0, 2*Math.PI)
    ctx.strokeStyle = 'black'
    ctx.stroke()
    ctx.fillStyle = 'red'
    ctx.fill()
}