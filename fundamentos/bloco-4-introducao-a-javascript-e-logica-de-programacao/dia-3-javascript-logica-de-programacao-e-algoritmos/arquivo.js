/*

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

*/ 


let nome = 'jonathan'
let idade = 15;

/* if(idade > 18){
    console.log(nome + " é maior de idade!")    
}else if(idade >= 1 && idade < 18 ){
    console.log(nome + " é menor de idade!")
} */



console.log(nome + (idade > 18? " é maior de idade!":" é menor de idade!"));


// Exemplo de operador ternario 2 estagios

/* let emailValido = true;
let senhavalida = false;
let credenciaisvalidas = emailValido ? (senhavalida ? "Credencias validas " : "Senha inválida") : "Email Invalido."
    console.log(credenciaisvalidas); */