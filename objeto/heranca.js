const ferrari = {
    modelo: 'F40',
    velMax: 320
}
const volvo = {
    modelo: 'v40',
    velMax: 200
}
console.log(ferrari.__proto__) //__proto__ -> acessar o prototype
console.log(ferrari.__proto__=== Object.prototype)
console.log(volvo.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__===null)

