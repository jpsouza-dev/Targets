function contarLetraA() {
  // Obtém o valor do texto digitado pelo usuário
  const texto = document.getElementById("texto").value;

  // Converte a string para minúsculas para facilitar a contagem
  const textoLower = texto.toLowerCase();

  // Encontra todas as ocorrências da letra 'a'
  const ocorrencias = textoLower.match(/a/g);

  // Se 'ocorrencias' é null, isso significa que 'a' não foi encontrado
  const quantidade = ocorrencias ? ocorrencias.length : 0;

  // Exibe o resultado
  document.getElementById("resultado").textContent =
    quantidade > 0
      ? `A letra 'a' está presente e ocorre ${quantidade} vez(es).`
      : "A letra 'a' não está presente na string.";
}
