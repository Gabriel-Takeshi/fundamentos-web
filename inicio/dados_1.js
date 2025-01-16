
let quantidade = 10;
let preco = 8.5;
let imposto = 0.45;
let precoSemImposto = quantidade * preco;
let precoComImposto = precoSemImposto * imposto + precoSemImposto;
let vf = false 


console.log('Olá');
console.log('São ' + quantidade + ' unidades de X produto');
console.log('O preço de cada unidade é '+ preco + '.') ;
console.log('Valor total sem os imposto ' + precoSemImposto + '.');
console.log('Imposto sobre cada unidade 45%.');
console.log('Portanto, o Preço final será '+ precoComImposto + '!');

console.log(typeof vf);

// Troca de Valores
let a = 7
let b = 94

console.log(a, b);

//1°
[a, b] = [b, a]

//2°
let temp = a;
a = b;
b = temp;

console.log(a, b);



