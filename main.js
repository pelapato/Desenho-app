const canvas = document.querySelector("canvas")
const ctx=canvas.getContext("2d")

const sistema=(px,py)=>{
  ctx.fillStyle="red"
  ctx.arc(px - canvas.offsetLeft,py - canvas.offsetTop,1,1,360,false)
  ctx.fill()
}

canvas.addEventListener('touchmove',(evt)=>{
  let x = evt.touches[0].clientX
  let y = evt.touches[0].clientY
  sistema(x,y)
})