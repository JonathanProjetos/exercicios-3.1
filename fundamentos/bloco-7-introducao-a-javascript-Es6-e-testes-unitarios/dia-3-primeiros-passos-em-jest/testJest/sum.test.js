
const sum = require('./sum');

describe("Questão 01",() => {
test("Esperado soma de 4 + 5 com resultado 9",() => {
    expect(sum(4,5)).toBe(9);
});

test("Esperado soma de 0 + 0 com resultado 0",() => {
    expect(sum(0,0)).toBe(0);
});

test("Esperado erro  se soma for string 4 + '5' ",() => {
    expect(() => sum(4,"5")).toThrowError();
    expect(() => sum(4,"5")).toThrowError('Parametro deve ser number');
})

});
