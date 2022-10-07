let readlineSync = require('readline-sync');
let vetor = [];
let qtd = 0;

function lerNumeros(vetor, qtd){
    qtd = parseFloat(readlineSync.question("Quantos numeros voce vai inserir? "));
    for (let cont = 0; cont < qtd; cont++) {
        vetor[cont] = parseFloat(readlineSync.question("Insira um numero: "));
    }
}

function ehCrescente(vetor, qtd){
    let copia = vetor.slice(); // faz uma copia do vetor com o metodo .slice()
    copia.sort();
    if (copia == vetor) {return true} else {return false};
}

lerNumeros(vetor, qtd);
console.log(vetor);

if (ehCrescente(vetor, qtd)) {
    console.log("Os numeros digitados estao em ordem crescente!")
}else {
    console.log("Os numeros digitados nao estao em ordem crescente!")
};

console.log("Invertendo a ordem do vetor...");
vetor.reverse(); // inverte a ordem dos numeros do vetor

console.log("Vetor resultante: ");
console.log(vetor);