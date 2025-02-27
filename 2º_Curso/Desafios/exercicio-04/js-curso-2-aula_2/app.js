/*Exercício 01
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros,
e peso, em quilogramas, que serão recebidos como parâmetro.*/

function calculaImc(altura, peso){
    let imc = peso/(altura * altura);
    imc = Math.round(imc)
    console.log(`Seu imc é ${imc}`);
    return imc;
};
let result = calculaImc(1.70, 100);
console.log(result);

/*Exercício 02
Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.*/

function calculaFatorial(numero){
    let fatorial = 1;
    while(numero > 0){
        fatorial *= numero;
        numero--;
    }
    console.log("O fatorial é " + fatorial);
}
let f = calculaFatorial(4);
console.log(f);

/*Exercício 03
Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso,
considere a cotação do dólar igual a R$4,80.*/

function converteDolar(real){
    let conversao = real * 4.80;
    return conversao;
}
let valorConvertido = converteDolar(10)
console.log(`O valor convertido é de ${valorConvertido} reais`);

/*Exercício 04
Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
utilizando altura e largura que serão dadas como parâmetro.*/

function calculaArea(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`A área é de ${area}`);
    console.log(`O perímetro é de ${perimetro}`);
}
let x = calculaArea(10, 2);
console.log(x);
/*Exercício 05
Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. 
Considere Pi = 3,14.*/

function calcularAreaEPerimetroCircular(raio) {
    const pi = 3.14;
    let area = pi * raio * raio;// Calcula a área
    let perimetro = 2 * pi * raio;// Calcula o perímetro (circunferência)

    console.log("Área da sala circular: " + area + " metros quadrados");
    console.log("Perímetro da sala circular: " + perimetro + " metros");
}
let y = calcularAreaEPerimetroCircular(5);
console.log(y);

/*Exercício 06
Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.*/

function calculaTabuada(number){
    let incremento = 1; // Fará com que a multiplicação comece com 1
    let resultado = ""; // Irá armazenar a tabuada
    while (incremento <= 10) { //Enquanto 1 for menor ou = a 10 irá continuar a contagem
        resultado += `${number} X ${incremento} = ${number * incremento}\n`;// O meu resultado tera um concatenação(+=) ou seja:
//quando 2x2=4 esse operador vai pegar o 4 e vai somar + 2, e assim por diante  
        incremento++;// É o responsavel pela contagem até 10, esse é o loop
    }
    return resultado; // Responsavel por retornar a tabuada, pois é uma String vazia que está armazenando a tabuada
}
let tabuada = calculaTabuada(2);
console.log(tabuada);













