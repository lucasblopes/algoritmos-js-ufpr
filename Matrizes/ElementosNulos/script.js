let readlineSync = require('readline-sync');
let matriz = [];

//entrada de dados na matriz
function lerMatriz(mat){
    let lin = parseFloat(readlineSync.question(`Digite o numero de linhas da matriz: `));
    let col = parseFloat(readlineSync.question(`Digite o numero de colunas da matriz: `));
    for(let i = 0; i < lin; i++){
        mat.push([]);
        for(let j = 0; j < col; j++){
            mat[i][j] = parseFloat(readlineSync.question(`[${i}][${j}] = `));
        }
    }
}

function linhasNulas(mat){
    let validador = true;
    let contador = 0;
    for(let i = 0; i < mat.length; i++){
        validador = true;
        for(let j = 0; j < mat[i].length; j++){
            if (mat[i][j] != 0){
                validador = false;
            }
        }
        if (validador) {contador++};
    }
    return contador;
}

function colunasNulas(mat){
    let validador = true;
    let contador = 0;
    for(let j = 0; j < mat[0].length; j++){
        validador = true;
        for(let i = 0; i < mat.length; i++){
            if (mat[i][j] != 0){
                validador = false;
            }
        }
        if (validador) {contador++;}
    }
    return contador;
}
lerMatriz(matriz);

//imprime matriz na forma bidimensional
for(let cont = 0; cont < matriz.length; cont ++){
    console.log(matriz[cont]);
}

console.log(`Linhas nulas = ${linhasNulas(matriz)}`);
console.log(`Colunas nulas = ${colunasNulas(matriz)}`);

