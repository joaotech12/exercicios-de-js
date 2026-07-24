let entrada = "Palavra";
let saida = []; 

for(let i = 0; i < entrada.length; i++) {
    saida.push(entrada[i]);

}
//console.log(saida);

let entrada2 = ["amanhã", "sexta", "feira", "feriado"];
let saida2 = []
for(let i = 0; i < entrada2.length; i++){
if(i === entrada2.length - 1){
    saida2 += entrada2[i];
}else{
    saida2 += entrada2[i] + " ";
}
//console.log(saida2);
}

let numeros4 = 1,2,3,4,5,6,7;
let numeros4 =[]

let menor = numeros[0];
let maior = numeros[0];

for (let i = 1; i < numeros4.length; i++) {
  if (numeros4[i] < menor) {
    menor = numeros4[i];
  }
  if (numeros4[i] > maior) {
    maior = numeros4[i];
  }
}

let resultado = [];
resultado.push(menor);
resultado.push(maior);

console.log(resultado); 
