// Acessa o elemento pelo selector ID.
const guest = document.querySelector("#guest-1")

console.log(guest)

// Retorna o elemento pelo selector class (querySelector retorna o primeiro que encontrar).
const firstGuest = document.querySelector(".guest")
console.log(firstGuest)

// Retorna o elemento pelo selector class (querySelectorAll retorna todos).
const guests = document.querySelectorAll(".guest")
console.log(guests)
