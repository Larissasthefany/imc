document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("conteudo");

  document.getElementById("altura").addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length > 2) {
      valor = valor.slice(0, 1) + "." + valor.slice(1);
    }
    if (valor.length > 4) {
      valor = valor.slice(0, 4);
    }
    e.target.value = valor;
  });

  document.getElementById("peso").addEventListener("input", function (e) {
    let valorPeso = e.target.value.replace(/\D/g, "");
    if (valorPeso.length > 3) {
      valorPeso = valorPeso.slice(0, 2) + "." + valorPeso.slice(2);
    }

    if (valorPeso.length > 5) {
      valorPeso = valorPeso.slice(0, 5);
    }
    e.target.value = valorPeso;
  });
  class TextoIMC {
    constructor(titulo, subtitulo, textos) {
      this.titulo = titulo;
      this.subtitulo = subtitulo;
      this.textos = textos;
    }

    criarElemento(tag, classe, texto = "") {
      const elemento = document.createElement(tag);
      if (classe) elemento.classList.add(classe);
      elemento.textContent = texto;
      return elemento;
    }

    criarSecao() {
      const section = this.criarElemento("section", "about");
      const h1 = this.criarElemento("h1", "title-default", this.titulo);
      const h3 = this.criarElemento("h3", "title", this.subtitulo);

      section.appendChild(h1);
      section.appendChild(h3);

      this.textos.forEach((texto) => {
        const p = this.criarElemento("p", null, texto);
        section.appendChild(p);
      });

      return section;
    }
  }

  const secaoIMC = new TextoIMC("IMC", "Cálculo IMC", [
    "IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.",
    "O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.",
    "Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.",
  ]);

  //ADICIONANDO A SEÇÃO AO CONTAINER
  container.appendChild(secaoIMC.criarSecao());

  const btn = document.querySelector("#btn");
  const btnLimpar = document.querySelector("#limpar");
  const inputPeso = document.querySelector("#peso");
  const inputAltura = document.querySelector("#altura");
  const resultado = document.querySelector("#resultado");

  btn.addEventListener("click", calcularImc);
  btnLimpar.addEventListener("click", limpar);

  function calcularImc() {
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.textContent = `Por favor, insira um valor válido!`;
      resultado.style.color = "red";
      return;
    }

    // Limpa o resultado anterior
    // resultado.textContent = "";

    resultado.style.color = "black";

    const imc = peso / (altura * altura);
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}\n`;

    let classificacao = "";

    if (imc < 18.5) {
      classificacao = `Abaixo do Peso`;
    } else if (imc < 24.9) {
      classificacao = `Peso Normal`;
    } else if (imc < 29.9) {
      classificacao = `Sobrepeso`;
    } else if (imc < 34.9) {
      classificacao = `Obesidade Grau 1`;
    } else if (imc < 39.9) {
      classificacao = `Obesidade Grau 2`;
    } else {
      classificacao = `Obesidade Grau 3`;
    }

    resultado.textContent += `Classificação: ${classificacao}`;
  }

  // Função para limpar os campos
  function limpar() {
    inputPeso.value = "";
    inputAltura.value = "";
    resultado.textContent = "";
  }
});
