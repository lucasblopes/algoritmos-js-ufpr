let readlineSync = require('readline-sync');

let ehPrimo = true;
let n = parseFloat(readlineSync.question(`Digite um numero: `));
let i = 3;

if ((n != 2) & (n % 2 == 0)) { //se for par e diferente de 2 nao e primo
    ehPrimo = false;
} else {
    while ((i <= Math.sqrt(n)) & (ehPrimo)) { //so precisa verificar os divisores ate a raiz do numero
        if (n % i == 0) {
            ehPrimo = false;
            console.log('NAO');
        }
    i += 2; //soma de 2 em 2 pois nesse laço nao entra numeros pares
    }
}

if (ehPrimo) {console.log('SIM')} else {console.log('NAO')};