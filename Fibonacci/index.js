function pertenceAFibonacci(num) {
  if (num < 0) return false;

  let a = 0;
  let b = 1;

  while (a < num) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  return a === num;
}

function verificarFibonacci() {
  const input = document.getElementById("numberInput").value;
  const numero = parseInt(input, 10);
  const resultElement = document.getElementById("result");

  if (isNaN(numero)) {
    resultElement.textContent = "Por favor, insira um número inteiro válido.";
    return;
  }

  if (pertenceAFibonacci(numero)) {
    resultElement.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    resultElement.textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}
