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
    let q, posicao, iguais = -1;
    
    for (let i = 0; ((i <= n - 2*tam_seg) & (iguais != tam_seg)); i++){
        for (let p = i + tam_seg; ((p <= n - tam_seg) & (iguais != tam_seg)); p++){
            if (v[i] == v[p]) { //verifica se há um número igual a i no vetor para iniciar a verificação da subsequência
                iguais = 1; 
                q = p + 1; //q varre a segunda subsequencia e k varre a primeira
                for (let k = i + 1; k <= i + tam_seg - 1; k++){
                    if(v[k] == v[q]){iguais++};
                    q++;
                }
            }
        } 
        if (iguais == tam_seg){posicao = i};
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
    console.log(pos, " ", tam_subsequencia)
} else {
    console.log("Nenhuma subsequencia :(")
};
