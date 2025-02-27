/*Exercício 01
    Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.*/
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

/*Exercício 02
    Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.*/
function MesangemClickNoConsole(){
    console.log("O botão foi clicado!");
};

/*Exercício 03
    Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.*/
function mensagemNoConsoleDeAmo(){
    console.log(" Eu amo JS")
}

/*Execício 04
    Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida,
exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.*/
function BotaoPrompt(){
    let nome = prompt('De qual cidade do Brasil você é? ');
    alert(`Estive em ${nome} e lembrei de você.`);
}

/*Exercício 05
    Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
*/
function soma(){
    const num1 = parseInt(prompt("Dígite um número:"));
    const num2 = parseInt(prompt("Dígite um número:"));
    alert(`A soma entre os número ${num1} e ${num2} = ${num1 + num2}`);
}