let readlineSync = require('readline-sync');

let tipo = 0;
let area = 0;

tipo = parseFloat(readlineSync.question(`Digite o numero do tipo de azuleijo desejado (1, 2 ou 3): `));
area = parseFloat(readlineSync.question(`Digite a area que deseja preencher, em metros quadrados: `));

switch (tipo) {
    case 1: 
        console.log(`${Math.ceil(area/2)} caixas`) //obs : Math.ceil arredonda o numero inteiro para cima
        break
    case 2:
        console.log(`${Math.ceil(area/3)} caixas`) 
        break
    case 3:
        console.log(`${Math.ceil(area/4)} caixas`) 
        break
}