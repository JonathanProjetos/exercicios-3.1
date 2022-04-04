const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

//SPREAD OPERATOR
const numbers = [1, 2, 3];

const newArray = [ 4, 5, 6, ...numbers,];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */



const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];
//console.log(imc(60, 1.7));
console.log(imc(...patientInfo)); // 20.76



const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5




const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */




  // Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'maçã', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['morango', 'laranja', 'melancia'];

const fruitSalad = (fruit, additional) => {
    const listaDeFrutas = [...fruit, ...additional];
  
    return listaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));



// PARÂMETRO REST


function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  //console.log(quantosParams(0, 1, 2,)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.





  const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88



// OBEJECT DESTRUCTURING


const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

/* console.log(product['name']);
console.log(product['price']);
console.log(product['seller']); */

//fornma diferente de acessar o objeto.

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller);


// condição caso tenha mais de um objeto dentro d outro objeto
// definindo o objeto
// definindo o objeto

const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);



const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };

  const{workDays, weekend} = daysOfWeek 





const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']




 
  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
 //aqui esta trocando o nome das variaveis dentro do objeto. 
 //Nesse exemplo, informamos qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável seguindo a sintaxe: { propriedade:nomeVariável } = objeto .
// Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos 
  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática 


  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  const name = student.d;
  console.log(name); // Maria



// aqui esta uma otima forma de pegar chaves de objeto e montar para imprimir.

  const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
//------------------------------------------------------------------------------------------------------------------------------

// EXERCICIO CURSE



const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };


  const {name, age, nationality} = user;
  const {profession, squad, squadInitials} = jobInfos

  const novoObjeto = {...user, ...jobInfos}
  console.log(novoObjeto);

  const printMyProfile = ({name, age, nationality, profession, squad, squadInitials}) =>{
    console.log(`Hi, my is ${name}, i'm ${age} years old and i'm ${nationality}, I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
  }
  printMyProfile(novoObjeto);



  //                      Array Destructuring

  const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada



const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada


//------------------------------------------------------------------------------------------------------

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [primeiraString, segundaString] = saudacoes;
console.log(primeiraString);




let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

let newarray = [comida, animal, bebida] = ['arroz', 'gato' , 'água']



console.log(newarray); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


var a = 1;
var b = 3;
console.log(a); // 3
console.log(b); // 1

[a, b] = [30, 40];
console.log(a); // 3
console.log(b); // 1



let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

 [, , , ...numerosPares] = numerosPares
console.log(numerosPares);


const someArray = [
  {id: 1, abc: 2, def: 3},
  {id:4, abc: 6, def: 8},
  {id: 5, abc: 7, def: 9},
];

/* let res = someArray.map(x => {return {id: x.id, def: x.def}});

console.log(res); */

const test = someArray.map(({id, abc}) => {
  
  const test = { 
    id,
   } 
  return test;
  /* return {id:elemento.id, def: elemento.def} = elemento */
});
console.log(test);


//----------------------------------------------------------------------------------------------------------------------------

                              // Default Destructuring

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'brasil' } = person;

console.log(nationality)

// pode acrescentar valor a variavel caso ela não exista e neste caso foi adicionado 'brasil'




const position2d = [1.0, 2.0];
const [x, y, z] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// aqui foi o caso do z ele não existe no array então foi definido um  default destructuring = 0;


