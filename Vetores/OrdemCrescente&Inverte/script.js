let readlineSync = require('readline-sync');
let vetor = [];
let qtd = 0;

function lerNumeros(vetor, qtd){
    qtd = parseFloat(readlineSync.question("Quantos numeros voce vai inserir? "));
    for (let cont = 0; cont < qtd; cont++) {
        vetor[cont] = parseFloat(readlineSync.question("Insira um numero: "));
    }
}

function ehCrescente(vetor){
    function compara(a,b) {return a-b};
    let copia = vetor.slice().sort(compara); // faz uma copia do vetor com o metodo .slice()
    if (copia.join("") == vetor.join("")) {return true} else {return false};
}

function ehDecrescente(vetor){
    function compara(a,b) {return b-a};
    let copia = vetor.slice().sort(compara);
    if (copia.join("") == vetor.join("")) {return true} else {return false};
}

lerNumeros(vetor, qtd);
console.log(vetor);

if (ehCrescente(vetor)) {console.log("Os numeros digitados estao em ordem crescente!")
}else if (ehDecrescente(vetor)) {console.log("Os numeros digitaos estao em ordem decrescente!")
}else {console.log("Os numeros digitados nao estao em ordem crescente nem decrescente!")
};

console.log("Invertendo a ordem do vetor...");
vetor.reverse(); // inverte a ordem dos numeros do vetor

console.log("Vetor resultante: ");
console.log(vetor);