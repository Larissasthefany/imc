const btn = document.querySelector("#btn");
const btnLimpar = document.querySelector("#limpar");

btn.addEventListener("click", calcularImc);
btnLimpar.addEventListener("click", limpar);

function calcularImc() {
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);
  const resultado = document.querySelector("#resultado");

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.innerHTML = `Por favor, insira um valor válido!`;
    return;
  }

  // Limpa o resultado anterior
  resultado.innerHTML = "";

  const imc = peso / (altura * altura);
  resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>`;

  if (imc < 18.5) {
    resultado.innerHTML += `Classificação: Abaixo do Peso`;
  } else if (imc < 24.9) {
    resultado.innerHTML += `Classificação: Peso Normal`;
  } else if (imc < 29.9) {
    resultado.innerHTML += `Classificação: Sobrepeso`;
  } else if (imc < 34.9) {
    resultado.innerHTML += `Classificação: Obesidade Grau 1`;
  } else if (imc < 39.9) {
    resultado.innerHTML += `Classificação: Obesidade Grau 2`;
  } else {
    resultado.innerHTML += `Classificação: Obesidade Grau 3`;
  }
}

// Função para limpar os campos
function limpar() {
  document.querySelector("#peso").value = "";
  document.querySelector("#altura").value = "";
  document.querySelector("#resultado").textContent = "";
}
