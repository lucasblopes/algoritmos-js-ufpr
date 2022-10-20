/*Questão 1 prova Apple Developer Academy*
Input: string multipla de N seguida de um numero N
Output: string espelhada de N em N caracteres
*/

let readlineSync = require('readline-sync');
let input = readlineSync.question();

function espelharString(string, N){
    let resultado = "";
    for(let i = 0; i <= string.length - N; i+= N){
        resultado += string.slice(i, i + N).split("").reverse().join("");
    }
    console.log(resultado);
}

let string = input.split(" ")[0];
let N = parseInt(input.split(" ")[1]);
espelharString(string, N);
