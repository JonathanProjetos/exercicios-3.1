/*                                //VARIAVEIS
let age = 20;
let name = "Hulk";
// Não pode iniciar o nome de uma variavel utiklizando numeros e nem espaços.
// camelCase começar com minuscula seguindo de outra para começando com maiuscula.
// Js é case sensitive as diferenças de maiusculas e minusculas faz a diferença.
console.log(age)
console.log(name)
const myNme = "Jonathan santos";
const birthCity = "Contagem-MG";
let birthYear = 1990;
console.log(myNme);
console.log(birthCity);
console.log(birthYear)
birthYear = 2030;
console.log(birthYear);
//birthCity = ".congonhas"
//console.log(birthCity)
                            //TIPOS PRIMITIVOS, TIPAGEM DINÂMICA E OPERAÇÕES ARITIMÉTICAS
*/
/*
//EXEMPLOS
let movie = "Avengers"; // Tipo string literal "dentro da string podera qualquer tipo de caractere."
let score = 10.89; //number do tipo numeral receberá numero inteiros e decimais.
let isvalid = true; // tipo boleano faz referência de sim ou não ou 0 e 1 etc..
let name; // tipo undefined o valor desta variavel ainda não foi definido.
let color = null; // tipo null anula o valor da variavel ate que altere o valor de null por outra coisa.
//Sinas de incremento e decremento 
let salario = 3000;
salario ** 3 // modelo de exponenciação.
salario + 1 // sera o mesmo que salario++
salario - 1 // Seria o mesmo que salario--
//São formas mais abreviadas para tratar está condição.
*/
/*
let patientId = 50;
    patientId = "50"
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof patientAge);
console.log(typeof patientId);
*/
/*
const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = 26;
console.log(perimeter)

                                //CONDIÇÕES IF E ELSE
const nota = 10000;


if(nota >= 80 && nota <= 100){
    console.log("voçe foi aprovado");
}else if(nota >= 60 && nota < 80){
    console.log("Voce está de recuperação")
}else if(nota >= 0 && nota < 60){
    console.log("Voce foi reprovado")
}else{
    console.log("Voce não participou do test")
}
*/
                                    //Operadores Lógicos

// Aqui vamos falar de "&& || !" ou "é , ou ,nâo" ou and, or, not 

//Operador AND, &&
/* Exemplo de AND ou E.

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
Como o operador e binário ele precisa de 2 comprarações e nesta comparação as duas tem que ser verdadeiras para ser true;

let carro = "azul"
let valorCarro = 5000

if(carro === "azul" && valorCarro === 50000){
    console.log("Este é exatamente o carro que queria")
}else{
    console.log("O estilo não me agradou e o valor e bem surreal")
}
//Sistema de encadeamento carrega o mesmo conceito de que tudo deve ser true para ter um resultado true.
exempo:
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao; true
ou
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false



const currentHour = 2;
var message = "";

if(currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir" 
}else if(currentHour > 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D"
}else if(currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?"
}else if(currentHour >= 11 && currentHour <= 14){
    message = "Hora do almoço!!!"
}else if(currentHour >= 4 && currentHour <= 11){
    message = "Hmmm, cheiro de café recém passado"        
}else{
    message = "Ou está dormindo, ou esta fora do horário."
}
console.log(message);

*/

/*
Operador OR, ||

Operador do tipo "ou", "||" "simbolo nomeado como PIPE" avalia se a menos uma condição  e verdadeira e se sim ela será true o unico momento 
que será false e quando as comparações forem ambas false alguns exemplos a seguir:

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let weekday = "sabado"

if(weekday === "sabado" || weekday === "domingo"){
    console.log("FINALMENTE, descanso merecido UwU")
}else{
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}



//Operador NOT

O operador not ou ! nega o resultado real de uma afirmação ex:   console.log((2 + 2) === 4) por sinal true 
console.log(!(2 + 2) === 4) terá como resultado sendo false.

exemplo em strings:

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

Em Números.

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true

...e em muitos outros elementos. As possibilidades são enormes!!!
*/

alert("olá mundo!");