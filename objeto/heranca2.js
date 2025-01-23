// cadeia de protótipos (prototype chain)
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
Object.prototype.attr0 = '0'

console.log(filho.attr1, filho.attr2, filho.attr3)