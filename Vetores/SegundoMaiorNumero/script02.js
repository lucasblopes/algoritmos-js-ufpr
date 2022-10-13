//le uma sequencia de numeros e imprime o segundo maior deles

let readlineSync = require('readline-sync');
let nums = [];

//entrada de dados em um vetor
function leiaNumeros(nums, qtd){ // le o vetor de numeros
    qtd = parseFloat(readlineSync.question('Digite a quantidade de numeros que a sequencia sera composta: '));
    for (var i = 0; i < qtd; i++) {nums[i] = parseFloat(readlineSync.question(`[${i}] = `))}
}

leiaNumeros(nums);

//acha o maior numero
let maior = nums[0];
for(let i = 0; i < nums.length; i++){
    if (nums[i] > maior){maior = nums[i]};
}
let segundoMaior = nums[0];

//acha o maior numero < maior de todos
for(let i = 0; i < nums.length; i++){
    if(nums[i] > segundoMaior && nums[i] < maior){ segundoMaior = nums[i]};
}

console.log(`O segundo maior numero da sequencia ${nums} eh o ${segundoMaior}.`);