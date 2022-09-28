/* Esse programa le um numero n e imprime os n primeiros numeros da serie de Fibonacci */

let readlineSync = require('readline-sync');

let n = 0;
let t1 = 0;
let t2 = 1;
let t3 = 1;
let i = 1;

do {
    n = parseFloat(readlineSync.question(`Voce que que a sequencia de Fibonacci tenha quantos termos? `))
} while (n <= 3); //repita enquanto for menor ou igual a 3

console.log(t1);
console.log(t2);

while (i <= n) {
    t3 = t1 + t2;
    t1 = t2;
    t2 = t3;
    i += 1;
    console.log(t3);
}