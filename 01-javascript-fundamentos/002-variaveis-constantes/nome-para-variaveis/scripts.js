/*
  Palavras reservadas: são palavras reservadas pela linguagem que já possuem uma finalidade específica, portanto, não podem ser utilizados para nomear variáveis e outras coisas que veremos a frente.

  Por exemplo: não podemos criar uma variável com o nome "var".
*/

// let var = "Rodrigo"

// Lembre-se que Javascript é case-sensitive (letras maiúsculas e minúsculas fazem diferença)
let username = "Rodrigo"
let userName = "João"
console.log(username, userName)

// PODEMOS: Iniciar com esses caracteres especiais: $ _
let $email = "rodrigo@gmail.com"
let _email = "joao@gmail.com"
console.log($email, _email)

// PODEMOS: Iniciar com letras, colocar acentos.
let Ação = "Cadastrar"
console.log(Ação)

// NÃO PODEMOS: Iniciar com letras, colocar acentos.
// 1user = "Rodrigo"
// let user name = "Rodrigo"

// RECOMENDAÇÃO: Escrever em inglês e criar nomes que fazem sentido (que explique o que a variável é ou faz)
let product = "Teclado Mecânico"

// RECOMENDAÇÃO:  camelCase (corcunda do camelo)
let firstName = "Rodrigo"
let lastName = "Gonçalves"
console.log(firstName, lastName)

// RECOMENDAÇÃO: snake_case (rastejar)
let first_name = "Rodrigo"
let last_name = "Gonçalves"
console.log(first_name, last_name)
