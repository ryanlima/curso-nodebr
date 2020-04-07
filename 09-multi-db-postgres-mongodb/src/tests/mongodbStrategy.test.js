const assert = require('assert')
const MongoDb = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')

const MOCK_HEROI_CADASTRAR = {
  nome:'Mulher Maravilha',
  poder: 'Laço'
}
const context = new Context(new MongoDb())

describe('MongoDB suite de teste ', function () {
  this.beforeAll( async () => {
    await context.connect()
  })
  it('verificar conexao', async () => {
    const result = await context.isConnected()
    console.log('result', result)
    const expected = 'Conectado'

    assert.deepEqual(result, expected)
  })

  it('cadastrar', async () => {
    const { nome, poder } = await context.create(MOCK_HEROI_CADASTRAR)
    assert.deepEqual({nome, poder}, MOCK_HEROI_CADASTRAR)
  })

  it('listar', async () => { 
    const result = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome}, 3)
    console.log('result', result)
    const [{nome,poder}] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome})
    // const result = {
    //   nome, poder
    // }
    // assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
  })

})