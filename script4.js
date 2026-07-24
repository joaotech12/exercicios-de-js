let fraseOriginal = "Amanhã é sexta-feira, coisa boa"
let fraseFormatada = "";
for (let i = 0; i < fraseOriginal.length; i++) {
if (i % 2 == 0){
fraseFormatada += fraseOriginal[i].toUpperCase();
}else {
    fraseFormatada += fraseOriginal[i].toLowerCase();
}


}
console.log(fraseFormatada);












