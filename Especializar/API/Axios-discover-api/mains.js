const url = "http://localhost:5500/api"

// GET com axios
function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

// POST com axios
function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

const newUser = {
    name: "Mayk Oliveira",
    avatar: "https://picsum.photos/300/200",
    city: "Restaurante"
}

// Mostrar apenas um usuario
function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userId.textContent = response.data.id
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

// PUT com axios (atualizar)
function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error)) 
}

//atualização de dados
const userUpdated = {
    name: "Murilo Cirrose",
    avatar: "https://picsum.photos/300/200",
    city: "Limoeiro"
}

// DELETE com axios
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => response.log(response))
    .catch(error => console.error(error))
}

//addNewUser()
deleteUser()

getUser(19)
getUsers()
//updateUser(13, userUpdated)
