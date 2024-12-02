const canvas = document.querySelector("canvas")
const ctx=canvas.getContext("2d")

//Feramentas
const button = [...document.querySelectorAll("button")]
const lapis = document.querySelector("button#lapis")
const lixeira = document.querySelector("button#lixeira")
const paleta = document.querySelector("button#paleta")

const feramentas=()=>{
  button.map((e)=>{
    e.addEventListener("click",()=>{
      e.classList.toggle("btn_ativo")
    })    
  })
}

feramentas()


const sistema=(px,py)=>{
  ctx.fillStyle="red"
  ctx.fillRect(px - canvas.offsetLeft,py - canvas.offsetTop,10,10)
  ctx.fill()
}

canvas.addEventListener("mousedown",(evt)=>{
  sistema(evt.clientX,evt.clientY)
})

canvas.addEventListener('touchmove',(evt)=>{
  let x = evt.touches[0].clientX
  let y = evt.touches[0].clientY
  sistema(x,y)
})