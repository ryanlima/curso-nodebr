const Mongoose = require('mongoose')
Mongoose.connect('mongodb://ryanlima:minhasenhasecreta@192.168.99.100:27017/herois', 
  { useNewUrlParser: true, useUnifiedTopology: true}, function(error){
    if(!error) return ;
    console.log('Falha na conexão!', error)
  })

const connection = Mongoose.connection

// function
connection.once('open', () => console.log('database rodando!!!') )
// setTimeout(() => {
//   const state = connection.readyState
//   console.log('state', state)
// }, 500)
/*
  0: Desconectado
  1: Conectado
  2: Conectando
  3: Disconectado

*/

const heroiSchema = new Mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  poder: {
    type: String,
    required: true
  },
  insertedAt: {
    type: Date,
    default: new Date()
  }
})

const model = Mongoose.model('herois', heroiSchema)

async function main() {
  const resultCadastrar = await model.create({
    nome: 'Batman',
    poder: 'Dinheiro'
  })

  console.log('resultCadastrar', resultCadastrar)

  const listItens = await model.find()
  console.log('lista itens', listItens)
}

main()