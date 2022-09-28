let num = 1;
let den = 3;
let aux = den;
let soma = num/den;
for (let i = 1; i < 10; i++) { //vai ate o decimo termo
    aux = den;
    den = 2*num;
    num = 2*aux;
    soma += num/den;
}
console.log(soma);