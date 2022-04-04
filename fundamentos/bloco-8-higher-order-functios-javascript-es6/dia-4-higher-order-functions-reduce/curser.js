//A função soma todos os valores de um array:
//Apenas com o for :


const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113



const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123



const numbers = [50, 85, -30, 3, 15];
let numeroMaior = 0;

for (let index = 0; index < numbers.length; index+= 1) {

    if(numbers[index] > numeroMaior){
        numeroMaior = numbers[index];
    }
}
//console.log(numeroMaior);

// const numbers = [50, 85, -30, 3, 15];

const funcaoTest = (result, number) => ((result > number)? result : number);

const test = numbers.reduce(funcaoTest, 100);

console.log(test);

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPar = (array) => {
    let somaNumerosPar = 0;

    for (let index = 0; index < array.length; index += 1) {

        if (array[index]%2 === 0){
            somaNumerosPar += array[index];
        }
    }
    return somaNumerosPar; 
}
//console.log(somaPar(numbers))
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pegarPar = numbers.filter((elemento) => elemento %2 === 0);
console.log(pegarPar); //[18, 4, 76, 54]

const somaPar2 = (result, number) => result + number;

const somaPar1 = pegarPar.reduce(somaPar2, 0);
console.log(somaPar1);// 152



const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

  const pessoaNota = (acumulador, materia) => {
    
    if(acumulador.nota > materia.nota) return acumulador;

        return materia;
    
  }

  const pessoaEstudante = (estudantes) => estudantes.map((elemento) => ({
      nome: elemento.nome,
      materia: elemento.materias.reduce(pessoaNota).name
  }));
console.log(pessoaEstudante(estudantes));
