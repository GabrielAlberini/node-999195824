const lista = document.querySelector("ul")


const traerUsuarios = async () => {
  const response = await fetch("http://localhost:1234/users", {
    method: "GET"
  })

  const users = await response.json()

  users.forEach((user) => {
    const li = document.createElement("li")
    li.textContent = "ID: " + user.id + " - " + user.name

    lista.appendChild(li)
  })
}

traerUsuarios()