let readlineSync = require('readline-sync');

let n = parseFloat(readlineSync.question('Quer que a serie va ate qual termo? '));
let num = 1000; //numerador
let den = 1; //denominador
let S = num/den; //soma
let sinal = 1;

for (let i = 1; i < n; i++) {
    num -= 3;
    den = i;
    sinal = sinal*(-1);
    S += sinal*num/den;
}

console.log(S);