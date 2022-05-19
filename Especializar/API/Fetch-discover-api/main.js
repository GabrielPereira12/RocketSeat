// Usando a URL do server na outra pasta que foi aberto pelo terminal
const url = "http://localhost:5500/api"

// Pegando as informações da URL e colocando no HTML pelo JS
function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => apiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

// Pegando as informações e exibindo de forma separada no HTML
function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userId.textContent = data.id
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

// Fazendo POST através do fetch (adicionando "coisas")
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alert.textContent = data)
    .catch(error => console.error(error))
}

// PUT usando o fetch (atualizando um dado)
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

// DELETE usando o fetch (apagando dados pelo id)
function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

// Novo usuario que será adicionado toda vez que o live server recarregar
// O id não é necessário pois é colocado de forma automática
const newUser = {
    name: "Olivio Ozars",
    avatar: "https://picsum.photos/200/300",
    city: "Rolândia"
}

const updatedUser = {
    name: "Manuais Chevrolet",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

const searchId = 4

// Comentando a função para que pare de ser carregada toda vez que atualizamos o arquivo
//addUser(newUser)


//updateUser(updatedUser, searchId)

//deleteUser(1)

getUsers()
getUser(searchId)