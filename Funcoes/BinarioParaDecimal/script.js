let readlineSync = require('readline-sync');

function converteParaDecimal(n) { //converte pelo metodo do polinomio
    let pot = 2;
    let soma = 0;
    let penultimo = 0;

    if (n % 10 == 1) {soma = 1} else {soma = 0};
    n = (n/10)|0;

    do {
        while (n != 0) {
            penultimo = n % 10;
            n = (n/10)|0;
            soma += penultimo*pot;
            pot = 2*pot;
        }
    }
    while (n = 0);

    return soma;
}

let num = parseFloat(readlineSync.question('Digite um numero em binario: '));
console.log(`${num} eh ${converteParaDecimal(num)} em decimal.`);