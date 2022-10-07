let readlineSync = require('readline-sync');

let vetor = [];
let qtd = 0;

function leiaNumeros(vetor, qtd){ // le o vetor de numeros
    qtd = parseFloat(readlineSync.question('Digite quantos numeros tera no vetor: '));
    for (var cont0 = 0; cont0 < qtd; cont0++) {vetor[cont0] = parseFloat(readlineSync.question("Digite um numero: "))}
}

function somaPosicaoPares(vetor){ //realiza a soma dos indices pares
    let somaPar = 0;
    for (var cont1=0; cont1 < vetor.length; cont1++){
        if ((cont1 % 2 == 0) & (vetor[cont1] > 0)) {somaPar += vetor[cont1]}; //indice par e numero positivo (enunciado)
    }
    return somaPar;
}

function somaPosicaoImpares(vetor){ //realiza a soma dos indices impares
    let somaImpar = 0; 
    for (var cont2=0; cont2 < vetor.length; cont2++){
        if ((cont2 % 2 == 1) & (vetor[cont2] < 0)) {somaImpar += vetor[cont2]}; //indice impar e numero negativo (enunciado)
    }
    return somaImpar;
}


leiaNumeros(vetor, qtd);
let somaP = somaPosicaoPares(vetor);
let somaI = somaPosicaoImpares(vetor);

if (somaI != 0) {
    console.log(somaP / somaI)
}else if ((somaI == 0) & (somaP != 0)) {
    console.log('divisao por zero')
}else {
    console.log('vetor vazio')
}; 

