// Função para obter o próximo elemento da sequência
function proximoElemento(sequencia) {
  switch (sequencia) {
    case "a": // 1, 3, 5, 7, ___
      return 7 + 2; // Progressão aritmética com diferença 2

    case "b": // 2, 4, 8, 16, 32, 64, ____
      return 64 * 2; // Progressão geométrica com razão 2

    case "c": // 0, 1, 4, 9, 16, 25, 36, ____
      let n = Math.sqrt(36) + 1;
      return n * n; // Quadrado dos números naturais

    case "d": // 4, 16, 36, 64, ____
      let nextEvenSquare = Math.sqrt(64) + 2;
      return nextEvenSquare * nextEvenSquare; // Quadrado dos números pares

    case "e": // 1, 1, 2, 3, 5, 8, ____
      let fib = [1, 1, 2, 3, 5, 8];
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      return fib[fib.length - 1]; // Sequência de Fibonacci

    case "f": // 2, 10, 12, 16, 17, 18, 19, ____
      return 19 + 1; // Parte crescente após um ponto de observação

    default:
      return "Sequência inválida";
  }
}

// Teste das sequências
console.log("Próximo elemento de a: " + proximoElemento("a")); // 9
console.log("Próximo elemento de b: " + proximoElemento("b")); // 128
console.log("Próximo elemento de c: " + proximoElemento("c")); // 49
console.log("Próximo elemento de d: " + proximoElemento("d")); // 100
console.log("Próximo elemento de e: " + proximoElemento("e")); // 13
console.log("Próximo elemento de f: " + proximoElemento("f")); // 20
