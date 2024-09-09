function calcularSoma() {
  // Definição das variáveis
  let indice = 12;
  let soma = 0;
  let k = 1;

  // Laço 'while' para repetir enquanto K < INDICE
  while (k < indice) {
    k = k + 1; // Incrementa K
    soma = soma + k; // Adiciona o valor de K a SOMA
  }

  // Exibe o resultado na página
  document.getElementById(
    "resultado"
  ).textContent = `O valor final de SOMA é: ${soma}`;
}
