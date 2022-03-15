function  Calculadora() {

    this.display = document.querySelector('.display')
 

    this.inicia = ()=>{
        this.clickTela()
    }
    
    
    this.clickTela = ()=>{
        document.addEventListener('click', el =>{
            const elemento = el.target

            if(elemento.classList.contains('btn_num')){
                this.display.value += elemento.innerText
            }

            if(elemento.classList.contains('btn_clear')){
                this.display.value = ''
            }
            
            if(elemento.classList.contains('btn_del')){
                this.apagar()
            }

            if(elemento.classList.contains('btn_eq')){
                this.realizaConta()
            }
          
        })
    }

    this.realizaConta = ()=>{
        conta = this.display.value

        try{
            
            conta = eval(conta)
            this.display.value = conta

            if(conta === 0){
                this.display.value = conta
                return
            }

            if(!conta){
                alert('Conta invalida !')
                this.display.value = ''
                return
            }

        }catch(error){
            alert('Conta invalida !')
        }
    }

    this.apagar = () =>{
        this.display.value = this.display.value.slice(0, -1)
    }

}

const iniciarCalculadora = new Calculadora()

iniciarCalculadora.inicia()
























/*function criaCalculadora() {

    return{
        display: document.querySelector('.display'),
        
        inicia(){
            this.click()
            this.enter()
        },

        apagar(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta invalida!')
                    this.display.value = ''
                    return
                }
                this.display.value = String(conta)

            }catch(e){
                alert('Conta invalida!')
                this.display.value = ''
                return
            }
            
        },

        click(){
            document.addEventListener('click', evento =>{
                let elemento = evento.target
                if (elemento.classList.contains('btn_num')){
                    this.display.value += elemento.innerText
                }

                if(elemento.classList.contains('btn_clear')){
                    this.display.value = ''
                }

                if(elemento.classList.contains('btn_del')){
                    this.apagar()
                }

                if(elemento.classList.contains('btn_eq')){
                    this.realizaConta()
                }
                
            })
        },

        enter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        }
        
    }

}


const calculadora = criaCalculadora()
calculadora.inicia()
*/