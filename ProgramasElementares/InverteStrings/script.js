let readlineSync = require('readline-sync');
let s = readlineSync.question("Escreva algo que quer inverter: ");

function inverter(s){
    let inverso = s;
    try { //tenta realizar a operacao
        inverso = s.split("").reverse().join("")
    }catch (error) {    //se nao conseguir printa o erro (se for um numero por exemplo)
        console.log(error.message)
    }finally { //finally sempre eh imprimido
        console.log(inverso);
    }
}

inverter(s);