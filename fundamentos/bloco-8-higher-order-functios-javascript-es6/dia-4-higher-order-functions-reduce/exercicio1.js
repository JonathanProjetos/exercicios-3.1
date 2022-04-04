const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    // escreva seu código aqui
    const juntarArray = array.reduce((acumulador, item) => acumulador.concat(item), []);
    return juntarArray;
  }
  console.log(flatten(arrays));