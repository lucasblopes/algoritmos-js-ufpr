let readlineSync = require('readline-sync');

let lado = 0;
lado = parseFloat(readlineSync.question(`Digite o comprimento de um lado do poligono: `));
let lado_anterior = lado; //variavel de comparacao
let eh_regular = true;

while ((lado != 0) & eh_regular) { 
    lado = parseFloat(readlineSync.question(`Digite o comprimento do proximo lado do poligono: `));
    if ((lado != lado_anterior) & (lado != 0)) {eh_regular = false}; //se dois lados consecutivos forem diferentes eh falso
    lado_anterior = lado;
}

if (eh_regular) {console.log(`O poligono e regular.`)} else {console.log(`O poligono nao e regular.`)};