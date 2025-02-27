
//                                    EXERCÍCIOS NORMAIS DE IF E ELSE

/*Escreva um programa que solicite ao usuário um número e verifique se ele é par ou ímpar. Exiba uma mensagem adequada.
let numero = prompt("Digíte um número:")
if(numero % 2 == 0 ){
    alert("O número é par");
}else{
    alert("O número é impar");
}
*/
/*Escreva um programa que pergunte a idade do usuário e verifique se ele é maior de idade (18 anos ou mais). Exiba uma mensagem adequada
let idade = prompt("Qual a sua idade:");
if(idade >= 18){
    alert("você é maior de idade!");
}else{
    alert("você é menor de idade!");
}
*/
/*
Escreva um programa que solicite a nota de um aluno e verifique se ele foi aprovado. Considere que a nota mínima para aprovação é 7.
Exiba uma mensagem adequada.

let nota = parseFloat(prompt("Qual a sua nota:"));
if(nota >= 7){
    alert("aprovado");
}else{
    alert("Reprovado!");
}
*/

/*
Escreva um programa que solicite a temperatura em graus Celsius e verifique se está frio, moderado ou quente.
Considere que frio é abaixo de 15 graus, moderado é entre 15 e 30 graus, e quente é acima de 30 graus.
Exiba uma mensagem adequada.

let temperatura = parseFloat(prompt("Qual a temperatura atual:"))
if(temperatura < 15){
    alert("está frio!");
}else if(temperatura<= 30){
    alert("Moderado!");
}else{
    alert("Está quente!");
}
*/

/*
Escreva um programa que solicite três números ao usuário e verifique qual deles é o maior. Exiba uma mensagem adequada.
let num01 = parseFloat(prompt("Digite um número:"));
let num02 = parseFloat(prompt("Digite um número:"));
let num03 = parseFloat(prompt("Digite um número:"));

if(num01 >= num02 && num01 >= num03){
    console.log(`O maior é ${num01}`);
}else if(num02 >= num01 && num02 >= num03){
    console.log(`O maior é ${num02}`);
}else{
    console.log(`O maior é ${num03}`);
}*/

/*
Escreva um programa que solicite uma letra ao usuário e verifique se é uma vogal ou uma consoante. Exiba uma mensagem adequada.

let letra = prompt("Digite uma letra:").toLowerCase();
if(letra === "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    console.log("É uma Vogal");
}else{
    console.log("É uma consoante");
}*/

/*
Escreva um programa que solicite uma palavra ao usuário e verifique se a palavra está no singular ou no plural. 
Considere que uma palavra está no plural se termina em "s". Exiba uma mensagem adequada.

let ultima = prompt("Digite um palavra:")
if(ultima.endsWith("s")){
    console.log("A palavra está no plural.");
}else{
    console.log("A palavra está no singular.");
};*/

/*
Escreva um programa que solicite o ano de nascimento do usuário e verifique se ele nasceu em um ano par ou ímpar. 
Exiba uma mensagem adequada.

let ano = prompt("Em que ano vc nasceu:");
if(ano % 2 == 0){
    console.log("Você nasceu em um ano par");
}else{
    console.log("Você nasceu em um ano impar");
}*/


//                                    EXERCÍCIOS DE OPERADORES TERNÂRIOS

/*
OPERADORES TERNÂRIOS: Recomenda-se utiliza-la em operações simples.
SINTAXE: condição? expressão1(TRUE) : expresão2(FALSE)
EXEMPLO:
let idade = 18;
let status = (idade >= 18) ? "adulto" : "menor";
console.log(status); // "adulto"
*/

/*Verifique se um número é par ou ímpar.

let numero = 1;
let resultado = (numero % 2 === 0) ? "O número é par" : "O número é impar";
console.log(resultado);*/

/*
Verifique se uma pessoa pode votar (idade mínima de 18 anos).

let idade = 2;
let result = (idade >= 18) ? "Pode vota!" : "Não pode votar!";
console.log(result);*/

/*
Determine se uma nota é "passou" (nota maior ou igual a 60) ou "não passou".

let nota = 61;
let result = (nota >= 60) ? "Parabéns você passou!" : "Infelizmente você não passou!";
console.log(result);*/

/*
Verifique se um número é positivo, negativo ou zero.

let num = 1;
let result = (num > 0) ? "Positivo" : (num < 0) ? "Negativo" : "Zero";  
console.log(result);*/

/*
Determine se uma pessoa é "criança" (idade < 12), "adolescente" (12 <= idade < 18), ou "adulto" (idade >= 18).

let idade = 19;
let result = (idade < 12) ? "criança" : (idade < 18) ? "adolescente" :  "adulto" ;
console.log(result);*/


//                                    EXERCÍCIOS DE loop
//                                    Descrição do FOR

/*
FOR: Ele é utilizado quando sabemos quantas vezes deseja-se repetir um bloco de código.
sintaxe: for (inicialização; condição; incremento/decremento) {}
Explicação: 

Inicialização: Define uma variável de controle e seu valor inicial.
Condição: O loop continua enquanto essa condição for verdadeira
incremento/decremento: Atualiza a variável de controle após cada interação.

Exemplo:
for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime 0, 1, 2, 3, 4
}
  OBS:
soma += i;  // é equivalente a soma = soma + i;
soma = 0 + 1;
soma = 1;

soma += i;  // é equivalente a soma = soma + i;
soma = 0 + 1;
soma = 1;
10

*/
//                                        FOR

/*
Soma dos N primeiros números naturais:
Escreva um programa que calcula a soma dos primeiros N números naturais. O valor de N deve ser fornecido pelo usuário.

let n = prompt("Dígite um número:");
let soma = 0;
for(let i = 0; i <= n; i++ ){
    soma += 1;
    
}
console.log(`A soma dos primeiros ${n} números naturais é ${soma}`);*/

/*
Tabuada de um número:
Escreva um programa que gera e imprime a tabuada de um número fornecido pelo usuário (de 1 a 10).

let numero = 7;
for (let i = 1; i <= 10; i++){
    console.log(`${numero} X ${i} = ${numero * i}`);
}*/

/* 
Imprimir números pares de 1 a 20:
Escreva um programa que imprime todos os números pares de 1 a 20.

for(let i = 0; i<=20;i++){
    if(i % 2 === 0){
        console.log(i);
    }
}*/

//                                    Descrição do while
/* Esse loop repete um bloco de código enquanto a condição entre parenteses for verdadeira.
 A condição é verificada antes da execição do bloco de código

 Sintaxe: 
 while (condição) {
   Código a ser executado
}

Exemplo:
let i = 0; Variável que faz o controle de laço
while (i < 5) {  Condição para continuar o loop
  console.log(i); // Imprime 0, 1, 2, 3, 4
  i++;  incrementa o valor de i em 1 (equivalente a i = i + 1).
}
 */
//                                    EXERCÍCIOS DO WHILE
/*
Contagem regressiva:
Escreva um programa que realiza uma contagem regressiva de 10 a 1.
                                                                                                                                  
let i = 10; Define a variável onde começa o laço
while(i > 0){ Condição para continuar o loop
    console.log(i); imprimi o resultado
    i--; decrementa o valor de contador em 1 (equivalente a contador = contador - 1).
};*/ 

let i = 