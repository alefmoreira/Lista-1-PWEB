// Solicite ao usuário que insira sua altura e peso usando prompts
let altura = parseFloat(prompt("Por favor, insira sua altura em metros (exemplo: 1.87):"));
let peso = parseFloat(prompt("Por favor, insira seu peso em quilogramas:"));

const imc = peso / (altura * altura);

if (imc < 18.5) {
  alert("Seu IMC é " + imc + " - Abaixo do peso.");
} else if (imc >= 18.5 && imc < 24.9) {
  alert("Seu IMC é " + imc + " - Peso normal.");
} else if (imc >= 25 && imc < 29.9) {
  alert("Seu IMC é " + imc + " - Sobrepeso.");
} else if (imc >= 30 && imc < 34.9) {
  alert("Seu IMC é " + imc + " - Obesidade grau 1.");
} else if (imc >= 35 && imc < 39.9) {
  alert("Seu IMC é " + imc + " - Obesidade grau 2.");
} else {
  alert("Seu IMC é " + imc + " - Obesidade grau 3.");
}
