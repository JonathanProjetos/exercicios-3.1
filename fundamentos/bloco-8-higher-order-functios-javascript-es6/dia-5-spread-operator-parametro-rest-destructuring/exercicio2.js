

const sum = (...numeros) => {
  const soma = numeros.reduce((acumulado, item) => acumulado + item )
    return soma;
}
console.log(sum(1,2,3,4,5,6,7))