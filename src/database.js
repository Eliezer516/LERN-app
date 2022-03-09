const low = require("lowdb")
const FileAsync = require("lowdb/adapters/FileAsync")

let db

async function createConnection() {
  const adapter = new FileAsync("task-db.json")
  db = await low(adapter)
  db.defaults({tasks: []}).write()
  console.log("Conectado")
}

function getConnection(){
  return db
}

module.exports = {
  createConnection,
  getConnection
}
