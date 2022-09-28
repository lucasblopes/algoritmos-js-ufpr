/* Programa que
recebe um valor e determina quantas notas de 100, 50, 20, 10, 5, 2 e 1 o compoe */

var readlineSync = require('readline-sync');
var num = 0;
var n100 = 0;
var n50 = 0;
var n20 = 0;
var n10 = 0;
var n5 = 0;
var n2 = 0;
var n1 = 0; 

num = parseFloat(readlineSync.question(`Digite um valor inteiro: `));

n100 = (num/100)|0; //divisao exata por 100
n50 = ((num % 100)/50)|0;   //divisao exata por 50 do resto da divisao por 100
n20 = ((num % 50)/20)|0;  
n10 = ((num % 50 % 20)/10)|0;    
n5 = ((num % 10)/5)|0;      
n2 = ((num % 5)/2)|0;       
n1 = (num % 5 % 2)|0; 

console.log(`${n100} notas de 100`);
console.log(`${n50} notas de 50`);
console.log(`${n20} notas de 20`);
console.log(`${n10} notas de 10`);
console.log(`${n5} notas de 5`);
console.log(`${n2} notas de 2`)
console.log(`${n1} moedas de 1`);

