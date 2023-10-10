let numero = parseInt(prompt("insira um número para a tabuada de multiplicação:"));

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}
