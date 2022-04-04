const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
     const unirPalavra = array.reduce((acumulado, item) => {
    return acumulado + item.split('').reduce((acumulado1, item1) => {
      
      if(item1 === 'a' || item1 === 'A'){
        return acumulado1 + 1 
      }
      return acumulado1
    }, 0);
     }, 0)  
  return unirPalavra
  }
console.log(containsA(names));