// const e let são locais e só funcionam no escopo onde foi criada.

// Irá gerar um erro, porque user não existe nesse contexto.
// console.log("Nome do usuário:", user)

{
  let user = "Rodrigo Gonçalves"

  // Dentro do mesmo escopo irá encontrar a variável user.
  console.log("Nome do usuário:", user)
}

// Também irá gerar um erro, mesmo ao tentar usar depois de criada (porém, em outro contexto)
// console.log("Nome do usuário:", user)

// Exemplo de variável declarada no contexto global e atualizada dentro de um escopo.
let value = 10

{
  value = 0
  console.log("Valor dentro do escopo: ", value)
}

console.log("Valor fora do escopo: ", value)

{
  /* 
    Exemplo da constante criada em um contexto.
  */

  const email = "rodrigo.goncalves@email.com"
  console.log("Email dentro do escopo: ", email)
}

// Ira gerar um erro porque a variável email foi criada em outro contexto e não existe nesse.
console.log("Email fora do escopo: ", email)

/* 
  var ou let?
  
  É preferível usar let e const em vez de var. Eles oferecem escopo de bloco mais previsível, evitam problemas associados ao hoisting e são mais alinhados com as práticas modernas de JavaScript. 
  
  Use:
   - const para variáveis que não serão reatribuídas.
   - let para variáveis que podem ser reatribuídas.
*/
