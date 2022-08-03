let numeroAtualWrapper = document.getElementById("currentNumber");
let numeroAtual = 0;

function verificaNumero(numero) {
  if (numero >= 0) {
    numeroAtualWrapper.style.color = "black";
  } else {
    numeroAtualWrapper.style.color = "RED";
  }
}

function increment() {
  numeroAtual += 1;
  numeroAtualWrapper.innerHTML = numeroAtual;
  verificaNumero(numeroAtual);
}

function decrement() {
  numeroAtual -= 1;
  numeroAtualWrapper.innerHTML = numeroAtual;
  verificaNumero(numeroAtual);
}
