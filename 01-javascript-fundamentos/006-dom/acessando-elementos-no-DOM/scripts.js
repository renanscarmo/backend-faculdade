// Visualizar o conteúdo de document.
console.log(document)

// Obtendo o title da página.
console.log(document.title)

// Acessa o elemento pelo ID.
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostra as propriedades do objeto.
console.dir(guest)

// Retorna lista elementos pela class
const guestByClass = document.getElementsByClassName("guest")
console.log(guestByClass)

console.log(guestByClass.item(0))
console.log(guestByClass[1])

// Retorna lista elementos pela tag
const guestByTag = document.getElementsByTagName("li")
console.log(guestByTag)
