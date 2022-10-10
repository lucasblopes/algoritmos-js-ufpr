let readlineSync = require('readline-sync');
let matriz = [[]];
let matrizCompactada = [[]];
let qtd = 0;

function lerSequencia(mat, matComp){
    qtd = parseFloat(readlineSync.question("Digite a quantidade de numeros desejada: "));
    let i = 0; //linha da matriz
    while (qtd != 0){
        for (let j = 0; j < qtd; j++){ //coluna da matriz
            mat[i][j] = parseFloat(readlineSync.question(`[${j}] = `));
        }
        i++;
        qtd = parseFloat(readlineSync.question("Digite a quantidade de numeros desejada: "));
        if (qtd != 0) {mat.push([]); matComp.push([])};
    }
}

function compactarSequencia(mat, matComp){
    let col = 1; //coluna das sequencias da matComp
    let iguais = false;
    for(let i = 0; i < mat.length; i++){
        matComp[i][0] = mat[i][0];
        col = 1;
        for(let j = 1; j < mat[i].length; j++){
            iguais = false;
            for(let k = j - 1; k >= 0; k--){
                if (mat[i][j] == mat[i][k]) {iguais = true}
            }
            if (!iguais){
                matComp[i][col] = mat[i][j];
                col++;
            }
        }
    }
}

function imprimirResultado(mat, matComp){
    for(let i = 0; i < mat.length; i++){
        console.log(`Original: ${mat[i]}`);
        console.log(`Compactada: ${matComp[i]}`);
    }
}

lerSequencia(matriz, matrizCompactada);
compactarSequencia(matriz, matrizCompactada);
imprimirResultado(matriz, matrizCompactada);

