
                        // ACADEMIA DE LOGICA TRABALHO EM GRUPO

/*
02 - Contar até 10
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.
*/

/* function accumulator(limit){
    // Desenvolva seu código nessa função
  }
  
  module.exports = accumulator;
  © 2022 GitHub, Inc.
  Terms
  Privacy
   */

  /* let limit = 10
  let accumulator = 0;
  

  for(let index = 1; index <= limit ; index += 1 ){

        accumulator = accumulator + index;
  }
  console.log(accumulator)
   */

/* 
  06 - Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------
*/
/* 
function oddNumbers(){
  // Desenvolva seu código nessa função
}

module.exports = oddNumbers; */

/* let lista =[]

for (let index = 1; index <= 50; index += 1) {
    
    if(index %2 === 1){
        
        lista.push(index);
    }

}
console.log(lista); */

/*
07 - Onde está o elemento?
Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.
Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------
*/

/* function findIndexOf(){
    // Desenvolva seu código nessa função
  }
  
  module.exports = findIndexOf; */

  /* let lista = ['jonathan', 'Ronan','vitor','rodrigo'];
  let recebe ;

   for (let index = 0; index < lista.length; index += 1) {
       
       recebe = lista.indexOf('jonathan')
   }
   console.log(recebe); */

/* 
  let lista = [1,23,25,85,96,456,35,28,45,65,82,12,44,58];
  
  for (let index = 0; index < lista.length; index += 1) {
      
        console.log(lista[index]);
      
  } */
  
 
  /* let lista = [1,23,25,85,96,456,35,28,45,65,82,12,44,58];
  let som = 0
  
  for (let index = 0; index < lista.length; index += 1) {
      
      som = som + lista[index]
  } 

  console.log(som);
   */

  /* let lista = [1,23,25,85,96,456,35,28,45,65,82,12,44,58];
  let soma = 0;
  let media;

  for (let index = 0; index < lista.length; index += 1) {
      
      soma = soma + lista[index]
  } 

    media = soma / lista.length

  console.log(media); */

/* 
  let lista = [1,23,25,0,0,0,35,28,45,0,0,12,44,58];
  let soma = 0;
  let media;

  for (let index = 0; index < lista.length; index += 1) {
      
      soma = soma + lista[index]
  } 
    media = soma / lista.length
    
    if(media > 20){
        console.log("valor e maior que 20")
    }else{
        console.log("valor menor que 20")
    }
  console.log(media);
 */


 /*  let lista = [1,23,25,85,96,456,35,28,45,65,82,12,44,58];
 
  for (let index = 0; index < lista.length; index += 1) {
    
    let numeroReferencia = lista[index];

    for (let index2 = index+1; index2 < lista.length; index2 += 1) {      // utiliza o index como ponto de start.
      
       if (numeroReferencia > lista[index2]) {
         numeroReferencia = lista[index2];
         lista[index2] = lista[index];
         lista[index] = numeroReferencia;
         //console.log(numeroReferencia);
       }
     
    }
     

  }
console.log("test",lista); */



/* et lista = [1,23,25,85,96,456,35,28,45,65,82,12,44,58];

for (let index = 0; index < lista.length; index+= 1) {
  
  let checagem = lista[index]

  for (let index2 = index +1; index2 < lista.length; index2++) {
    
    if(lista[index] < lista[index2]){
      checagem = lista[index2];
      lista[index2]= lista[index]
      lista[index] = checagem
    }  
  }
  
}
console.log(lista); */



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lista = [];

for (let index = 0; index <= numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (index === numbers.length && index2 === numbers.length -1) {
      lista.push(numbers[index2]*2)
     // console.log(lista);
    }else if(index === index2+1){
      lista.push(numbers[index] *numbers[index2]);
    } 
  }
  
}    

console.log(lista);
  




/* 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 2];
let newNumbers = [];

for (let index = 1; index <= numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (index === numbers.length && index2 === numbers.length-1) {
            newNumbers.push(numbers[index2]*2);
        } else if(index === index2+1) {
                newNumbers.push(numbers[index2]*numbers[index]);
        }
    }
}
*/ 