let readlineSync = require('readline-sync');

function contrario(n1, n2) {
    let inverso = 0;
    let aux = n1;

    while (aux != 0) { //esse laço de repeticao cria o numero inverso de n1
        inverso = inverso*10 + aux % 10;
        aux = (aux/10)|0;
    }

    if (inverso = n2) {
        return true
    } else 
        return false;
}

let a = parseFloat(readlineSync.question('Digite o primeiro numero: '));
let b = parseFloat(readlineSync.question('Digite o segundo numero: '));

if (contrario(a,b)) {console.log(`${a} eh o contrario de ${b}.`)} 
else {console.log(`${a} nao eh o contrario de ${b}.`)};