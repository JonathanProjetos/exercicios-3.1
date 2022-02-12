//O comando ParentNode retorta de quem a checagem e pai exemplo usando a sintaxe document.querySelector('.ingredient-item'que e uma lista)
// e linka ela com a tang anterior a ela. a função e semelhante cd .. do bash
//"parantNode e utilizado somente para leitura"

//E aqui outras formas de identifica pai e filhos

/* 
parentNode : retorna o nó pai.
parentElement : retorna o elemento pai.
childNodes : retorna um NodeList com todos os nós filhos.
children : retorna um HTMLCollection com todos os elementos filhos.
firstChild : retorna o primeiro nó filho.
firstElementChild : retorna o primeiro elemento filho.
lastChild : retorna o último nó filho.
lastElementChild : retorna o último elemento filho.
nextSibling : retorna o próximo nó.
nextElementSibling : retorna o próximo elemento.
previousSibling : retorna o nó anterior.
previousElementSibling : retorna o elemento anterior.
 */
/* document.querySelector("#terceiroFilho").parentElement
document.querySelector("#elementoOndeVoceEsta").nextElementSibling //terceirofilho
document.querySelector("#elementoOndeVoceEsta").parentElement.style.backgroundColor= "red";//pai
document.querySelector("#primeiroFilhoDoFilho").innerHTML ="Olá" //primeirofilho
document.querySelector("#elementoOndeVoceEsta").children
document.querySelector("#elementoOndeVoceEsta").parentElement // retorna pra pai

console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling);
console.log(document.querySelector("#elementoOndeVoceEsta").parentElement.firstElementChild);
console.log(document.querySelector("#elementoOndeVoceEsta").parentElement);
console.log(document.querySelector("#elementoOndeVoceEsta"));
console.log(document.querySelector("#pai").firstElementChild);
console.log(document.querySelector("#pai"));
console.log(document.querySelector("#pai").children[2]); */



let paidoIrmao = document.querySelector("#pai");

let irmaoelementoOndeVoceEsta = document.createElement("section");

paidoIrmao.appendChild(irmaoelementoOndeVoceEsta)


let ondeEstou = document.querySelector("#elementoOndeVoceEsta");

let ondeQueroIr = document.createElement("Novofilho");

ondeEstou.appendChild(ondeQueroIr);

let ondeEstou1 = document.querySelector("#primeiroFilhoDoFilho");

let ondeVou = document.createElement("novoFilho");
ondeEstou1.appendChild(ondeVou)

document.querySelector("novoFilho").parentElement.parentElement.parentElement.children[2]

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

var matandoFilhoPai = document.querySelector("#pai").removeChild();

console.log(matandoFilhoPai)