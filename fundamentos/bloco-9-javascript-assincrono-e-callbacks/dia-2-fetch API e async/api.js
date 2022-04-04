const lista = [1,2,3,4,7,8,8,4,45,];
const novaLista =  lista.map((elem) => elem * 2);
console.log(novaLista);


const test = ['ola', 'joia', 'boa']

const novaLista2 = lista.reduce((acc, item)=> {
   return acc + item
},0)

console.log(novaLista2);