let readlineSync = require('readline-sync');
let matriz = [];
let resultado = [[], []];

//entrada de dados na matriz
function lerMatriz(mat){
    let N = 0;
    do {
        N = parseFloat(readlineSync.question(`Digite o tamanho da matriz (NxN, N par): `))
    } while (N < 4 | N % 2 == 1);
    for(let i = 0; i < N; i++){
        mat.push([]);
        for(let j = 0; j < N; j++){
            mat[i][j] = parseFloat(readlineSync.question(`[${i}][${j}] = `));
        }
    }
    console.log("Matriz Original: ");
}

//imprime matriz na forma bidimensional
function imprimirMatriz(mat){ 
    for(let cont = 0; cont < mat.length; cont ++){
        console.log(mat[cont]);
    }
}

//monta a matriz que sera impressa
function montarResultado(num){ 
    if (resultado[0].length < 2){
        resultado[0].push(num)
    } else{
        resultado[1].push(num)
        if(resultado[1].length == 2){
            if (operacao == 0){console.log("AvaragePooling: ")}else{console.log("MaxPolling: ")};
            imprimirMatriz(resultado);
        }
    }
}

//seleciona a operacao
function realizarOperacao(mat){
    let num = 0; // 1 dos 4 valores da matriz resultante
    switch (operacao) {
        case 0: num = avgPolling(mat);
                montarResultado(num);
        break;
        case 1: num = maxPolling(mat);
                montarResultado(num);
        break; 
    }
}

//retorna a media dos valores de uma matriz
function avgPolling(mat){
    let soma = 0;
    let tam = mat.length;
    let qtd = tam*tam;

    for(let i = 0; i < tam; i++){
        for(let j = 0; j < tam; j++){
            soma += mat[i][j];
        }
    }
    let media = soma/qtd;
    return Math.round(media);
}

//retorna o valor maximo de uma matriz
function maxPolling(mat){
    let maior = mat[0][0];
    let tam = mat.length;

    for(let i = 0; i < tam; i++){
        for(let j = 0; j < tam; j++){
            if (mat[i][j] > maior){maior = mat[i][j]}
        }
    }
    return maior;
}

//divide a matriz em quatro partes 
function otimizaMatriz(mat){
    let tam = mat.length/2;
    let matAux = [];
    for (let cont = 0; cont < tam; cont++){matAux.slice([])}; //aloca as linhs na matAux
    let iMat = 0;

    for(let pI = 0; pI <= tam; pI += tam){
        for(let pJ = 0; pJ <= tam; pJ += tam){
            iMat = pI;
            for(let linha = 0; linha < tam; linha++){
                matAux[linha] = mat[iMat].slice(pJ, pJ + tam);
                iMat++;
            }
            realizarOperacao(matAux);
        }
    }
}

let operacao = parseFloat(readlineSync.question("[0] = avaragePooling [1] = maxPolling: "))
lerMatriz(matriz);
imprimirMatriz(matriz);
otimizaMatriz(matriz);