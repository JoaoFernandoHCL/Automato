function expressaoValida(entrada: string): String {
    const regex = /^(\d+([+\-*/]\d+)*\d*)$/;
    if (regex.test(entrada)){
        return "Expressão VÁLIDA";
    } else {
        return "Expressão INVÁLIDA"
    }
}

expressaoValida("12+9/3*7-23")
