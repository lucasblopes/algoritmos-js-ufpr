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

//verifica se a funcao eh triangular (superior ou inferior) 
// return 0 -> nao eh triangular
// return 1 -> triangular superior
// return 2 -> triangular inferior
function ehTriangular(mat){
    //verifica se eh superior
    let validador = true;
    let i = 1;
    for(let j = 0; j < mat[0].length - 1; j++){
        for(let k = i; k < mat.length; k++){
            if(mat[k][j] != 0){validador = false};
            i++;
        }
    }
    if (validador){return 1};
    
    //verifica se eh inferior
    validador = true;
    j = 1;
    for(i = 0; i < mat.length - 1; i++){
        for(k = j; k < mat[0].length; k++){
            if(mat[i][k] != 0){validador = false};
            j++
        }
    }
    if (validador){return 2} else {return 0};

}

lerMatriz(matriz);

//imprime matriz na forma bidimensional
for(let cont = 0; cont < matriz.length; cont ++){
    console.log(matriz[cont]);
}

let resultado = ehTriangular(matriz);

if (resultado == 0){
    console.log("A matriz nao eh triangular.")
} else if (resultado == 1){
    console.log("A matriz eh triangular superior")
} else if (resultado == 2){
    console.log("A matriz eh triangular inferior")
};