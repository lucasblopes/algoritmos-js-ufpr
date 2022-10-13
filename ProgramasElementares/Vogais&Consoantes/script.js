let readlineSync = require('readline-sync');

let palavra = String(readlineSync.question("Digite uma palavra: ")).toLowerCase();
let vogais = "aeiou";
let consoantes = "bcdfghjklmnpqrstvwxyz";

//para toda letra da palavra verifica se esta inclusa na string vogais e imprime
for (let i in palavra){
    if(vogais.includes(palavra[i])){
        console.log(palavra[i]);
    }
}

//para toda letra da palavra verifica se esta inclusa na string consoante e imprime
for (let i in palavra){
    if(consoantes.includes(palavra[i])){
        console.log(palavra[i]);
    }
}
