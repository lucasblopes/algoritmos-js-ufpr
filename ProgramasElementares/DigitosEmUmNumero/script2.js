//utilizando strings
let readlineSync = require('readline-sync');

let n = String(readlineSync.question(`Digite um numero n: `));
let m = String(readlineSync.question(`Digite um numero m: `));
let cont = 0;

for(let i in n){
    if(m == n[i]) cont++;
}

console.log(cont);


