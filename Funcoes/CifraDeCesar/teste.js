let palavra = "javascriptloops";

    let vogais = "aeiou";
    let consoantes = "bcdfghjklmnpqrstvwxyz";
    
    for(let i = 0; i < palavra.length; i++){
        if(vogais.includes(palavra[i])){
            console.log(palavra[i]);
        }
    }
    
    for(let i = 0; i < palavra.length; i++){
        if(consoantes.includes(palavra[i])){
            console.log(palavra[i]);
        }
    }