
function maiorNumero(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

let num1 = parseFloat(prompt("insira o primeiro número: "));
let num2 = parseFloat(prompt("insira o segundo número: "));
let num3 = parseFloat(prompt("insira o terceiro número: "));

let resultado = maiorNumero(num1, num2, num3);
alert("O maior número é: " + resultado);
