//revisão de arrow functions
const sum = (value1, value2) => value1 + value2;
console.log(sum(4,8));

//revisão de arrow functions
const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23


//criando uma condição para que a calculadora não quebre utilizando algo alem de numbers
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));

//utilizando o thow new error
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));  


//refatorado o codigo acima

  const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));

  //preciso revisar a documentação sobre throw, catch, new, error. Não ficou claro.

  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  console.log(customer);

  //utilizando modelo classico para adiconar o sobrenome

  const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);

  customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

//Para adicionar mais propriedades e valor para o objeto, uma das formas seria  nomeDoObjeto.nomeDoItemQueQuerColocar = valorDoItem; exemplo o objeto const nomes = {nome: Jonathan, idade:31,} vou adicionar o sobre
//nome da pessoal nome.lastName = "silva" ou nome['lastname'] = 'silva'.

/* objeto.nomeDaPropriedade
objeto[variavelQueContemONomeDaPropriedade]  */



/* Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto, como a naturalidade, a data de nascimento e o estado civil.
Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis. */

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// ----------------------------------------------------------------------------------------------------------------

const objeto1 = {};

const test = (objeto1,nome,valor) => {
    
    objeto1[nome] = valor;

    return objeto1;
}   
console.log(test(objeto1,'name1','jonathan'));

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
console.log(coolestTvShow);

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

  //utilizar o for in para percorrer dentro do objeto e checar suas chaves.

  for (const property in coolestTvShow) {
    console.log(property);
  }
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons


/* Mas e se dissermos que há uma maneira mais robusta de trabalhar com objetos e seus valores? 
O método Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array.
Cada entrada do array retornado será uma string com o valor de cada chave do objeto. Fantástico não é mesmo? Vamos ver como ficaria nosso exemplo utilizando este método: */

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

//OBJECT.KEYS

// for (const property in coolestTvShow) {
//   console.log(property);
// }

console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const estudant = {};

  const estudante = (estudant,nivel,chave1,valor) => {

        estudant`${nivel}`[chave1] = valor;
  }
  estudante(estudant,'nome','jonathan');
  estudante(estudant,'javascript','ruim');
  estudante(estudant,'softSkill','bom');
  estudante(estudant,'HTML', 'bom');
  estudante(estudant, 'CSS', 'regular');
  console.log(estudant)


  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

//OBJETO.VALUE



const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student); // refatorado para uma linha
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));//objeto.value ao contrário do objeto.keys tras o valor das chaves.



  //OBJETO.ENTRIES.

  //objeto.entries retorna um array dentro de um array ou seja a chave do objeto principal e um array e as chaves + valor
  //são outra array cada, ou seja propriedade, valor e um array.


  const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
    jogo:{
        console: "Xbox",
        console2: "Playstation 5",
    }
  };
  
  console.log(Object.entries(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  //OBJETO.ASSIGN

  // objeto.assign clona o objeto dentro de algo definido variavel ou o proprio objeto.

  // A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);


const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */


    const person = {
        name: 'Roberto',
      };
      
      const lastName = {
        lastName: 'Silva',
      };
      
      const clone = Object.assign(person, lastName);
    
      console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
      console.log(person); // { name: 'Roberto', lastName: 'Silva' }

      //-------------------------------------------------------------------------------------------------------------------------------------------
      
     
      clone.name = 'Maria';

      console.log('Mudando a propriedade name através do objeto clone')
      console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
      console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
      console.log('--------------');
      
      person.lastName = 'Ferreira';
      
      console.log('Mudando a propriedade lastName através do objeto person');
      console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
      console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }



const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);


  const getDayName = (number) => {
    const dayNumber = number - 1;
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayNumber];
  };
  
  const printDayname = (dayNumber) => {
    console.log(getDayName(dayNumber));
  };
  getDayName(3);
  printDayname(3);



  const getDayName = (number) => {
    if (number < 1 || number > 7) throw new Error('Informe um número entre 1 e 7');
    const dayNumber = number - 1;
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayNumber];
  };
  
  const printDayname = (dayNumber) => {
    try {
      console.log(getDayName(dayNumber));
    } catch (e) {
      console.log(e.message);
    }
  };
  