function expressaoValida(entrada: string): boolean {
    const regex = /^(\d+([+\-*/]\d+)*\d*)$/;
    return regex.test(entrada);
}

if(expressaoValida("14+9/7+5*3")){
    console.log("Expressão VÁLIDA")
} else {
    console.log("Expressão INVÁLIDA")
}
