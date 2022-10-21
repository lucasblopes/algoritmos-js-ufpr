/*
ex input: João Peixoto, 14 anos, Quinta série da Manhã, 1223
ex output: Nome: João Peixoto
           Idade: 14 anos
           Série: Quinta serie
           Turno: Manha
           Matrícula: 1223
 */

let readlineSync = require('readline-sync');
let input = readlineSync.question();
let dados = [];

//organiza os dados de acordo com o enunciado
function organizarDados(dados){
    //definindo o resultado como um objeto
    let idSerie = 0; //id da serie/turno em dados para checar erro
    let resultado = {
                     nome: "",
                     idade: 0,
                     serie: "",
                     turno: "",
                     matricula: 0
    }

    for (let i in dados){
        if ("0123456789".includes(dados[i][1]) && "0123456789".includes(dados[i][dados[i].length - 1])) resultado.matricula = dados[i];
        else if (dados[i].includes("anos")) resultado.idade = dados[i].split(" ")[0];
        else if (dados[i].includes("rie")) {
            idSerie = i;
            resultado.serie = dados[i].split(" ")[0];
            resultado.turno = dados[i].split(" ")[dados[i].split(" ").length - 1];
        }
        else resultado.nome = dados[i];
    }

    //acento no turno da manha
    if (resultado.turno.includes("Manha")) resultado.turno = "Manhã";
    if (!temErros(resultado, idSerie)) imprimirResultado(resultado);
}

//verifica se houve algum erro de digitação do usuario
function temErros(res, id){
    if (res.matricula <= 0) {console.log("Matricula precisa ser positiva!"); return true}
    else if (res.idade <= 0) {console.log("Idade inválida!"); return true}
    else if (res.nome == res.nome.toLowerCase()) {console.log("Nome precisa iniciar com letra maíscula!"); return true}
    if (dados[id].search("da") == -1) {console.log("Série/Turno iválida! Falta preposição!"); return true}
    else return false;
}

//imprime o resultado de acordo com o enunciadao
function imprimirResultado(res){
    console.log(`Nome: ${res.nome}`);
    console.log(`Idade: ${res.idade} Anos`);
    console.log(`Ano: ${res.serie} série`);
    console.log(`Turno: ${res.turno}`);
    console.log(`Matrícula: ${res.matricula}`);
}

for(let i in input.split(", ")){
    dados[i] = input.split(", ")[i];
}

organizarDados(dados);