const url = "http://localhost:5510/api"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => apiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name,
      userCity.textContent = data.city,
      userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

function addNewUser() {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      resApi.textContent = data
    })
    .catch(error => console.error(error))
}

function editUser(editUserApi, id) {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(editUserApi),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      resApi.textContent = data
    })
    .catch(error => console.error(error))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    resApi.textContent = data
  })
  .catch(error => console.error(error))
}

const newUser = {
  name: 'Leonardo',
  city: 'Pedreira',
  avatar: 'https://www.github.com/leohb07.png'
}

const editUserApi = {
  name: 'Mayk Brito',
  city: 'San Francisco',
  avatar: 'http://www.github.com/maykbrito.png'
}

getUsers()
getUser(1)
addNewUser()
editUser(editUserApi, 1)
deleteUser(4)