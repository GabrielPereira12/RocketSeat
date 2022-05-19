const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3002')

//Mostrar o conteudo da URL passada pelo localhost usando o axios
app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/jakeliny')
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
})


// Pegando a imagem de perfil do github
app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/jakeliny')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})