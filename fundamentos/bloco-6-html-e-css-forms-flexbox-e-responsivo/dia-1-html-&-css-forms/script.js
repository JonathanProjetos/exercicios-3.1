/*

    OPÇÕES DE TYPES PARA SER UTILIZADO JUNTO A APLICAÇÃO DO INPUT EM FORMULÁRIOS.

button : define um botão;
checkbox : permite que o usuário selecione ZERO ou MAIS opções de um número limitado de escolhas;
color : campos de entrada que devem conter uma cor para selecionar;
date : campos de entrada que devem conter uma data;
datetime-local : campo de entrada de data e hora, sem fuso horário;
email : campos de entrada que devem conter um endereço de e-mail;
file : campo de seleção de arquivo e um botão "Procurar" para uploads de arquivos;
month : permite ao usuário selecionar um mês e ano;
number : define um campo de entrada numérico;
password : os caracteres do campo de senha são mascarados (mostrados como asteriscos ou círculos);
radio : permite que um usuário selecione APENAS UMA de um número limitado de opções;
range : define um controle para inserir um número (como um controle deslizante). Intervalo padrão é de 0 a 100;
reset : redefinirá todos os valores do formulário para seus valores padrão;
search : usado para campos de pesquisa;
submit : envia dados de formulário a um manipulador de formulários(especificado na action do form );
tel : campos de entrada que devem conter um número de telefone;
text : campo de entrada de texto de linha única;
time : permite que o usuário selecione um horário (sem fuso horário);
url : campos de entrada que devem conter um endereço URL;
week : permite ao usuário selecionar uma semana e um ano.


//Os type por padão ja recebem o type ="text" por padrão portanto precisa especificar caso ele precise trabalhar
//da forma que deseja utilizando outras referências como no exemplo abaixo.


value : especifica um valor inicial para um campo de entrada;
readonly : especifica que um campo de entrada é somente leitura;
disabled : especifica que um campo de entrada deve ser desativado;
size : especifica a largura visível, em caracteres, de um campo de entrada;
maxlength : especifica o número máximo de caracteres permitidos em um campo de entrada;
min e max : especificam os valores mínimo e máximo para um campo de entrada;
multiple : especifica que o usuário tem permissão para inserir mais de um valor em um campo de entrada;
pattern : especifica uma expressão regular em relação à qual o valor do campo de entrada é verificado;
placeholder : especifica uma dica curta que descreve o valor esperado de um campo de entrada;
required : especifica que um campo de entrada deve ser preenchido antes de enviar o formulário;
step : especifica os intervalos de números válidos para um campo de entrada;
autofocus : especifica que um campo de entrada deve obter foco automaticamente quando a página é carregada;
height e width : especificam a altura e a largura de um elemento;
autocomplete : especifica se um campo de entrada deve ter o preenchimento automático ativado ou desativado.

*/





/* let localDeBody = document.querySelector("body");
let criarmain = document.createElement("main");
localDeBody.appendChild(criarmain);
let localMain = document.querySelector("main");

let criarH1 = document.createElement("h1");
criarH1.innerHTML = "Vamos fazer um test"
criarH1.style.fontSize = "40px"
criarH1.style.textAlign = "center"
localMain.appendChild(criarH1);



let criarForm = document.createElement("form");
let criarInput3 = document.createElement("input");
localMain.appendChild(criarForm);
criarForm.appendChild(criarInput3);
criarInput3.type = "checkbox"
criarInput3.name = "Lembre-me"
criarInput3.checked = "oi"
let locaForm = document.querySelector("form")




let criarInput = document.createElement("input");
criarInput.id = "input-test"
criarInput.placeholder = "digite o que deseja"
criarInput.type = "email"
criarInput.style.backgroundColor = "purple"
criarInput.style.color="white"
criarInput.style.fontFamily = "fantasy"
criarInput.style. margin = "3px"
localMain.appendChild(criarInput)

let criarButao = document.createElement("button")
criarButao.id = "butao-test-1";
criarButao.innerHTML = "vamos lá?";
criarButao.style.backgroundColor="red";
criarButao.style.color = "green";
criarButao.style.fontFamily = "fantasy";
localMain.appendChild(criarButao);

let criarInput2 = document.createElement("input");
criarInput2.id = "input-test1"
criarInput2.placeholder = "digite o que deseja"
criarInput2.type = "password"
criarInput2.style.backgroundColor = "purple"
criarInput2.style.color="white"
criarInput2.style.fontFamily = "fantasy"
criarInput2.style.marginLeft = "30px"
localMain.appendChild(criarInput2)

let criarButao2 = document.createElement("button")
criarButao2.id = "butao-test-2";
criarButao2.innerHTML = "vamos lá?";
criarButao2.style.backgroundColor="red";
criarButao2.style.color = "green";
criarButao2.style.fontFamily = "fantasy";
localMain.appendChild(criarButao2);
 */

//utilizar a tag "label" e direcionar um id para ela faz com que o argumento checagem mais o botão torna clicaveis
//para confirmação

// .prevetdefault() Previne comportamentos padão um bom exemplo o refresh pagina web que quando clica no botão 
// a pagina recarrega.
// SELETORES


//seletor css resize:none


const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//Referencia de uso do .preventDefault() link = https://cursos.alura.com.br/forum/topico-a-funcao-event-preventdefault-99182?gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KErESaLrr2Z3IGGs-m_a9-0WsSYrgyzA3OB7rnMgoVKRNTSBNNDfTIaAr34EALw_wcB

/* HREF_LINK.addEventListener("click",function(event){
    event.preventDefault()

}) */
INPUT_CHECKBOX.addEventListener("click",function(event){
    console.log(event.preventDefault());
})


INPUT_TEXT.addEventListener("keypress",function(event){
    const chavekey = event.key
    console.log(chavekey);
    if(chavekey !== "a"){
        event.preventDefault()
    }

})