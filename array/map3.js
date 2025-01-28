Array.prototype.map3 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preço": 3.45 }',
    '{ "nome": "Caderno", "preço": 13.90 }',
    '{ "nome": "Kit de Lapis", "preço": 41.22 }',
    '{ "nome": "Caneta", "preço": 7.50 }'
]
//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map3(paraObjeto).map3(apenasPreco)
console.log(resultado)