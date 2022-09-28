let readlineSync = require('readline-sync');

let n = 1;
let compara = 1;
let ehValorQuadrado = true;

while (n != 0) {
    n = parseFloat(readlineSync.question(`Digite um numero: `)); //le o primeiro numero do par
    compara = n;
    if (compara != 0) { //se o 0 foi digitado nao o compara
        n = parseFloat(readlineSync.question('Digite um numero: ')); //le o segundo numero do par
        if (n != compara*compara) {ehValorQuadrado = false};
    }
}

if (ehValorQuadrado) {console.log(1)} else {console.log(0)};