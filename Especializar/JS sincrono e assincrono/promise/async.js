// Criando a promessa

let resposta = false

const promessa = new Promise(function (resolve, reject) {
    if (resposta) {
        return resolve("Certo")
    } else {
        return reject("Errado")
    }
})

// Maneira mais bonita e organizada de fazer o código comentado
async function start() {
    try {
        const result = await promessa
    console.log(result)
    } catch (e) {
        console.log(e)
    } finally {
        console.log("Rodar sempre")
    }
    
}

start()

/*
// Configurando os casos da promessa
promessa
// Caso a promessa seja aceita
.then(function (response) {
    console.log(response)
})
// Caso a promessa seja recusada ou de erro
.catch(function (error) {
    console.log(error)
})
// Será executado quando a promessa finalizar
.finally(function () {
    console.log("Sempre irei executar")
})
*/