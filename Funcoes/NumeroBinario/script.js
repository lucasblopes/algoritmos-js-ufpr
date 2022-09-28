let readlineSync = require('readline-sync');

function ehBinario(n) {
    let alg = 0;
    let eh_binario = true;

    while ((n != 0) & eh_binario) {
        alg = n % 10; //digito que sera analisado
        n = (n/10)|0;
        if ((alg != 0) & (alg != 1)) {eh_binario = false} //se o algarismo nao for 1 nem 0 entao nao eh binario
    }

    return eh_binario;
}

let num = parseFloat(readlineSync.question('Digite um numero: '));
if (ehBinario(num)) {console.log(`${num} eh um numero binario!`)} else {console.log(`${num} nao eh um numero binario :(`)};