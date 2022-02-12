 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
    */

 function mudarText(param1,posição,valor){
     let mudarP = document.getElementsByTagName(param1);
    
     for (let index = 0; index < param1.length; index++) {
        console.log("Olá"+index);
        if (index < posição) {
            console.log(mudarP);
            mudarP[index].innerHTML = valor 
        }
        
    }
     return mudarP
 }
 mudarText("p",2,"topizera")


 function mudarDeCor(param2,cor2){

    let mudacor = document.getElementsByClassName(param2);
    mudacor[0].style.backgroundColor = cor2;

    return mudacor
 }
 mudarDeCor("main-content","rgb(76,164,109)")
 
 function coresInternas (param3,cor3){
     let mudacor = document.getElementsByClassName(param3);
     for (let index = 0; index < param3.length; index++) {
        mudacor[index].style.backgroundColor = cor3;   
     }
       return mudacor 
 }
 coresInternas("center-content","white")


 function textoH1(param4,texto){
     let correcaoText = document.getElementsByTagName(param4);
    correcaoText[0].innerHTML = texto
     
    return correcaoText
}
textoH1("h1","Exercício 5.1 - JavaScripit")



function imprimaTags(param3){
    let imprimirTags = document.getElementsByTagName(param3);
    for (let index = 0; index < param3.length; index+=1) {
        console.log(imprimirTags[index]); 
        return imprimirTags;
    }
      console.log(imprimirTags); 
}
imprimaTags("body")