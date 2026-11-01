const input = document.querySelector("input")

// keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc.)
/*input.addEventListener("keydown", (event) => {
  console.log(event.key)
})*/

// keypress - quando um tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
input.addEventListener("keypress", (event) => {
  console.log(event.key)
})

input.onchange = () => {
  inputChange()
}

function inputChange() {
  console.log("O INPUT MUDOU!")
}
