let num = 1; //numerador
let den = 1; //denominador
let soma = 1; //soma

for (let i = 1; i < 5 ; i++) { //soma apenas ate o quinto termo
    num += den;
    den += num;
    soma += num/den;
}

console.log(soma);