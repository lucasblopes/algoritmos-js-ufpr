//Verifica se uma data é anterior a outra

let readlineSync = require('readline-sync');
let dia1, mes1, ano1, dia2, mes2, ano2 = 0;

function eh_anterior(d1, m1, a1, d2, m2, a2) {
    let anterior = true;
    if ((a2 < a1) | ((a2 = a1) & (m2 < m1)) | ((a2 = a1) & (m2 = m1) & (d2 <= d1))) {
        anterior = false}
    return anterior;
}

    dia1, mes1, ano1 = parseFloat(readlineSync.question('Digite a primeira data (dia, mes e ano): '));
    dia2, mes2, ano2 = parseFloat(readlineSync.question('Digite a segunda data (dia, mes e ano): '));

    if (eh_anterior(dia1, mes1, ano1, dia2, mes2, ano2)) {
        console.log('a primeira data eh anterior')}
    else {
        console.log('a primeira data nao eh anterior')};