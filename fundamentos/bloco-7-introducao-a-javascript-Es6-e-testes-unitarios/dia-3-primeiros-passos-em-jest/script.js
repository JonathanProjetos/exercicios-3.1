//Verificar Ciclo TDD - inspirado no artigo de Kent Dodds disponível nos recursos adicionais

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70



/* A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers . 
Esses métodos são estruturas de comparação utilizadas em diversas bibliotecas de testes, inclusive no Jest .
 Podemos pensar neles como uma ponte que dita qual é a relação entre o resultado que temos e o que queremos.
  O expect recebe o valor a ser testado e retorna um objeto representando uma expectation . Sobre esse objeto pode-se chamar os matchers que Jest fornece.
Vamos passar pelos matchers mais comuns. É interessante saber que existem muitos outros matchers que podem ser encontrados na documentação oficial do Jest . 
No dia a dia, é normal quem desenvolve ler documentação , porque na maior parte das vezes esse é o local com mais informações atualizadas. 
Conforme as ferramentas que conhecemos passarem a ter mais opções de uso e funcionalidades, será normal recorrermos à documentação para aprendermos a utilizá-las melhor. */



//            toBe

/* toBe , que utilizamos no exemplo anterior, é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. 
Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5. */

expect(5).toBe("5")


//         toEqual
/* Para compreendermos a diferença entre toEqual e toBe , precisamos entender que no JavaScript existem duas formas de atribuir valores. A primeira é para a variável e a segunda é para propriedade do objeto, bem como ao passar argumentos para uma função.
 Essas formas de atribuição são conhecidas por valor e referência .
Para nos aprofundarmos nessas duas formas, é importante entender os tipos de dados, que separamos em tipos primitivos (Ex. number, string, boolean, etc) e objetos (Ex. Objetos, Funções, Arrays, etc).
Os tipos primitivos a atribuição ocorre por valor , ou seja, uma cópia do valor original, pois eles são imutáveis. Eles são como gêmeos, uma vez o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo: */


let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro







const band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
  };
  
  const info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
  };
  


  console.log(Object.assign(band, info))