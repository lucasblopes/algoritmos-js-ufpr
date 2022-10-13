/* Le uma sequencia e imprime sua forma compactada e quantos vezes os numeros sao repetidos */
let readlineSync = require('readline-sync');
let vetor = [];
let distintos = [];
let ocorrencias = [];
let qtd = 0;

//le os numeros da sequencia e aloca no vetor
function lerNumeros(vetor, qtd) {
    qtd = parseFloat(readlineSync.question("Vai digitar quantos numeros na sequencia? "));
    for (let i = 0; i < qtd; i++) {
        vetor[i] = parseFloat(readlineSync.question((`Digite o ${i+1}o numero: `)));
    }
}

//imprime um vetor 
function imprimirVetor(vet) {
    console.log(vet);
}

//checa quantos numeros distintos estao presentes no vetor
function checarDistintos(vetor, distintos, ocorrencias) {
    let iguais = false;
    distintos[0] = vetor[0]; //primeiro elemento do vetor de distintos eh o primeiro do vetor inicial

    for (let i = 1; i < vetor.length; i++){
        iguais = false;
        ocorrencias[distintos.length] = 1; //todos os numeros iniciam com 1 ocorrencia

        for (let j = i-1; j >= 0; j--){
            if (vetor[i] == vetor[j]) {
                iguais = true;
                ocorrencias[distintos.length]++;
            }   
        }

        if (!iguais) { // se nao ha numeros repetidos aloca no v_dist 
            distintos[distintos.length] = vetor[i];
        }
    }
    if (distintos.length == 1) {console.log("A sequencia tem 1 numero distinto: ")}
        else {console.log(`A sequencia tem ${distintos.length} numeros distintos: `)};
}

function contarOcorrencias(vetor, distintos, ocorrencias){
    for (let i in distintos) {
        ocorrencias[i] = 0;
        for (let j = 0; j < vetor.length; j++) {
            if (distintos[i] == vetor[j]) {ocorrencias[i]++};
        }
    }
}

function imprimirOcorrencias(distintos, ocorrencias) {
    for (let i in distintos){
        if (ocorrencias[i] == 1) {
            console.log(distintos[i], " ocorre 1 vez.")
        }else {
            console.log(distintos[i], " ocorre ", ocorrencias[i], " vezes.")
        }
    }
}

lerNumeros(vetor, qtd);
imprimirVetor(vetor);
checarDistintos(vetor, distintos, ocorrencias);
imprimirVetor(distintos);
contarOcorrencias(vetor, distintos, ocorrencias);
imprimirOcorrencias(distintos, ocorrencias);