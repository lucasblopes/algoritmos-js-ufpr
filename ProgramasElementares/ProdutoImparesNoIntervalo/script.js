let readlineSync = require('readline-sync');

let i = 0;
let res = 1;
let A = parseFloat(readlineSync.question(`Digite o primeiro numero impar: `));
let B = parseFloat(readlineSync.question(`Digite o segundo numero impar: `));

if ((A % 2 != 0) & (B % 2 != 0) & (A <= B)) { //verifica se todas as condicoes do enunciado sao satisfeitas
    while (A+i <= B) {
        res *= (A+i);
        i +=2;
    }
} else {console.log(`erro`)};

if (res != 0) {console.log(`Resultado: ${res}.`)};