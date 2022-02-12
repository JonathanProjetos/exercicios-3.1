
let ondeEstou = document.querySelector("body");

let ondeQueroIr = document.createElement("h1");
ondeQueroIr.className = "title";
ondeEstou.appendChild(ondeQueroIr);
ondeQueroIr.innerText="Exercício 5.2 - JavaScript DOM ";

let ondeQueroIr1 = document.createElement("main");
ondeQueroIr1.className="main-content"
ondeEstou.appendChild(ondeQueroIr1)

let ondeEstouMain = document.querySelector("main")//Aqui estou em main
let creatSection = document.createElement("section")
creatSection.className="center-content";
ondeEstouMain.appendChild(creatSection);

let ondeEstouP = document.querySelector("section");
let criandoP = document.createElement("p")
ondeEstouP.appendChild(criandoP);

let creatSection1 = document.createElement("section")//Aproveitei a variavel main já criada para utilizar onde se pede.
creatSection1.className="left-content"
ondeQueroIr1.appendChild(creatSection1);

let creatSection2 = document.createElement("section")//Aproveitei a variavel main já criada para utilizar onde se pede.
creatSection2.className ="right-content"
ondeQueroIr1.appendChild(creatSection2)

let ondeEstou3 = document.querySelector(".left-content")
let linkFoto = document.createElement("img")
linkFoto.src="https://picsum.photos/200";
linkFoto.className="small-image"
ondeEstou3.appendChild(linkFoto);


let ondeEstou4 = document.querySelector(".right-content");
let listaUl = document.createElement("ul")
ondeEstou4.appendChild(listaUl);
 
let ondeEstou5 = document.querySelector("ul");


function loopDeTags(elemento,tipo) {
    
    for (let index = 1; index <= elemento; index +=1) {
        let creatLi = document.createElement(tipo)
        ondeEstou5.appendChild(creatLi)
    }
}
loopDeTags(10,"li")



ondeEstouMain = document.querySelector("main") //pegado la de main

function criarRepeticao(quantidade, tipo) {
    for (let index = 1; index <= quantidade; index +=1) {  
        let criarH3 = document.createElement(tipo) 
        criarH3.className = "description"; 
        ondeEstouMain.appendChild(criarH3);
    }
}
criarRepeticao(3 ,"h3")


let sectionParaDelet = document.querySelector(".left-content")

function removeChild(elemento) {
    
  elemento.parentNode.removeChild(elemento) 
}
removeChild(".left-content")