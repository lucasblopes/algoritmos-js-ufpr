let readlineSync = require('readline-sync');
let l, c = 0;

l = parseFloat(readlineSync.question('Digite o numero da linha: '));
c = parseFloat(readlineSync.question('Digite o numero da coluna: '));

if (c % 2 == 0) { // número de colunas é PAR
    if (l % 2 == 0) {console.log('BRANCA')} // C e L são PARES
    else {console.log('PRETA')}; // C é PAR e L é IMPAR
}
else if (l % 2 == 0) {console.log('PRETA')} // C é IMPAR e L é PAR
     else {console.log('BRANCA')}; // C é IMPAR e L é IMPAR
