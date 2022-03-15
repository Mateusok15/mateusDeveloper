const input = document.querySelector('.input-tarefa')
const button = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li')
  return li
}
function limpar() {
  input.value = ''
  input.focus()
}

function  apagar(li) {
  li.innerText += ' '
  const botao = document.createElement('button')
  botao.innerText = 'Apagar'
  botao.setAttribute('title', 'Apagar Tarefa')
  botao.setAttribute('class', 'apagar')
  li.appendChild(botao)
}

button.addEventListener('click', ()=>{
  if(!input.value)return
  criarTarefa(input.value)
})

input.addEventListener('keypress', (evento)=>{
  if(evento.keyCode === 13){
    criarTarefa(input.value)
  }
})

function criarTarefa(inputTexto) {
  const li = criaLi()
  li.innerText = inputTexto
  tarefas.appendChild(li)
  limpar()
  apagar(li) 
  salvarTarefa()
}

document.addEventListener('click',(evento)=>{
  const elemento = evento.target

  if(elemento.classList.contains('apagar')){
    elemento.parentElement.remove()
    salvarTarefa()
  }
})

function salvarTarefa() {
  const getTarefas = tarefas.querySelectorAll('li')
  const arrayTarefas = []

  for(let valor of getTarefas){
    let valorDasTarefas = valor.innerText
    valorDasTarefas = valorDasTarefas.replace('Apagar', '').trim()
    arrayTarefas.push(valorDasTarefas)
  }

  const jogaJson = JSON.stringify(arrayTarefas)
  localStorage.setItem('Tarefas', jogaJson)
}

function salvar() {
  const storage = localStorage.getItem('Tarefas')
  const pegaJson = JSON.parse(storage)
  
  for(let salvar of pegaJson){
    criarTarefa(salvar)
  }
}

salvar()

























/*const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const listaJSON = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', listaJSON)

}

function adicionaTarefasSalvas() {
const pegatarefas = localStorage.getItem('tarefas')
const listaDeTarefas = JSON.parse(pegatarefas)

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();*/