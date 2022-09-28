let readlineSync = require('readline-sync');

let n = parseFloat(readlineSync.question('Quer que a serie va ate qual termo? '));
let num = 1; //numerador
let aux = n - 1; // variavel auxiliar
let den = aux; //denominador
let soma = 0; //soma

for (let i = 1; (i < n) & (aux < n); i++) {
    num = i; //num vai acrescentando de 1 a 1
    den = aux;
    aux--; //den vai diminuindo de 1 a 1 
    soma += (num/den);
}

console.log(soma);