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

function ehPermutacao(mat){
    let cont0 = 0;  //contador de 0 em uma coluna
    let cont1 = 0;  //contador de 1 em uma coluna
    let validador = true;
    let lin = mat.length;
    let col = mat[0].length;

    for(let j = 0; j < col & validador; j++){
        cont0 = 0;
        cont1 = 0;
        for(let i = 0; i < lin & validador; i++){
            if(mat[i][j] != 0 & mat[i][j] != 1) {validador = false}
            else if (mat[i][j] == 0) {cont0++}
            else (cont1++)
        }
        if (cont1 != 1 & cont0 != lin-1){validador = false}
    }
    return validador;
}

lerMatriz(matriz);

//imprime matriz na forma bidimensional
for(let cont = 0; cont < matriz.length; cont ++){
    console.log(matriz[cont]);
}

if(ehPermutacao(matriz)){
    console.log("A matriz esta em permutacao.")
} else {
    console.log("A matriz nao esta em permutacao")
};