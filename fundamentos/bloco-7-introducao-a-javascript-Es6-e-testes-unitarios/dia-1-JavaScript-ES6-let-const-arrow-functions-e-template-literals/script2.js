

function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
     // console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      //console.log(elseScope);
    }
   
}
  console.log(testingScope(true));

  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  const testscopo = (escopo) => escopo === true? `${ifScope}  ótimo, fui utilizada no escopo !`: `${elseScope}`;
  console.log(testscopo(true))


  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  console.log(`array aleatório ${oddsAndEvens}, array em ordem crescente ${oddsAndEvens.sort((a, b) => a - b)}.`);

  console.log(oddsAndEvens); // será necessário alterar essa linha 😉




  function fatorial(num1){
    let fatorialNumber = 1;
    for (let index = 1; index <= num1; index++) {
      fatorialNumber = fatorialNumber * index;
    }
    return fatorialNumber;
  }
  console.log(fatorial(4))

  const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n; // preciso entender o porque não houve loop


  /* const fatorial = (num1) => {
      let fatorialNumber = 1
      for (let index = num1; index >= 1; index =-1) {
          fatorialNumber = fatorialNumber * index
      }
  }
  */

  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
 