let button = document.querySelector("button")

// Alterando o valor de uma propriedade de estilos (as propriedades CSS são acessadas no padrão camelCase).
// button.style.backgroundColor = "red"

let input = document.querySelector("#name")

// Adicionar classe
input.classList.add("input-error")

// Remove classe
input.classList.remove("input-error")

// Se não tiver adiciona. Se tive remove.
// input.classList.add("input-error")
input.classList.toggle("input-error")
