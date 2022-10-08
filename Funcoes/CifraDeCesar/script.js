/*Cifra de Cesa: Le uma palavra e umprime as suas letras deslocadas 2 unidades para a direita do alfabeto */

let readlineSync = require('readline-sync');
let alfabeto = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function cifraPalavra(letra){
    if (letra == " "){return " "} //caso seja espaco retorna espaco
    else {
        for(let i = 0; i < alfabeto.length; i++){
            if (letra == alfabeto[i]){
                return alfabeto[(i+2) % 26]; //modulo 26 para funcionar y e z
            }
        }
    }
}

function criptografar(palavra){
    let criptografia = "";
    let vetPalavra = palavra.split("") //vetPalavra eh o vetor formado pelas letras de palavra
    for(let i = 0; i < vetPalavra.length; i++){
        criptografia += cifraPalavra(vetPalavra[i]);
    }
    console.log(criptografia);
}

let palavra = readlineSync.question("Digite uma palavra/frase para ser criptografada: ");
criptografar(palavra.toLowerCase());
