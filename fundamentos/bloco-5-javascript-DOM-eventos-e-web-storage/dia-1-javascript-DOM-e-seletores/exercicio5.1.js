document.getElementById('page-title').innerText = "Não olhe pra cima." 
//document.getElementById('paragraph').style.color = '#ff00aa'
document.getElementById('subtitle').innerText = "Meu filme favorito."


//Anotações sobre documents
document.getElementById // pega um identificador (como no css #id ) especifico utilizando ex: document.getElementById('header-h1')
//A forma de chamar document.getElementById("id")
document.getElementsByClassName // pega um conjundo de valor com a referência no css (.class) e retornando como HTMl colection que retorna com lista.
//A forma de chamar document.getElementsByClassName("class")
document.getElementsByTagName // pega o conteudo nas tegs  exp; <p> ,<h1>, <spam> e retorna como lista tendo valores de id ou class no conjunto.
//a forma de chamar document.getElementsByTagName("tag") usar string com nome da tag.
document.querySelector // o querySelector pega a primeira ocorrência na checagem e tem que ser especipicado usando a id "#id" ou class ".class" e
//tem posssibilidade de pegar por herança tipo uma div que tem outro id dentro ficaria assim ex:(.titulo2 p) sabendo que a div tem class "titulo2" e uma
// tag p dentro dessa div. 



function mudarCorDaLetra(elemento,cor,cor1){ 
    document.getElementsByClassName(elemento)[0].style.color = cor; 
   // document.getElementsByClassName(elemento)[0].style.backgroundColor = cor1; 
}
mudarCorDaLetra("paragraph","red","black")

 function corsubTitulo (tag,cor ){
    document.getElementsByTagName(tag)[0].style.color = cor;
    }

    corsubTitulo("h4","#00aaff")
document.querySelector("#page-title").style.color = "hotpink"

console.log(document.querySelectorAll("header p")[1].style.backgroundColor = "orange")

 //getElementsByClassName(primeiroParagrafo);


