
const {sum,myRemove} = require('./sum');

describe('Questão 01',() => {
    test('Esperado soma de 4 + 5 com resultado 9',() => {
        expect(sum(4,5)).toBe(9);
    });

    test('Esperado soma de 0 + 0 com resultado 0',() => {
        expect(sum(0,0)).toBe(0);
    });

    test('Esperado erro  se soma for string 4 + "5" ',() => {
        expect(() => sum(4,'5')).toThrowError();
        expect(() => sum(4,'5')).toThrowError('Parametro deve ser number');
    })

});


describe('Questão 02 ',() =>{

    test('Espera que a função exista',() => {
        expect(typeof myRemove).toBe('function');
    });

    test('Esperado que o array fique [1,2,4]',() => {
        expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
    });

    test()
});