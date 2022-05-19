const express = require('express')

const app = express()

app.listen('3000')


/* Rota DELETE
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})
*/


/* Rota PUT
app.use(express.json())

let author = "Gabriel"

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
})
//put = editar
*/


/* Rota POST
// O que vamos fazer a seguir é um middleware
app.use(express.json())

app.route('/').post((req, res) => res.send(req.body))
*/


/* Rota GET
app.route('/').get( (req, res) => res.send("Hello"))
app.route('/sobre').get((req, res) => res.send("Sobre :)"))
*/