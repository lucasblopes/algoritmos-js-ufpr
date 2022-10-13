let readlineSync = require('readline-sync');

let n = 0;
let m = 0;
let cont = 0;

n = parseFloat(readlineSync.question(`Digite um numero n: `));
m = parseFloat(readlineSync.question(`Digite um numero m: `));
resto = n;

while (resto != 0) {
    resto = (resto/10)|0; //divisao inteira de resto por 10
    digito = resto % 10; //digito em questao e o resto da divisao de n por 10
    if (digito == m) {cont += 1};
}

console.log(cont);


