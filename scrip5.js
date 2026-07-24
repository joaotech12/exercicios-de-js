//lista

//const numero =[1,2,3,4,5];
//const resultado = [];
//for (let i = 0; i < numero.length; i++) {
//let conta = numero[i] * i;
//resultado.push(conta);

//}
//console.log(resultado);

const nomes =["felipe","edu","gabriel"];
const nomesInvertidos = [];
for (let i = nomes.length - 1; i >= 0; i--){
    nomesInvertidos.push(nomes[i]);
}
//console.log(nomesInvertidos) 

//exer 3 

const palavras =["Abacate","amora","macaco"]
const comLetraA = palavras.filter(palavra => palavra.startsWith("a"));
//console.log(comLetraA);

 

const numeros =[1,2,3,4,5,6,7,8,9,10];
const resultado = numeros.map(numero=>  {
if( numero % 5 === 0) return "xazam";
if( numero % 2 === 0) return "par";
return "impar";

});
//console.log(resultado);

const numeros2 =[1,2,3,4,5,6,7,8]
const somardoisValores = (somaAcumulada, numeroAtual) =>{
    return somaAcumulada + numeroAtual;
};
const valorInicial = 0;
const somaTotal = numeros2.reduce(somardoisValores, valorInicial);

//console.log(somaTotal);


const numeros3 = [1,2,3,4,5,6,7,8,9]
const numerosPares = [];
for(let = i = 0; i < numeros3.length; i++){
    const numeroAtual = numeros3[i];
    if(numeroAtual % 2 == 0) {
        numerosPares.push(numeroAtual);
    }
}
console.log(numerosPares);


