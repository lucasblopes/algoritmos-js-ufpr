/*Questão 2 prova Apple Developer Academy
Input: Numer inteiro
Output: Decomposição do numero na base decimal */

let readlineSync = require('readline-sync');
let input = readlineSync.question();

//decompoe o numero no sistema decimal
function decomporNumero(num){
    //maior potencia
    let resultado = "";
    let digito;
    let pot = num.length - 1;

    for(let i in num){
        digito = num[i];
        if (digito != 0){
            if (pot == 0) resultado += `${digito}`;
            else if (pot == 1 && digito == 1) resultado += `10 + `
            else if (pot == 1) resultado += `${digito}*10 + `;
            else if (digito == 1) resultado += `10^${pot} + `;
            else resultado += `${digito}*10^${pot} + `
        }
        pot--;
    }
    console.log(resultado);
}

let numero = input;
decomporNumero(numero);