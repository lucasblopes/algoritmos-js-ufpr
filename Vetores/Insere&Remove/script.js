let readlineSync = require('readline-sync');
let comando = 1;
let vetor = [];

// Auxilia o usuario com as intrucoes
function instrucoes() { 
    console.log("[1]: Adiciona um numero no final do vetor;");
    console.log("[2]: Remover um elemento do vetor;");
    console.log("[3]: Ordenad o vetor em ordem crescente;");
    console.log("[0]: Imprime o vetor e finaliza as operações;");
}

do {
    instrucoes();
    comando = parseFloat(readlineSync.question("cmd = "));
    switch (comando) {
        //adiciona um numero no final do vetor (metodo .push())
        case 1:
            numero = parseFloat(readlineSync.question("Digite o numero que quer adicionar ao vetor: "));
            vetor.push(numero);
            console.log(vetor);
            break;
        //remove um elemento do vetor, caso ele exista (metodo .splice(pos,n))
        case 2:
            numero = parseFloat(readlineSync.question("Digite o numero que quer remover do vetor: "));
            let achou = false;
            for (let i = 0; i < vetor.length; i++){
                if (vetor[i] == numero) {
                    vetor.splice(i, 1);
                    achou = true;
                }
            }
            if (! achou) {console.log(numero, "nao esta presente no vetor!")};
            console.log(vetor);
            break;
        //ordena em ordem crescente os numeros do vetor,  (metodo .sort())
        case 3: 
            vetor.sort();
            console.log(vetor);
            break;
        default:
            if (comando != 0) {
            console.log("Comando invalido")};
            break;
    }
} while (comando != 0);
console.log("vetor resultante: ", vetor);