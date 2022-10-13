/*Cifra de Cesa: Le uma palavra e umprime as suas letras deslocadas 2 unidades para a direita do alfabeto */

let readlineSync = require('readline-sync');
let alfabeto = "abcdefghijklmnopqrstuvwxyz";

function cifraPalavra(letra){
    if (letra == " "){return " "} //caso seja espaco retorna espaco
    else {
        for(let i in alfabeto){
            if (letra == alfabeto[i]){
                return alfabeto[(i+2) % 26]; //modulo 26 para funcionar y e z
            }
        }
    }
}

function criptografar(palavra){
    let criptografia = "";
    for(let i in palavra){
        criptografia += cifraPalavra(palavra[i]);
    }
    console.log(criptografia);
}

let palavra = readlineSync.question("Digite uma palavra/frase para ser criptografada: ");
criptografar(palavra.toLowerCase());
