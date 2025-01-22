const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // in = indice
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Takeshi',
    idade: '22 anos',
    peso: '75,0 kg',
    altura: '1.80 cm'
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}