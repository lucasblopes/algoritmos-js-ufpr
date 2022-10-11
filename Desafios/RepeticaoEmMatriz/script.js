let readlineSync = require('readline-sync');
let matriz = [];
let repeticoes = [];

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

//imprime matriz na forma bidimensional
function imprimirMatriz(mat){ 
    for(let cont = 0; cont < mat.length; cont ++){
        console.log(mat[cont]);
    }
}

function imprimirResultado(mat){
    if (mat.length != 0){
        console.log("Repeticoes: ")
        console.log("Numero / Pares de coordenadas")
    }else {
        console.log("Nao ha numeros repetidos na matriz")
    }

    for(let i = 0; i < mat.length; i++){
            console.log(`${mat[i][0]} = [${mat[i].splice(1)}]`)
    }
}

//verifica as repeticoes de um numero e retorna uma matriz com todas as ocorrencias
function numerosRepetidos(mat){
    let repetiu = 0;
    let num = 0; //numero que repetiu
    let anteriores = [];
    let numContabilizado = false;
    let index = 0; //indice do vetor de repeticoes
    let lin = mat.length;
    let col = mat[0].length;
    let validador = true;

    for(let i = 0; i < lin; i++){
        for(let j = 0; j < col; j++){
            repetiu = 0;
            numContabilizado = false;
            validador = true;
            if(index != 0){
                for(let c = 0; c < anteriores.length; c++){
                    if(num == anteriores[c]){validador = false};   
                }
                if (validador) {anteriores.push(num)};
            };
            for(let p = 0; p < lin; p++){
                for(let q = 0; q < col; q++){
                    if((mat[p][q] == mat[i][j]) & (p != i | q != j)){
                        repetiu++;
                        num = mat[i][j];
                        if (index != 0){
                            for(let cont = 0; cont < anteriores.length; cont++){ 
                                if(num == anteriores[cont]){
                                    numContabilizado = true;
                                }
                            }
                        }
                        if (!numContabilizado){
                            if (repetiu == 1){
                                repeticoes.push([num, i, j]);
                                index++;
                            }
                            repeticoes[index-1].push(p,q);
                        }
                    }
                }
            }
        }
    }
}

lerMatriz(matriz);
console.log("Matriz:")
imprimirMatriz(matriz);
console.log("");
numerosRepetidos(matriz);
imprimirResultado(repeticoes);


