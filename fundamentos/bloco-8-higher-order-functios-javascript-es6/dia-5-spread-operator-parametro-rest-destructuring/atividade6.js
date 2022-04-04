

/* const [carro, modelo, ano] = palio

const imprimaCarro = array.map(() =>{
    return{
        carro,
        modelo,
    }
}) */


//6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
//Dica: use array destructuring e abbreviation object literal .
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
// escreva toObject abaixo
const toObject = (array) => {
const [carro, , year] = array
return {carro, year}
}
console.log(toObject(chiron));
