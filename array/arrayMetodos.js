const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)
pilotos.pop() //Massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift() //remove o primeiro!
console.log(pilotos)
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode add ou remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1) //Massa quebro :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)