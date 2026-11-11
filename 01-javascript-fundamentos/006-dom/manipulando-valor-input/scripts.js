//aula Manipulando valor do input 
const input = document.querySelector("input")
const form = document.querySelector("form")
/*
input.addEventListener("input", () => {
  const value = input.value
  const regex = /\D+/g
  //Retorna o padrão encontrado na strings.
  //console.log(Value.match(regex))

  //Testa se atende  padrão.
  //const isValid = regex.test(value)
  //console.log(isValid)
  })
 */
form.addEventListener("submit", (event) =>{
  event.preventDefault()
  const regex = /\D+/g

  if(regex.test(value)){
    alert("Padrão  não encontrado")
  }


  /*const value = input.value.replace(regex, "")
  console.log(value)*/
})