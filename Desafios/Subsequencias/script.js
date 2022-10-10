/*Le uma sequencia de numeros e imprime a maior subsequencia que se repete*/

let readlineSync = require('readline-sync');
let sequencia = [];
let n = 0; //tamanho da sequencia

function lerSequencia(vetor){
    n = parseFloat(readlineSync.question("Digite a quantidade de numeros desejada: "));
    for (let i = 0; i < n; i++){ 
        vetor[i] = parseFloat(readlineSync.question(`[${i}] = `));
    }
}

function tem_subsequencias_iguais(v, tam_seg){
    let vet1, vet2 = []; //vetores que serao comparados
    let posicao = -1;
    let achou = false;

    for (let i = 0; i <= n - 2*tam_seg & !achou; i++){
        for (let p = i + tam_seg; p <= n - tam_seg; p++){
            if (v[i] == v[p]) { //verifica se há um número igual a i no vetor para iniciar a verificação da subsequência
                vet1 = v.slice(i, i + tam_seg); //cria as submatrizes para comparar utilizando .slice(inicio, final + 1)
                vet2 = v.slice(p, p + tam_seg);
                if (vet1.join("") == vet2.join("")) {posicao = i; achou = true} //cria uma string para comparar as matrizes
            }
        } 
    }
    return posicao;
}

lerSequencia(sequencia);
let pos = -1; //eh o inicio da subsequencia
let tam_subsequencia = (n / 2)|0; //inicia com o maior tamanho possivel

while ((pos == -1) & (tam_subsequencia >= 2)){
    pos = tem_subsequencias_iguais(sequencia, tam_subsequencia);
    tam_subsequencia--;
}

if (pos > -1){
    console.log(pos, " ", tam_subsequencia + 1)
} else {
    console.log("Nenhuma subsequencia :(")
};
