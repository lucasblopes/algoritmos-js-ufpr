let readlineSync = require('readline-sync');

let n = parseFloat(readlineSync.question('Digite um numero: '));
res = n*37; //resultado da multiplicacao de n por 37
let soma = 0;

while (res != 0) {
    alg = res % 10; //alg eh a unidade do resultado
    soma += alg;
    res = (res/10)|0; //o que sobra ao tirar a unidade do resultado
}

if (soma == n) {console.log('SIM')} else {console.log('NAO')};



