//Calcula a Media das notas e verifica se foi aprovado

let readlineSync = require('readline-sync');
let i, n, prova1, prova2, prova3, media = 0;

function calcular_media(Nota1, Nota2, Nota3){
    return ((Nota1 + (Nota2 * 2) + (Nota3 * 3)) / 6)|0;
}

function aprovado(media){
    if (media >= 50) {return true}
    else {return false};
}

    n = parseFloat(readlineSync.question('Digite a quantidade de semestres: '));
    for (i = 1; i < n; i++){
        prova1, prova2, prova3 = parseFloat(readlineSync.question('Digite as 3 notas: '));
        media = calcular_media(prova1, prova2, prova3);
        if (aprovado(media)) {console.log(`aluno ${i} aprovado com media ${media}`)}
        else
            {console.log(`aluno ${i} reprovado com media ${media}`)}
    }
