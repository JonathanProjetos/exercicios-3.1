const myRemove = require('./sum');

describe('Questão 02 ',() =>{

    test('Esperado que o array fique [1,2,4]',() => {
        expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
    })
})