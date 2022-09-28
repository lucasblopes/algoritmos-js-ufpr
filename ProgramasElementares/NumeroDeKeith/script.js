let readlineSync = require('readline-sync');

let T1, T2, T3, n, unidade, dezena = 0;
let ehKeith = false;
let doisDigitos = true;

n = parseFloat(readlineSync.question(`Digite um numero: `));

if (n % 10 == n) {
    doisDigitos = false;
} else {
    unidade = n % 10;
    dezena = (n / 10)|0;
}

T1 = dezena;
T2 = unidade;
T3 = T1 + T2;

while ((T3 <= n) & (doisDigitos)) {
    T3 = T1 + T2; //Sequencia de Fibonacci
    T1 = T2;
    T2 = T3;
    if (T3 == n) {ehKeith = true};
}

if ((ehKeith) & (doisDigitos)) {console.log(1)} else {console.log(0)};