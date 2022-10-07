var arquivoEmails = ["email um", "email dois", "email tres"]

for(var cont = 0; cont < arquivoEmails.length; cont++){ //nao usa <= pois nao existe o elemento no indice 3, ja que conta do 0
  console.log("Processando e-mail #", cont, ": ", arquivoEmails[cont].toUpperCase()); //toUpperCase()
}