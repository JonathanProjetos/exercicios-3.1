



let mudancaDeCor = document.querySelector("#header-container").style.color = "red";


function CorFundo(elemento1,cor){
    let mudancaDeCor1 = document.querySelectorAll(elemento1);
    mudancaDeCor1[0].style.backgroundColor = cor;
    
    return mudancaDeCor1;
}
CorFundo("#header-container","black")
CorFundo("#container","#fa5894")
//CorFundo()
CorFundo(".no-emergency-tasks","#f9e5c0")
CorFundo("#footer-container","#142f30")
CorFundo(".emergency-tasks","#248f8d")

function maisDeUmaCor(elemento,cor){
let maisDeUmItem = document.querySelectorAll(elemento);
    console.log("Olá")
    for (let index = 0; index < elemento.length; index++) {
        maisDeUmItem[index].style.backgroundColor = cor; 
        console.log("Olá"+index)
    }


return maisDeUmItem
}

maisDeUmaCor(".no-emergency-tasks div h3","red")
maisDeUmaCor(".emergency-tasks div h3","#aedd2b")

//Não está mudando a cor do dois ao mesmo tempo ta alternando








