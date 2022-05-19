const express = require('express')

const app = express()

app.listen('3001')


/* Query params (req.query) & (req.query.variavel)
app.route('/').get((req, res) => res.send(req.query.nome))
    
app.route('/about/user').get((req, res) => res.send(req.query))
*/



/* Route params (req.params.variavel)
app.route('/').get((req, res) => res.send("Olá"))

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))

app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))
*/



/* body params (req.body) ou (req.body."json variavel")
app.use(express.json())

app.route('/').post((req, res) => {
    const {name, cidade, livros_favoritos} = req.body
    res.send(`Me chamo ${name} e moro em ${cidade}!\nMeus livros favoritos são ${livros_favoritos[0]}, ${livros_favoritos[1]}, ${livros_favoritos[2]}`)
})
*/