//le uma sequencia de numeros e imprime o segundo maior deles

let readlineSync = require('readline-sync');
let nums = [];

//entrada de dados em um vetor
function leiaNumeros(nums, qtd){ // le o vetor de numeros
    qtd = parseFloat(readlineSync.question('Digite a quantidade de numeros que a sequencia sera composta: '));
    for (var i = 0; i < qtd; i++) {nums[i] = parseFloat(readlineSync.question(`[${i}] = `))}
}

//acha o maior numero de um vetor
function maiorNumero(vet){
    let maiorNum = vet[0];
    for(let i = 0; i < vet.length; i++){
        if(vet[i] > maiorNum){
            maiorNum = vet[i];
        }
    }
    return maiorNum;
}

leiaNumeros(nums);

let maior = maiorNumero(nums);
let x = maior;
let maiorIndex = nums.indexOf(maior);

//remove o maior numero ate que o maior seja o x
do {
    nums.splice(maiorIndex,1);
    maiorIndex = nums.indexOf(maior);
    x = maiorNumero(nums);
} while (maior == x);

console.log(x);