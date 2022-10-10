/*Le uma sequencia de numeros e imprime a soma maxima que pode ser obtida somando os numeros de uma subsequencia*/

let readlineSync = require('readline-sync');
let sequencia = [];

function lerSequencia(vetor){
    let tam = parseFloat(readlineSync.question("Digite a quantidade de numeros desejada: "));
    for (let i = 0; i < tam; i++){ 
        vetor[i] = parseFloat(readlineSync.question(`Digite o ${i+1}o numero: `));
    }
}

function somaMaxima(vetor){
    let soma, somaAux = 0;
    for (let i = 0; i < vetor.length; i++){
        somaAux = 0;
        for (let j = i; j < vetor.length; j++){
            if ((i == 1) && (j == 1)) {
                somaAux = vetor[i];
                soma = somaAux;
            }else {
                somaAux += vetor[j];
                if (somaAux > soma) {soma = somaAux};
            }
        }
    }
    return soma;
}

lerSequencia(sequencia);
console.log(`soma maxima = ${somaMaxima(sequencia)}`);