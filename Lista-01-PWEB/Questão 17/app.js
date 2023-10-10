let numero = parseInt(prompt("insira um número para calcular o fatorial:"));
let fatorial = 1;

if (numero < 0) {
  alert("O fatorial de um número negativo não é definido.");
} else if (numero === 0) {
  alert("O fatorial de 0 é 1.");
} else {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  alert("O fatorial de " + numero + " é " + fatorial);
}
