

//1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

/* for (let index = 0; index < numbers.length; index +=1) {
    
    console.log(numbers[index]);
    
} */
/*2- let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    
    resultado = resultado + numbers[index]
console.log(resultado);
}
console.log(resultado) */

/* 3-let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {

    resultado = resultado + numbers[index];
      
}
let media = resultado / numbers.length;  
console.log(media);
 */

//4- 
/* let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {

    resultado = resultado + numbers[index];
      
}
  
if(resultado > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}
 */

//5-


/* let valorMaior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    
    if(valorMaior < numbers[index] ) 
    valorMaior = numbers[index];
}
console.log(valorMaior); */

/* 6 - 
let numerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index]%2 === 1){
        numerosImpares = numerosImpares + 1
    } 
}
if(numerosImpares === 0){
    console.log("nenhum valor ímpar encontrado");
}else{
    console.log(numerosImpares);
} */
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* 7 - 
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index]
    }   
}
console.log(menorNumero); 
*/
/* 8- 
let listaDeNumeros = [];

 for (let index = 1; index <= 25; index +=1) {
    listaDeNumeros.push(index)   
}
   9- 
let listaDividida = [];
for (let index = 0; index < listaDeNumeros.length; index+= 1) {
    
    listaDividida.push(listaDeNumeros[index] /2)
    
}
console.log(listaDividida); */

//Bônus
/* /* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        
      if (numbers[index] < numbers[secondIndex]) {
        console.log(numbers[index]);
         /* let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position; 
      } 
    }
  }  */

//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.


  let ehNumeroPrimo = [];
  let primo = [];
  let valor = 50
  for (let primeiroIndex = 1; primeiroIndex <= valor; primeiroIndex += 1) { 
    let ehprime = true
    for (let segundoIndex = 2; segundoIndex < primeiroIndex; segundoIndex += 1) {
    
        if (primeiroIndex%segundoIndex === 0) {
            ehprime = false; 
        }
    }
    if(ehprime){
        ehNumeroPrimo.push(primeiroIndex)
    
    }

}
console.log(ehNumeroPrimo[ehNumeroPrimo.length-1]);
