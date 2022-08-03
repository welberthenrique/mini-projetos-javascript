let numeroAtualWrapper = document.getElementById("currentNumber");
let numeroAtual = 0;

function increment() {
  verificaNumero(numeroAtual);
  numeroAtual += 1;
  numeroAtualWrapper.innerHTML = numeroAtual;
}

function decrement() {
  verificaNumero(numeroAtual);
  numeroAtual -= 1;
  numeroAtualWrapper.innerHTML = numeroAtual;
}

function verificaNumero(numero) {
  if (numero < 0) {
    numeroAtualWrapper.style.color = "RED";
  } else {
    numeroAtualWrapper.style.color = "black";
  }
}
