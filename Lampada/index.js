class Lampada {
  constructor() {
    this.estado = "desligada"; // Estados possíveis: 'desligada', 'acesa', 'quente'
  }

  ligar() {
    this.estado = "acesa";
  }

  desligar() {
    if (this.estado === "acesa") {
      this.estado = "quente"; // Muda para quente antes de esfriar
    }
  }

  esfriar() {
    if (this.estado === "quente") {
      this.estado = "desligada"; // Depois de esfriar
    }
  }
}

class Sala {
  constructor() {
    this.lampada = new Lampada();
  }

  verificarEstado() {
    return this.lampada.estado;
  }
}

// Função para realizar o teste
function identificarInterruptores() {
  // Inicializar as salas e interruptores
  let sala1 = new Sala();
  let sala2 = new Sala();
  let sala3 = new Sala();

  // Simular a ligação dos interruptores
  console.log("Ligando o Interruptor 1");
  sala1.lampada.ligar();

  // Simulação de tempo para a lâmpada esquentar
  setTimeout(() => {
    console.log("Desligando o Interruptor 1 e ligando o Interruptor 2");
    sala1.lampada.desligar(); // Desliga a lâmpada na sala 1
    sala2.lampada.ligar(); // Liga a lâmpada na sala 2

    // Simulação de esfriamento da lâmpada na sala 1
    setTimeout(() => {
      sala1.lampada.esfriar();

      // Verificar os estados das lâmpadas
      let estadoSala1 = sala1.verificarEstado();
      let estadoSala2 = sala2.verificarEstado();
      let estadoSala3 = sala3.verificarEstado();

      // Determinar qual interruptor controla qual lâmpada
      let resultado = {};

      if (estadoSala1 === "quente") {
        resultado["Interruptor 1"] = "Sala 1";
      } else if (estadoSala2 === "acesa") {
        resultado["Interruptor 2"] = "Sala 2";
      } else if (estadoSala3 === "desligada") {
        resultado["Interruptor 3"] = "Sala 3";
      }

      // Exibir o resultado
      console.log("Resultado:", resultado);
    }, 1000); // Simula o tempo de esfriamento em 1 segundo
  }, 1000); // Simula o tempo de espera de 10 minutos em 1 segundo
}

// Executar a função
identificarInterruptores();
