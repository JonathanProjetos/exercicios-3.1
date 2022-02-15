//lista de eventos disponiveis https://www.w3schools.com/jsref/dom_obj_event.asp


const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

let elementoLi = document.querySelector("li")
function adicionaClass(quemfoi) {
   elementoLi .className = "tech"
   console.log(quemfoi.target)
}
elementoLi.addEventListener("click",adicionaClass)

function removeClass() {
    
}



// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//fiz a busca utilisando queryselector recuperei o "li" depois dentro da função adicionei class ao elemento li  e fora da função adicionei  elementoLi.addEventListener("click",adicionaClass) definindo click como forma de acionamento.

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
/* let recupertech = document.querySelector(".tech")
let recuperaInput = document.querySelector("#input")
function trocaTextDeTech(mostrar) {
   
}
recupertech.addEventListener("click",trocaTextDeTech) */
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

let recuperarh3 = document.querySelector("#my-spotrybefy")
function dobleClickPortifolio(text3) {
    window.location.href="https://jonathanprojetos.github.io/"
    console.log(text3.target)
}
recuperarh3.addEventListener("dblclick",dobleClickPortifolio)



// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

let passarMouseMyspotrybefy = document.querySelector("#my-spotrybefy")
function alteraCorFundo(text) {
    passarMouseMyspotrybefy.style.backgroundColor = "red";
  console.log(text.target)
}
passarMouseMyspotrybefy.addEventListener("mouseover",alteraCorFundo)


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'