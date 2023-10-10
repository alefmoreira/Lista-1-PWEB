
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0; 

while (true) {
  let palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
  tentativas++;

  if (palpite === numeroAleatorio) {
    alert("Parabéns! Você acertou o número " + numeroAleatorio + " em " + tentativas + " tentativas.");
    break;
  } else if (palpite < numeroAleatorio) {
    alert("Tente novamente. O número é maior.");
  } else {
    alert("Tente novamente. O número é menor.");
  }
}
