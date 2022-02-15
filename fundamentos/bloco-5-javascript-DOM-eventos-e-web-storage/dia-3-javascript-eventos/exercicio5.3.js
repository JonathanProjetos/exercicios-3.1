function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};

  createDaysOfTheWeek();

//aqui abaixo criei os dias com class day e fiz coindições para determinados dias que receberam mais de uma classe.  

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criarDias(elemento,quantidade) {
  let estouEmUl = document.querySelector("#days")
  let criarLi = document.createElement("li");

      for (let index = 0; index < quantidade.length; index++) {
        criarLi = document.createElement(elemento);
        criarLi.innerText = dezDaysList[index]
        criarLi.className = "day";
        estouEmUl.appendChild(criarLi);  

        if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {
            criarLi.className = "day holiday"
        }
        if(dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18){
            criarLi.className = "day friday"
        }
        if(dezDaysList[index] == 25){
            criarLi.className = "day holiday friday"
        }
    } 

}criarDias("li",dezDaysList)

//aqui abaixo criei o butão feriados

let elementoPai = document.querySelector(".buttons-container")

function recebeFeriados (string) {

    let criarButao = document.createElement("button");
    criarButao.id="btn-holiday";
    criarButao.innerText = string;
    elementoPai.appendChild(criarButao);
}
recebeFeriados("Feriados")


let botaoFeriados = document.querySelector("#btn-holiday");

//aqui abaixo eu mudo a cor dos dias com class holiday para uma cor quando clicado.
function aleraCorButaoFeriados(text) {
    let liDiasFeriados = document.querySelectorAll(".holiday")/* [0].style.backgroundColor="red" */
    for (let index = 0; index < liDiasFeriados.length; index += 1) {
        liDiasFeriados[index].style.backgroundColor = "red"
    }
console.log(text.target)
}

botaoFeriados.addEventListener("click",aleraCorButaoFeriados);

//aqui abaixo eu coloquei um evento para quando tira o mouse sobre o botão executar o codigo abaixo
let caminhoholiday = document.querySelectorAll(".holiday")

function AnularCorButaoFeriados(params) {
    caminhoholiday= document.querySelectorAll(".holiday")
    for (let index = 0; index < caminhoholiday.length; index +=1) {   
        caminhoholiday[index].style.backgroundColor = "rgb(238,238,238)";
    }
console.log(params.target);
}
botaoFeriados.addEventListener("mouseout",AnularCorButaoFeriados);

//aqui abaixo criei o butão sexta-feira
let elementoPaiBtnSexta = document.querySelector(".buttons-container")

function butaoSexta(string1) {

    let criarBotaoSexta = document.createElement("button");
    criarBotaoSexta.id="btn-friday"
    criarBotaoSexta.innerText = string1
    elementoPaiBtnSexta.appendChild(criarBotaoSexta)
    
}
butaoSexta("Sexta-feira")

//aqui em baixo estou escrevendo quando clico em sexta-feira
let botaoSextaFeira = document.querySelector("#btn-friday")
let diasSextadias = document.querySelectorAll(".friday")

//aqui abaixo estou inserindo texto ao clicar no botão sexta-feira.
function mudeTextoSexta(params) { 
    
    for (let index = 0; index < diasSextadias.length; index++) {
        diasSextadias[index].innerHTML = "Sextoouu";
    }
   console.log(params.target); 
}
botaoSextaFeira.addEventListener("click",mudeTextoSexta)
//aqui abaixo estou recuperando os numeros alterados ao tirar o mouse de cima do botão

function resetaTextoSexta(params) {
    for (let index = 0; index < listaDiasSexta.length; index +=1) {
       diasSextadias[index].innerHTML= listaDiasSexta[index];
    }
   console.log(params.target)
}
botaoSextaFeira.addEventListener("mouseout",resetaTextoSexta)

//aqui acima estou fazendo uma array com os numeros de posição de sexta-feira para recuperar o numero original.
let listaDiasSexta = [4,11,18,25]

// aqui estou fazendo o efeito de zoom quando o mause passa sobre o dia.
//dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let recuperarDay = document.querySelectorAll(".day")
function efeitoZoomQuandoPassa(params) {
    for (let index = 0; index < recuperarDay.length; index +=1) {
        
        recuperarDay[index].innerHTML= "olha";
    }
    console.log(params.target);
}
recuperarDay.addEventListener("wheel",efeitoZoomQuandoPassa)