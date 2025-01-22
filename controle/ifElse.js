const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado.')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(3.0)
imprimirResultado(9.7)
imprimirResultado('Hello!') //cuidado!!! JS é uma linguagem de tipagem "fraca" / Dinamicamente tipada