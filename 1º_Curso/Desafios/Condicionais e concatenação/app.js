/*Exercício 1
alert('Boas vindas ao nosso site!');
//Exercício 2
let nome = "Lua";
//Exercício 3
let idade = "25";
//Exercício 4
let numerDeVenda = "50";
//Exercício 5
let saldoDisponivel = "1000";
//Exercício 6
alert("Erro! Prencha todos os campos");
//Exercício 7
let mensageDeErro = "Erro! Prencha todos os campos 2";
alert(mensageDeErro);
//Exercício 8 
let name = prompt('Qual o seu nome?');
//Exercício 9
let years = prompt('Qual sua idade?');
//Exercício 10
if(years >= 18){
    alert("Você já pode tirar carteira de habilitação")
};
*/

//                                                DESAFIO 02

/* Exercício 01
Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, 
mostre "Boa semana!".

let diaDaSemana = prompt("Olá, que dia é hoje?");
console.log(diaDaSemana);
if(diaDaSemana == 'Sabado' || diaDaSemana == 'Sábado' || diaDaSemana == "Domingo"){
    alert("Bom fim de semana!");
}else{
    alert("Boa semana!");
};
*/

/*Exercício 02
Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let imparPar = prompt("Dígite um número e vou descobrir se é impar ou par:");
console.log(imparPar);
if(imparPar % 2== 1){
    alert("O número dígitado é Impar!")
}else{
    alert("O número dígitado é Par!")
};
*/

/* Exercício 03
Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, 
você venceu!". Caso contrário, mostre "Tente novamente para ganhar.

let pergunta = prompt("Qual a sua pontuação no jogo?");
console.log(pergunta);
if(pergunta >= 100){
    alert("Parabéns, você venceu!")
}else{
    alert("Tente novamente para ganhar.")
};
*/

/* Exercício 04
Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = prompt("Qual o seu saldo em conta?");
alert(`Ok, eu vi que seu saldo em conta é de RS:${saldo}!`)
*/

/*Exercício 05
Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt("Qual o seu nome:");
alert(`olá ${nomeUsuario}, bem-vindo ao meu sistema!`)
*/

//                                          Desafio 03

/* Exercício 01
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let num = 0;
while(num < 10){
    num++;
    console.log(num);
}*/

/*Exercício 02
Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let num = 11;
while(num >= 1){
    num--;
    console.log(num);
}*/

/*Exercício 03
Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let num = prompt("Digíte um número:");
while(num >=0){
    console.log(num--);
};*/

/*Exercício 04
Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.


let num = prompt("Digite um número:"); 
num = parseInt(num);
let i = 0;           // Variavel que diz onde ira começar a contagem
while (i <= num) {   // enquanto I for menor ou igual a 10
    console.log(i); // O while vai escrever o i/0
    i++;            // E ele vai acrecentar 1
}                   // ou seja enquanto i for menor que 10, o código vai escrever os numeros até 10
*/

//                                             Desafio 04

/*Execicío 01
Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log("Olá, seja bem vindo ao meu preograma!");
*/

/*Exercicío 02
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida,
utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = "Thales";
console.log(`Olá, ${nome}`);
*/

/*Exercício 03 
Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome = "Thales"
alert(`Olá, ${nome}`);
*/

/*Exercício 04
Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?.
Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let Resposta = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(Resposta);
*/

/*Exercicío 05
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor01 = 5;
let valor02 = 10;
let resultado = valor01 + valor02;
console.log(`A soma de ${valor01} e ${valor02} é igual a ${resultado}`);
*/

/*Exercício 06 
Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 5;
let valor2 = 20;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
*/

/*Exercício 07
Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt("Qual a sua idade?");
if(idade >= 18){
    console.log("Maior");
}else{
    console.log("Menor");
}
*/

/*Exercício 8
Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.
 Use if-else para imprimir a respectiva mensagem.

let numero = prompt("Dígite um número:");
numero= Number(numero);
if(numero % 2 == 0){
    alert("O número é par!");
}else{
    alert("O número é Impar!");
};
*/

/*Exercício 9
Use um loop while para imprimir os números de 1 a 10 no console.

let i = 0;
while( i <= 10){
    console.log(i++);
};*/

/*Exercício 10
Crie uma variável "nota" e atribua um valor numérico a ela. 
Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 10;
if(nota >= 7){
    console.log("Aprovado");
}else{
    console.log('reprovado')
};
*/

/*Exercício 11
Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
 
Math.random()*10;
*/

/*Exercício 12
Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

parseInt(Math.random() * 10 + 1);
*/

/*Exercício 13
Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console

parseInt(Math.random()*1000+1)
*/

