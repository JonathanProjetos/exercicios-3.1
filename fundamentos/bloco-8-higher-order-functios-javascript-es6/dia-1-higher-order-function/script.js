function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable);
  //  [Function: sum]



  const sum = (number1, number2) => {
    return number1 + number2;
  };


  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);



  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15) // foi feito uma variavel que armazena uma função de soma com um valor definido para a funçõa anterior
  console.log(initialSum(5));//chmando a variavel como um nova função ela vai carregar a informação de soma da anterior 'sumFixAmount'e podendo receber mais valores na 
  //'initialSum(5)' que sera 15 da sumFixAmount anteriro mais 5 da initialSum(5) que na soma será 20.


  const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);




const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);



  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });



//verifica os numeros se são par ou impar

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;




  const numberGenerator = () => {
    return Math.random().toPrecision(2) * 100;
  }
  
  console.log(numberGenerator());



//aqui foi definido a função primaria.

  const bomDia1 = () => `Acordando!!`;
  const bomDia2 = () => `Bora tomar café!!`;
  const bomDia3 = () => `Partiu dormir!!`;

//aqui foi feito outra função para chamar outra função como parametro.
  const doingThings = (doingThings) => doingThings();
  console.log(doingThings(bomDia1))
  console.log(doingThings(bomDia2))
  console.log(doingThings(bomDia3))



  //                            Exercicio Curse

//1 - crie uma função
//2 - retorne um objeto no formato  { nomeCompleto, email }
//3 - passar a minha função como parametro para newEmployees
//4 - a minha função deve receber como parametro o nomeCompleto
//5 - logo após adicionar o nome completo inserir @trybe.com 

const myFunction = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return{nomeCompleto, email:`${email}@trybe.com`}
}; 


const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(myFunction));









  var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  


  function countDevelopers(list) {
    if(Object.keys(list).includes('Europe') === undefined) return 0;
    const getpeople = list.filter((elem) => elem.continent === 'Europe');
    console.log(getpeople);
    return getpeople;
  }
  countDevelopers(list1);