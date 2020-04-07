/*
0 obter um usario
1 obter o numer de telegone de um usuario a partir de seu ID
2 Obter o endereco do usuario pelo ID
*/

// importamos um modulo interno do node.js
const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  // quando der algum problema -> reject(erro)
  // quando success -> resolve

  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      // return reject(new Error("deu ruim de verdade"))

      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject){
    setTimeout(() => {
      return resolve({
        telefone: "11002448",
        ddd: 11
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario,  callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000)
}

// 1 - passo adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main() {
  try{
    console.time('medida-promise')
    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])
    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log(`
      Nome: ${usuario.nome},
      Telefone: (${telefone.ddd}) ${telefone.telefone},
      Endereco: ${endereco.rua}, ${endereco.numero}
    `)

    console.timeEnd('medida-promise')
  }
  catch(error){
    console.error("Deu ruim", error)
  }
}

// const usuarioPromise = obterUsuario()
// para manipular o secesso usamos a função .then
// para manipular erros, usamos o .catch
// usuarioPromise
//   .then(function(usuario){
//     return obterTelefone(usuario.id)
//     .then(function resolverTelefone(result){
//       return {
//         usuario: {
//           nome: usuario.nome,
//           id: usuario.id
//         },
//         telefone: result
//       }
//     })
//   })
//   .then(function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id)
//     return endereco.then(function resolverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//       }
//     })
//   })
//   .then(function (resultado){
//     console.log(`
//       Nome: ${resultado.usuario.nome}
//       Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//       Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//     `)
//   })
//   .catch(function(error){
//     console.error("deu ruim", error)
//   })

// obterUsuario(function resolverUsuario(error, usuario){
//   // valor null || "" || 0 === false 
//   if(error) {
//     console.error("Deu ruim em usuario", error)
//     return
//   }
//   obterTelefone(usuario.id, function resolveTelefone(error1, telefone){
//     if(error1){
//       console.error("Deu ruim em telefone", error1)
//       return
//     }
//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//       if(error2){
//         console.error("Deu ruim no endereco")
//         return
//       }

//       console.log(`
//       Nome: ${usuario.nome},
//       Endereço: ${endereco.rua}, ${endereco.numero}
//       Telefone: ${telefone.ddd} | ${telefone.telefone}
//       `)
//     })
//   })
// })
// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)