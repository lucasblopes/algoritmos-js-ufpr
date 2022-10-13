let readlineSync = require('readline-sync');

let palavra = String(readlineSync.question("Digite uma palavra: "));
let vogais = "aeiou";
let consoantes = "bcdfghjklmnpqrstvwxyz";

//para toda letra da palavra verifica se esta inclusa na string vogais e imprime
for (let i = 0; i < palavra.length; i++){
    if(vogais.includes(palavra[i])){
        console.log(palavra[i]);
    }
}

//para toda letra da palavra verifica se esta inclusa na string consoante e imprime
for (let i = 0; i < palavra.length; i++){
    if(consoantes.includes(palavra[i])){
        console.log(palavra[i]);
    }
}
