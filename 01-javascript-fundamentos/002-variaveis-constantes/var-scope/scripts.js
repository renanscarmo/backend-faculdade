/* 
  Escopo determina a visibilidade da variável.

  O Javascript tem um comportamento chamado Hoisting (içar, elevar). 
  
  Aqui, vamos ver Hosting de var (tem escopo global): move as declarações de var para o topo de seus contextos de execução antes da execução real do código. Isso significa que você pode usar uma variável antes da declaração.
*/

// Utilizar a variável user antes da declaração não gera erro (diferente de outras linguagens). O que irá retornar é Undefined, pois user ainda não tem um valor definido.
console.log("Nome do usuário:", user)

// Utilizamos as chaves para definir o escopo (o mesmo acontece estando no mesmo escopo).
{
  var user = "Rodrigo Gonçalves"
}

console.log("Nome do usuário:", user)

/* 
  Demonstrando como acontece nos bastidores do conceito de Hosting:

  // A declaração da variável vai para o topo.
  var user
  

  console.log("Nome do usuário:", user)
  
  {
    // Atribui um valor a user.
    user = "Rodrigo Gonçalves"
  }
*/
