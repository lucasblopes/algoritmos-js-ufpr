let readlineSync = require('readline-sync');

let saldo = 0;
let credito = 0;

saldo = parseFloat(readlineSync.question('Digite o seu saldo: '));

if ((saldo >= 0) & (saldo <= 200)) {
    console.log(saldo);
    console.log('0');
} else if ((saldo >= 201) & (saldo <= 400)) { 
    console.log(saldo);
    console.log('20%');
} else if ((saldo >= 401) & (saldo <= 600)) {
    console.log(saldo);
    console.log('30%');
} else if (saldo > 601) {
    console.log(saldo);
    console.log('40%');
}