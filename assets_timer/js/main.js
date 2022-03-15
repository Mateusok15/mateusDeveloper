const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const timer = document.querySelector('.timer')

function getData(seg){
    let segundos = new Date(seg * 1000)
    return segundos.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    })
}
let segundos = 0;
let parar;
function play() {
    
   parar = setInterval(()=>{
       segundos++
        timer.innerText = getData(segundos)
    },1000)

}

iniciar.addEventListener('click',()=>{
    clearInterval(parar)
    play()
    timer.classList.remove('red')
})

pausar.addEventListener('click',()=>{
    clearInterval(parar) 
    timer.classList.add('red')   
})

zerar.addEventListener('click',()=>{
    timer.innerText = '00:00:00'
    segundos = 0
    clearInterval(parar)
    timer.classList.remove('red')
})