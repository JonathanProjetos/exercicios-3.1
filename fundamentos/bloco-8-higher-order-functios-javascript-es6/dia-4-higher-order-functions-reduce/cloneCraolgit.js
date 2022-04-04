// ACUMULAR OS VALORES DOS OBJETOS E GERAR UM NOVO BJETO
const women = [
    { fullName: 'Margaret Hamilton', email: 'magarethamilton@mulheres.br' },
    { fullName: 'Larissa Machado', email: 'anitta@mulheres.com.br' },
    { fullName: 'Frida Kahlo', email: 'fdKahlo@mulheres.br' },
    { fullName: 'Ada Lovelace', email: 'adalovelace@mulheres.br' },
  ];
  // women[0].idade = 87
  // console.log(women);
  // debugar
  //https://pythontutor.com/javascript.html#mode=displa
  
  const newWomen = women.reduce((acumulador, item) => {
      //   'Margaret Hamilton': 'magarethamilton@mulheres.br'
      //primeira chave : valor 
      //objeto['age'] = valor 
      // obj[chave] = valor;\
      console.log(item.fullName);
      acumulador[item.fullName] = item.email;
      return acumulador;
  }, {})
  console.log(newWomen);
  // Crie um novo objeto com a seguinte saída
  // Saída esperada:
  // Womens:  {
  //   'Margaret Hamilton': 'magarethamilton@mulheres.br',
  //   'Larissa Machado': 'anitta@mulheres.com.br',
  //   'Frida Kahlo': 'fdKahlo@mulheres.br',
  //   'Ada Lovelace': 'adalovelace@mulheres.br'
  // }
  
  //1. Pensar que a primeira passada o acumulador pode ser {}
  //Reduce -> array.reduce((acumulador, item) => { função aqui dentro}, valorQueDesejaIniciar)
  // women[0].age = 87;
  // console.log(women[0]);






  
//Acumular a frase 
const simpsons = ['sera', 'que', 'o', 'bart', 'dirige', '?'];

const perguntaSimpsons = simpsons.reduce((acumulador) => {
  console.log('Acumulador', acumulador);
  const string = acumulador;
  return string
})

console.log(perguntaSimpsons);