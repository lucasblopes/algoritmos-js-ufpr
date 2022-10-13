let readlineSync = require('readline-sync');

let num = parseFloat(readlineSync.question("Digite um numero: "));

function ehPositivo(n){
    if (n > 0) return (`${n} eh positivo`)
    else if (n < 0) throw new Error(`Erro: ${n} eh negativo!`) //cria nova msg de erro
    else throw new Error(`Erro: ${n} eh zero!`) //cria nova msg de erro
}

try {
    console.log(ehPositivo(num));
} catch (e) { //e = erro
    console.log(e.message);
}