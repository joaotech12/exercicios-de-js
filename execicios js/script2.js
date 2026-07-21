const precoproduto = prompt("Digite o preço:")
const percentual = prompt("Digite o valor do desconto (%):");

const valorDesconto = (precoproduto * percentual) / 100;
alert("O valor do desconto é R$ " + valorDesconto)

//calculo de IMC 
const pesoTexto = prompt("Digite seu peso (kg):");
const peso = parseFloat(pesoTexto);

const alturaTexto = prompt("Digite sua altura (m):");
const altura = parseFloat(alturaTexto);

const imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2)); //toFixed() serve para manter apenas as casas decimais solicitadas

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else if (imc < 35);



const numeroTexto = prompt("Digite um número:");
const numero = parseInt(numeroTexto);

// Verifica se é par ou ímpar
if (numero % 2 == 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// Verifica se é múltiplo de 3
if (numero % 3 == 0) {
    console.log("É múltiplo de 3.");
}

// Verifica se é múltiplo de 5
if (numero % 5 == 0) {
    console.log("É múltiplo de 5.");
}

// Não é múltiplo de 3 nem de 5   //!= significa "diferente de", n esquecer 
if (numero % 3 != 0 && numero % 5 != 0) {
    console.log("Não é múltiplo de 3 nem de 5.");
}
