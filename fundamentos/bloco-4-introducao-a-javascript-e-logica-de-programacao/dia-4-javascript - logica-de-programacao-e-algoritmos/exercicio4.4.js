/* let fruits = [3, 4, 10, 1, 12];
let soma = 0;
for (let index = 0; index < fruits.length; index+= 1) {
    
    soma = soma + fruits[index]
    
}

if(soma > 15){
    console.log('resultado é ' + soma + ' então é maior que 15');
}else{
    console.log('resultado é ' + soma + ' então é menor que 16');
}
 */

//exercicio 01 fatorial

/* let fatorial = 10;
let soma = 1;

for (let index = fatorial; index >= 1; index -= 1) {

    soma = soma * index
    console.log(soma);

}  */


// exercicio 020,

/* let word ='tryber';
let aocontrario = '';

for (let index = word.length -1; index >= 0 ; index -= 1) {
  
  aocontrario = aocontrario + word[index];  
}
console.log(aocontrario); */

//exercicio 03

/* let array = ['java', 'javascript', 'python', 'html', 'css'];

let conferencia = '';
let conteiner = ''; */
/* 
for (let index = 0; index < array.length; index++) {


   //conferencia = conferencia + array[index]
  conferencia = array[0]
   if (conferencia > array[index]) {
       
   }
}
    
console.log(conferencia);
 */
/* let valor = 50;
let numeros = [];
let naoeprimo = 0;
let lista2 = [];

for (let index = 2; index <= valor; index+=1) {
 
   
    numeros.push(index)    
    
    if(numeros[index]%2 === 0){
        lista2.push(index)
        console.log(numeros)
    }
    
}
//console.log(numeros);
console.log(lista2);

//console.log(naoeprimo); */


/* let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };

  
  car['ano'] = 1990
  

  let array = [1,2,4,5,7,8,car,20];
  array[6]
console.log(array[6]);

 */

/* let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    diasDaSemana['1']; // SyntaxError: Unexpected number
    console.log(diasDaSemana['1']); // domingo

    let conta = {
        agencia: '0000',
        banco: {
          cod: '012',
          id: 4,
          nome: 'TrybeBank',
        },
      };
      
      let infoDoBanco = 'banco';
      console.log(conta['banco']); // { cod: '012', id: 4, nome: 'TrybeBank' }
      console.log(conta[infoDoBanco]['nome']); // TrybeBank
      
      console.log(conta.agencia); // 0000
      console.log(conta['agencia']); // 0000
      
      console.log(conta.banco.cod); // 012
      console.log(conta['banco']['id']); // 4


      let usuario = {
        id: 99,
        email: 'jakeperalta@gmail.com',
        infoPessoal: {
          nome: 'Jake',
          sobrenome: 'Peralta',
          endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
          },
        },
      };
      
      console.log(usuario['id']); // 99
      console.log(usuario.email); // jakeperalta@gmail.com
      
      console.log(usuario.infoPessoal.endereco.rua); // Smith Street
      console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque */

/* let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'silva',
    age: 34,
    medals: {
        golden:'2',
        silves: '3'
    } 
}
player['bestInTheWorld'] = records = [2006, 2007, 2008, 2009, 2010, 2018]
//console.log(player.bestInTheWorld[1]);
//console.log("A jogadora " + player['nome'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade.')
//console.log('A jogadora ' + player.name +' '+player.lastName+ ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length +' vezes.');
console.log('A jogadora possui '+player.medals.golden +' medalhas de ouro e '+player.medals.silves+ ' medalhas de prata.'); */

/* let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index,cars[index]);
} */

/* let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  } */

  
/* let food = ['hamburguer', 'bife', 'acarajé'];
As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;
Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.
Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in . Vejamos o exemplo:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;
Legal, né?
 */
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (const key in names) {
     
      console.log('Olá '+ names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (const key2 in car) {
     console.log(key2,car[key2])
  }