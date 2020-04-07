// docker ps 
// winpty docker exec -it 121fc3ed18b0 mongo -u ryanlima -p minhasenhasecreta --authenticationDatabase herois

// databases
// show dbs
// mudando contexto par auma database
// use herois

// mostrar tables ( colecoes)
// show collections

db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
})

db.herois.find()
db.herois.find().pretty()

for(let i=0; i<= 20000; i++){
  db.herois.insert({
    nome: `Clone-${i}`,
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
  })
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({ nome: -1 })
db.herois.find({}, { poder: 1, _id: 0})

//create
db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
})

//read
db.herois.find()

//update

db.herois.update({ _id: ObjectID("5e46ea112d173b1087b923a2")}, {nome: 'Mulher Maravilha'})

db.herois.update({ _id: ObjectId("5e46f435c1a45b7f3f590e3c")},{ $set: { nome: 'Lanterna Verde'}})


//delete
db.herois.remove({})
db.herois.remove({nome: 'Mulher maravilha'})