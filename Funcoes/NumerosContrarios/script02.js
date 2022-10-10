//Nessa versao do programa sera utilizado o metodo reverse()

let readlineSync = require('readline-sync');
let num1 = parseFloat(readlineSync.question("Digite o primeiro numero: "));
let num2 = parseFloat(readlineSync.question("Digite o segundo numero: "));

function contrario(n1,n2){
    let aux = n1; //variavel auxiliar para realizar a comparacao
    aux = parseFloat( // forca ser um numero
            n1 
                .toString() //converte em string
                .split('') //converte em array, separando cada letra
                .reverse() //inverte a ordem dos elementos (letras) do array
                .join('') //junta os caracteres em uma string de novo
            ) * Math.sign(n1) //multiplica pelo sinal original
    
    if (aux == n2) {return true} else {return false};
}

if (contrario(num1, num2)) {
    console.log(`${num1} eh o inverso de ${num2}.`)
} else {
    console.log(`${num2} nao eh o contrario de ${num2}`)
};
