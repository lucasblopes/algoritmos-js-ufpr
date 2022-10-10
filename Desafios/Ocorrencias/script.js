let readlineSync = require('readline-sync');

let v1 = [];
let v2 = []; //vetores 1 e 2
let n = 0;

//Entrada de dados nos vetores
function lerSequencia(vetor){
    n = parseFloat(readlineSync.question("Digite a quantidade de numeros desejada: "));
    for (let i = 0; i < n; i++){ 
        vetor[i] = parseFloat(readlineSync.question(`[${i}] = `));
    }
}

//Calcula quantas vezes a sequencia 2 esta presente na sequencia 1 
function ocorrencias(v1, v2){
    let cont = 0; //contador de ocorrencias
    let f = 0;
    let vetAux = []; //vetor auxiliar para comparacao

    for (let i = 0; i < v1.length - v2.length + 1; i++){ //i eh o ponteiro inicial e f eh o ponteiro final
        f = i + v2.length - 1;
        vetAux = v1.slice(i, f + 1);
        console.log(vetAux);
        if (vetAux.join("") == v2.join("")) {cont++}
    }
    return cont;
}
//let tamSequencia1 = parseFloat(readlineSync.question("Digite o tamanho da primeira sequencia: "));
//let tamSequencia2 = parseFloat(readlineSync.question("Digite o tamanho da segunda sequencia (menor que a primeira): "));

console.log("Leitura da primeira sequencia:")
lerSequencia(v1);
console.log("Leitura da segunda sequencia:")
lerSequencia(v2);

console.log(`A sequencia ${v2} esta presente ${ocorrencias(v1,v2)} vezes na sequencia ${v1}`)