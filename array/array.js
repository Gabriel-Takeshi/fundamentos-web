let aprovados = new Array('Carol', 'Rafaela', 'Helena')
console.log(aprovados)

aprovados = ['Carol', 'Rafaela', 'Helena']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Maria'
aprovados.push('Paulo') //add.
console.log(aprovados)
console.log(aprovados.length)

aprovados.splice(1, 2, 'elemento1', 'elemento2')
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados)
aprovados.sort() //organiza array
console.log(aprovados)