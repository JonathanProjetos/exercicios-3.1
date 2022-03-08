
const sum = (a,b) =>{
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Parametro deve ser number');
    }
    return a + b;
}
sum(4, 5)


function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  


module.exports = {
    sum, 
    myRemove,
};