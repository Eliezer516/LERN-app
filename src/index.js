const express = require("express")
const morgan = require('morgan');
const {createConnection} = require("./database")
const path = require("path")
const cors = require('cors');

const app = express()

// configuraciones
app.set("port", process.env.PORT || 3000)

// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

//rutas
app.use("/task", require("./routes/index.routes"))

//estaticos
app.use(express.static(path.join(__dirname, "public")))

createConnection()
app.listen(app.get("port"))
console.log(`Servidor en puerto ${app.get("port")}`)
