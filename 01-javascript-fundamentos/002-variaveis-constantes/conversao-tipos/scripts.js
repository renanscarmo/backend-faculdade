/*
  - Type conversion (type casting ou conversão de tipos): 
    ocorre quando você explicitamente transforma um valor de um tipo para outro. Isso é feito de forma consciente, usando funções ou métodos específicos para realizar a conversão.

  - Coerção de Tipos: 
    acontece de forma automática (implicitamente). O JavaScript tenta automaticamente converter um dos valores para um tipo compatível antes de realizar a operação.
 */

// Exemplo de coerção
console.log("9" + 5)

// Exemplo de conversão de string para número
console.log(Number(9) + 5)

// Exemplo de conversão de número para string
console.log(String(9))

// Exemplo de conversão de número para Boolean
console.log(Boolean(0))

// Exemplo de conversão de texto para Boolean
console.log(Boolean(""))

// Exemplo de Boolean para texto
console.log(String(false))

// Exemplo de Boolean para número
console.log(Number(true))
