/*Programa que
imprime o sucessor e o antecessor de um número lido */

var readlineSync = require('readline-sync'); //pacote que permite a leitura de dados
var n = 0;
var sucessor = 0;
var antecessor = 0;

n = parseFloat(readlineSync.question('Digite um numero: ')); //parseFloat converte para decimal

sucessor = n + 1;
antecessor = n - 1;

console.log(`O antecessor de ${n} e ${antecessor}.`);
console.log(`O sucessor de ${n} e ${sucessor}.`);
