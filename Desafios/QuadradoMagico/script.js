let readlineSync = require('readline-sync');
let matriz = [];

//entrada de dados na matriz
function lerMatriz(mat){
    let tam = parseFloat(readlineSync.question(`Digite o numero de linhas e colunas da matriz: `));
    for(let i = 0; i < tam; i++){
        mat.push([]);
        for(let j = 0; j < tam; j++){
            mat[i][j] = parseFloat(readlineSync.question(`[${i}][${j}] = `));
        }
    }
}

//imprime matriz na forma bidimensional
function imprimirMatriz(mat){ 
    for(let cont = 0; cont < mat.length; cont ++){
        console.log(mat[cont]);
    }
}

//verifica se uma funcao eh um quadrado magico
function ehQuadradoMagico(mat){
    let somaAux = 0; //soma da primeira linha para comparacao 
    let soma = 0; //soma atual
    let validador = true; //valida se eh quadrado magico ou nao
    let lin = mat.length; //numero de linhas da matriz
    let col = mat[0].length; //numero de colunas da matriz

    //verifica as linhas
    for(let i = 0; i < lin & validador; i++){
        soma = 0;
        for(let j = 0; j < col; j++){
            if(i == 0){somaAux += mat[i][j]} //define a soma para comparacao
            else{soma += mat[i][j]}
        }
        if(soma != somaAux & i != 0){validador = false};
    }
    
    //verifica as colunas
    for(let j = 0; j < col & validador; j++){
        soma = 0;
        for(let i = 0; i < lin; i++){
            soma += mat[i][j];
        }
        if (soma != somaAux){validador = false};
    }

    //verifica a diagonal principal
    soma = 0;
    for(let i = 0; i < lin; i++){
        j = i;
        soma += mat[i][j];
    }
    if (soma != somaAux){validador = false};

    //verifica a diagonal secundaria
    soma = 0;
    j = col - 1;
    for(let i = 0; i < lin; i++){
        soma += mat[i][j];
        j--;
    }
    if(soma != somaAux){validador = false};
    return validador;
}

//retorna quantos quadrados magicos podem ser formados na matriz
function qtdQuadradosMagicos(mat){ 
    let matAux = []; //matriz auxilizar
    let matVazia = []; 
    let cont = 0; //contador de quadrados magicos
    let iMat = 0;

    for(let tam = 2; tam <= mat.length; tam++){ //tamanho da matAux
        for(let c = 0; c < tam; c++){matAux.push([])};
        for(let pI = 0; pI <= mat.length - tam; pI++){
            for(let pJ = 0; pJ <= mat.length - tam; pJ++){
                iMat = pI;       
                for(let i = 0; i < tam; i++){
                    matAux[i] = mat[iMat].slice(pJ, pJ + tam);
                    iMat++;  
                }
                if(ehQuadradoMagico(matAux)){
                    console.log("QUADRADO MAGICO:")
                    cont++
                }else{
                    console.log("NAO EH QUADRADO MAGICO:")
                }
                imprimirMatriz(matAux);
                console.log("");
                
            }
        }
        matAux = matVazia.slice(); //reseta a matriz auxiliar
    } 
    return cont;
}

lerMatriz(matriz);

console.log("MATRIZ ORIGINAL:")
imprimirMatriz(matriz);
console.log("");

if(qtdQuadradosMagicos(matriz) == 0){
    console.log("A matriz nao forma nenhum Quadrado Magico :(")
}else if (qtdQuadradosMagicos(matriz) == 1){
    console.log("A matriz forma apenas 1 Quadrado Magico")
}else {console.log("A matriz forma ", qtdQuadradosMagicos(matriz), " Quadrados Magicos!")};
