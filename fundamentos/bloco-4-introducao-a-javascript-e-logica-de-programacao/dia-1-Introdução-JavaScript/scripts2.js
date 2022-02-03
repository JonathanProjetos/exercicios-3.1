//exercicio 1 

const idade = 20;
const anoNascimento = 1990;
let soma;

soma = idade + anoNascimento;
console.log(soma);

let sub;

sub = idade - anoNascimento;
console.log(sub);

let div;

div = idade / anoNascimento;
console.log(div);

let multi;

multi = idade * anoNascimento;
console.log(multi);


let mod;

mod = idade % anoNascimento;
console.log(mod);

//exercicio 2

const preco1 = 200
const preco2 = 300

if(preco1 > preco2){
    console.log(preco1)
}else{
    console.log(preco2)
}


//exercicio 3 
const altura1 = 140
const altura2 = 50
const altura3 = 80

if(altura1 >= altura2 && altura1 >= altura3){
    console.log(altura1);
}else if(altura2 >= altura1 && altura2 >= altura3){
    console.log(altura2);
}else if(altura3 >= altura1 && altura3 >= altura2){
    console.log(altura3)
}else{
    console.log('insira um valor')
}

//exercicio 4

const velocidade = 0;

if(velocidade >= 1){
    console.log('positive')
}else if(velocidade < 0){
    console.log('negative')
}else{
    console.log('zero')
}

//exercicio 5

const ladoA = -60;
const ladoB = 90;
const ladoC = 150;

if (ladoA > 0 && ladoB > 0 && ladoC > 0){
    console.log("false")
} else if (ladoA+ladoB+ladoC===180){
    console.log("true")
    
} else {
    console.log("invalido")
}
 
   //TIRA DÚVIDA sobre se tera q mostra qual o lado que está incorreto.
  


//exercicio 6

let peca = "Rei"
peca = peca.toLocaleLowerCase();
switch (peca) {
    case "peao":
        console.log("A peça se movimenta pela vertical.");
        break;
    case "torre":
        console.log("A peça se movimenta pela vertical e horizontal.");
        break;
    case "bispo":
        console.log("A peça se movimenta pelas diagonais.");
        break;
    case "cavalo":
        console.log("A peça faz movimento em forma de L.");
        break;      
    case "rainha":
        console.log("A peça se movimenta na diagonal, vertical, hotizontal.");
        break;
    case "rei":
        console.log("A peça se movimenta na diagonal, vertical, hotizontal.");
        break;
    default:
        console.log("Não e uma peça de xadres.")        
}
        //Tira Dúvida sobre entrada de tolowercase
        

//exercicio 7

let nota = 90;


switch (nota) {

    case (nota>=90 && nota<=100):
            console.log("A")
        break;

    case (nota >= 80 && nota < 90):
            console.log("B")
        break;
    
    case (nota >= 70 && nota < 80):
            console.log("C")
        break;
    
    case (nota >= 60 && nota < 70):
            console.log("D")
        break;

    case (nota >= 50 && nota < 60):
            console.log("E")
        break;
    
    case(nota === 0 && nota < 50):
            console.log("F")
        break;

    default:
        console.log("Não aplicavel");   

}
// PRECISO REFATORA O CODIGO UTILIZANDO IF/ELSE. EXERCICIO 07.

//exercicio 8


const valor1 = 15;
const valor2 = 9;
const valor3 = 25;

if(valor1 %2 == 0 && valor2 %2 == 0 && valor3 %2 == 0){
    console.log("True")
}else if(valor1 %3 == 0 && valor2 %3 == 0 && valor3 %3 == 1){  // tirando está linha e deixando so o else fecha o bônus.
    console.log("False")
}else{
    "Valor inválido"
}

//exercicio 9



const mesada1 = 15;
const mesada2 = 9;
const mesada3 = 25;

if(mesada1 %3 == 1 || mesada2 %3 == 1 || mesada3 %3 == 1){
    console.log("True")
}else if(mesada1 %2 == 0 || mesada2 %2 == 0 || mesada3 %1 == 0){  // tirando está linha e deixando so o else fecha o bônus.
    console.log("False.")
}else{
    "Valor inválido"
}

//exercicio 10

const custo = 300;
const venda = 600;
let imposto = 0.20 * custo; 
let valorCustoTotal = imposto + custo;
let lucro = valorCustoTotal - venda;


let quantidade = 1;

if(quantidade > 0){
    
    console.log((venda - valorCustoTotal) * quantidade)
    
}else{
    console.log("Adicione valor acima de 0.")
}


//exercicio 11



let nome = "jonathan";


let salarioBruto = 3000;
let inss = 0;

let impostoRenda = 0;

if(salarioBruto > 0){

    if(salarioBruto >= 0 && salarioBruto <= 1556.94){
        inss = salarioBruto * 0.08 
    }else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
        inss = salarioBruto * 0.09
    }else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
        inss = salarioBruto * 0.11
    }else{
        inss = 570.88
    }
    console.log(inss)
}else{
    console.log("valor incompatível")
}

let salarioInss = salarioBruto - inss

if(salarioInss > 0 ){

    if(salarioInss >= 0 && salarioInss <= 1903.98){
        impostoRenda = 0;
    }else if(salarioInss >= 1903.99 && salarioInss <= 2826.65){
        impostoRenda = salarioInss * 0.075
    }else if(salarioInss >= 2826.66 && salarioInss <= 3751.05){
        impostoRenda = salarioInss * 0.15
    }else if(salarioInss >= 3751.06 && salarioInss <= 4664.68){
        impostoRenda = salarioInss* 0.225
    }else{
        impostoRenda = salarioInss * 0.27
    }      

}else{
    console.log("Valor incompatível")
}
let  salarioLiquido = salarioInss - impostoRenda;

    console.log("O sr." + nome + " receberá um valor liquido de: " + "R$"+salarioLiquido);
