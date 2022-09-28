let readlineSync = require('readline-sync');

let x = parseFloat(readlineSync.question(`Digite quantos numeros perfeitos voce quer: `));

let i = 1; //eh o divisor do numero
let soma = 0; //soma dos divisores
let n = 6; //eh o potencial numero perfeito (6 eh o primeiro)
let cont = 0; //indica a quantidade de numeros perfeitos encontrados

while (cont < x) {
    while (i < n) {
        if (n % i == 0) {
            soma += i; //se for divisor ele adiciona na soma
        }
        i += 1;
    }
    if (n == soma) {
        cont += 1;
        console.log(`${n} `);
    }
    soma = 0;
    i = 1;
    n += 1;
}