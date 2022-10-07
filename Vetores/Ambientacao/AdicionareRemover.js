var cores = [];
cores.push("azul");
cores.push("branco");
cores.push("vermelho");

console.log('Lista dos itens do vetor: ');
for (let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

console.log('Removendo o primeiro item do vetor: ', cores.shift()); //o metodo .shift() remove o primeiro elemento do vetor
console.log('Removendo o ultimo item do vetor: ', cores.pop()); //o metodo .pop() remove o ultimo elemento do vetor

console.log(cores); //imprime o vetor automaticamente

console.log(cores.join()); //o metodo .join() cria uma grande string com os elementos de um vetor de strings

cores.unshift("preto"); //adiciona um elemento no inicio do vetor
cores.push("amarelo");
console.log(cores);

cores.splice(1); //metodo .splice(i) corta todos os elementos a partir de i
console.log(cores);

cores.push("azul", "amarelo", "vermelho", "branco"); //adicionando varios elementos de uma vez
console.log(cores);

var pos = 1;
var n = 2;

var itensRemovidos = cores.splice(pos, n); //remove n elementos a partir da posicao pos do vetor (em direcao ao fim do array)
console.log(cores);

console.log("Itens removidos: ", itensRemovidos);

var copiar = cores.slice(); //assim que se copia um vetor;
console.log('Vetor "COPIAR": ', copiar);