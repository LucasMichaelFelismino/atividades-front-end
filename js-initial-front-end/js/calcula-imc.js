var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  var tdImc = paciente.querySelector(".info-imc");
  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;

  } else {
    tdImc.textContent = "Altura e/ou peso inválidos.";
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

// validação de peso e altura
function validaPeso(peso) {
  if (peso > 0 && peso < 650) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3) {
    return true;
  } else {
    return false;
  }
}