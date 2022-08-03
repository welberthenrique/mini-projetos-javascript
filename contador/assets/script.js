let numeroAtualWrapper = document.getElementById("currentNumber");
let numeroAtual = 0;

function increment() {
  numeroAtual += 1;
  numeroAtualWrapper.innerHTML = numeroAtual;
}

function decrement() {
  if (numeroAtual <= 0) {
    alert("Contador não pode ser menor que 0");
    numeroAtualWrapper.innerHTML = 0;
  } else {
    numeroAtual -= 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
  }
}
