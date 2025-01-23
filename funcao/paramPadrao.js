// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 // resultado false, irá retornar 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // Zero retorna false. Resultado será 3 e não 0.

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1 //Caso fosse  a = 0 in... / b = 1 in... / c = 2 in...
    c = isNaN(c) ? 1 : c // mais seguro
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do ES2015. CORRETO e MAIS USADO.
function soma3(a = 1, b = 2, c = 3) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))