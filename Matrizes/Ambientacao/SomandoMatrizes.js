let matriz = [[1,2,3], [4,5,6], [7,8,9]]; 
matriz.length(); //retorna 3
let soma = 0;

for (let i = 0; i < matriz.length; i++){ //i = 0, 1, 2
    for (let j = 0; j < matriz.length; j++){ //j = 0, 1, 2
        soma += matriz[i][j]; //sintaxe --> m[i][j] (m[i,j] nao funciona)
    }
}
console.log(soma);

