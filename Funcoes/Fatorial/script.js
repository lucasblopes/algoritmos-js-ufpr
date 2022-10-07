let readlineSync = require('readline-sync');
let num = parseFloat(readlineSync.question(`Digite um numero: `));

// Calcula o fatorial de um número inteiro
function fatorial(num) {
    let temp = 1;
    while (num > 0) {
        temp = temp * num;
        num = num - 1;
    };
    return temp;
}

console.log(`${num}! = ${fatorial(num)}`);
