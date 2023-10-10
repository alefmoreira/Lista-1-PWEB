const totalNotas = 5; 
let soma = 0;

for (let i = 1; i <= totalNotas; i++) {
  let nota = parseFloat(prompt("Insira a nota " + i + ":"));
  while (isNaN(nota) || nota < 0 || nota > 10) {
    nota = parseFloat(prompt("Nota inválida! Insira a nota " + i + " novamente (entre 0 e 10):"));
  }
  soma += nota;
}

let media = soma / totalNotas;

alert("A média das notas é: " + media) 
