/*Exercicío 01
Criar uma função que exibe "Olá, mundo!" no console.*/
function mensagem(){
    console.log("Olá, mundo!");
};
mensagem();

/*Execicío 02
Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.*/
function recebeNome(nome){
    console.log(`Olá, ${nome}`);
}
recebeNome("Thales dos reis e cunha");

/*Exercicío 03
Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.*/

function dobro(num, multiplo){
    return num * multiplo;
    
};
let resultado = dobro(2, 5);
console.log(`O resultado é ${resultado}`);

/* Exercicío 04
Criar uma função que recebe três números como parâmetros e retorna a média deles.*/

function media(num01, num02, num03){
    return (num01 + num02 + num03)/3
};
let result = media(30, 20, 10);
console.log(`o resultado média é ${result}`);

/*Exercicío 05
Criar uma função que recebe dois números como parâmetros e retorna o maior deles.*/

function maiorMenor(num01, num02){
    if( num01 > num02){
        return console.log(`${num01} é maior que ${num02}`);
    }else{
        return console.log(`${num02} é maior que ${num01}`);
    };
};
let fim = maiorMenor(100, 20);
console.log(fim);
/* Exercicío 06
Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo*/
function ultima(numero){
    return numero * numero;
}
let finish = ultima(10);
console.log(`O resultado é ${finish}`);

