const aprovados = ['Agatha', 'Livia', 'Aldo', 'Daniel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
//ou
const exibirAprovados = aprovados => console.log(aprovados) 
aprovados.forEach(exibirAprovados)