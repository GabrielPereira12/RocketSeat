/*
    Promise

    A promessa de que algo irá acontecer. Poderá dar certo ou errado mas irá acontecer
*/

let aceitar = false

console.log("Inicio da promessa")
const promessa = new Promise((resolve, reject) => {
    
    if (aceitar) {
        return resolve("Promessa cumprida")
    }else {
        return reject("Promessa rejeitada")
    }
})

console.log("Aguardando")

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log("Fim da promessa"))