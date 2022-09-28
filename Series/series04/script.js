let num = 1; //numerador
let den = 2; //denominador
let termo = num/den;
let soma = termo;

for (let i = 1; i < 10; i++) { //soma apenas ate o decimo termo
    num = den + 1;
    den = num + 1;
    if (i % 2 != 0) {termo = den/num} else {termo = num/den};
    soma += termo;
}

console.log(soma); 