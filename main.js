const canvas = document.querySelector("canvas")
const ctx=canvas.getContext("2d")

//Feramentas
const button = [...document.querySelectorAll("button")]
const lapis = document.querySelector("button#lapis")
const lixeira = document.querySelector("button#lixeira")
const paleta = document.querySelector("button#paleta>input[type=color]")

var cor = "black"
var verification = false
var cont = 1

const feramentas=()=>{
  button.map((e)=>{
    e.addEventListener("click",()=>{
      e.classList.toggle("btn_ativo")
    })    
  })
}

feramentas()

const desenho=(px,py)=>{
  ctx.beginPath()
  ctx.fillStyle=cor
  ctx.arc(px - canvas.offsetLeft,py - canvas.offsetTop,10,(Math.PI/180)*0,(Math.PI/180)*360,false)
  ctx.fill()
  ctx.closePath()
}

paleta.addEventListener('change',(evt)=>{
  cor=evt.target.value
})

lapis.addEventListener('click',()=>{
  cont++
  if(cont%2==0){
    canvas.addEventListener('mousedown',(evt)=>{
      verification=true
    })
    canvas.addEventListener('mousemove',(evt)=>{
      if(verification)desenho(evt.clientX,evt.clientY)
    })
    canvas.addEventListener('mouseup',()=>{
      verification=false
      if(verification==false)desenho()
    })
  }
})

lixeira.addEventListener('click',()=>{
  ctx.clearRect(0,0,900,600)
})

/*canvas.addEventListener('touchmove',(evt)=>{
  let x = evt.touches[0].clientX
  let y = evt.touches[0].clientY
  desenho(x,y)
})*/