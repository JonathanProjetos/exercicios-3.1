const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(pessoa, notas) {
  const newObject = pessoa.map((elemento, index) => {
    const newObjeto = {
      names: elemento,
      averange: notas[index].reduce((acumulador, item) => {
        const mediaNota = acumulador + item;
        return mediaNota 
      }, 0) / notas[index].length
    }
     return newObjeto             
  })
  return newObject 
}
console.log(studentAverage(students, grades));



const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];