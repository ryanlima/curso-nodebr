const { obterPessoas } = require('./service')

/*

const item = {
  nome: 'Erick',
  idade: 12,
}

const { nome } = item
console.log(nome)
*/

Array.prototype.meuFilter = function(callback) {
  const lista = []
  for(index in this) {
    const item = this[index]
    const result = callback(item, index, this)
    // 0, "", null, undefined === false
    if(!result) continue;
    lista.push(item)
  }
  return lista
}

async function main(){
  try {
    const { results } = await obterPessoas(`a`)

    // const familiaLars = results.filter(function ( item ){
      // por padrão precisa retornar um booleano
      // para informar se deve mander ou remover da lista
      // false > remove da lista
      // true > mantem na lista
      // não encontrou = -1
      // encontrou = posicaoNoArray
      // const result = item.name.toLowerCase().indexOf('lars') !== -1
      // return result
    // })
    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`Index: ${index}`, lista.length)
      return item.name.toLowerCase().indexOf('lars') !== -1
    })

    const names = familiaLars.map(pessoa => pessoa.name)
    console.log(names)

  }catch(error) {
    console.log("Deu Ruim", error)
  }
}

main()