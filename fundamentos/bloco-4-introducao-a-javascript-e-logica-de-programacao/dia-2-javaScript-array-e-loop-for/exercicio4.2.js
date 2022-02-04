//                                                  JavaScript - Array e loop For

const { match } = require("assert");

let nomes = ['jonathan','jessica','diego','lucia','valter']
console.log(nomes.length)
nomes.push('edmar')

console.log(nomes);


//let posição = nomes[1]
//console.log(posição)

let posição = nomes[nomes.length-1]
    console.log(posição)             // verificar a ultima posição de nomes.

// A contagem dentro do array sempre começa com 0 e cada posição dentro do array e um indice.

 // variavel.push(); = adiciona iten no final da lista de um array.
 // variavel.unshift(); = adiciona iten no inicio da lista de um array.
 // variavel.pop(); = permite remover o ultimo iten na lista de arrays.

 // let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

 // tasksList.pop();  // remove a última tarefa
 // console.log(tasksList);

 // [ 'Tomar café', 'Reunião' ]

 // variavel.shift(); = permite remover o primeiro iten na lista do array.

 // Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array . Veja o exemplo:
 //let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

 //let indexOfTask = tasksList.indexOf('Reunião');
 //console.log(indexOfTask);

 // 

 //exercicio curse 01


 //let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
 //let menuServices = menu.length;

 //console.log(menuServices);

 //exercicio curse 02

 //let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
 //let indexOfPortfolio = menu.indexOf("Portfólio");
 
 //console.log(indexOfPortfolio);




//exercicio academia de logica 01


 //let lanches = 6;
/*

switch(lanches){

    case 1:
        console.log('Trybe Lanche Feliz');
            break;
    case 2:
        console.log('McTrybe');
            break;
    case 3:
        console.log('TrybeWooper');
            break;
    case 4:
        console.log('X-Trybe');
            break;
    case 5:
        console.log('Triplo Trybe com JS');
            break;
    default:    
        console.log('Não temos esta opção ainda :(');
    
}

    //Exercício 3 curse
    //Adicione o valor "Contato" no final do array menu :
    
    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    menu.push('Contato')
    console.log(menu);



                                        //ESTRUTURA DE REPETIÇÃO FOR

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

    for(index = 0; index < groceryList.length; index += 1){

        console.log("Adoro " + groceryList[index] + ".");
    }                                        

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

    for( let pessoas of names){
        console.log(pessoas);
    }


*/
//exercicio 01

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for (let index = 0; index < numbers.length; index += 1) {
    
    console.log(numbers[index]);
    
} */


//exercicio 02

/* let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {

    soma = soma + numbers[index]
}
console.log(soma);
 */

//exercicio 03


/* let media = 0

for (let index = 0; index < numbers.length; index+= 1) {
    
    media = media + numbers[index] / numbers.length;
}

console.log(media); */

//exercicio 04

/* let media = 0

for (let index = 0; index < numbers.length; index+= 1) {
    
    media = media + numbers[index] / numbers.length;

   
}
console.log(media);

if(media > 28){
    console.log("valor maior que 20")
}else{
    console.log("valor menor ou igual a 20")
}
 */

//exercicio 05

/* let resultado = 0

for (let index = 0; index < numbers.length; index+= 1) {
    
    if(resultado < numbers[index]){
        resultado = numbers[index];
    }    
}
console.log(resultado)
 */

//exercicio 06

/* 
let resultado = 0

for (let index = 0; index < numbers.length; index+= 1) {
    
    if(numbers[index] %2 === 1){
        resultado = resultado + 1
    }else{
        resultado = "nenhum valor ímpar encontrado"         //Duvida com a condição else na hipótese de não ter números impares.
    }    
}
console.log(resultado) */

//exercicio 07

let resultado;

for (let index = 0; index < numbers.length; index += 1) {
    
    //if(numbers[index] < resultado && )
    //resultado = numbers[index]
    
    resultado = Math.min( numbers[index])
}
console.log(resultado);