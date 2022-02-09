/* //let car = 'Fiat';


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
   cor: {
        cor1: 'amarela',
         cor2: 'roxa',
         cor3: 'preta',}
}

console.log(car);
   */

  //exercicio academia de logica

  /* /* Exercício 2 - Crie uma função que, dado um array de números inteiros,
   retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 } */




  /* let arrayNumeros = [2,3,5,6,7,10,11,12]
      
function name(numeros) {
       
    let result = {
          pares:0,
          impares:0
        }
    for (const numeros of arrayNumeros) {
        
        if(numeros%2 === 0) {
            pares += 1;
        }else{
            impares += 1;
        }
    } 
    return result;
}
console.log(name()) */


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem Vinda " + info.personagem)
  console.log("Bem vinda " + info['personagem']);