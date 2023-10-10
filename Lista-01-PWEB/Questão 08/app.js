const numeroCerto = 7; 

do {
  let palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"));

  if (palpite === numeroCerto) {
    window.alert("Parabéns! Você acertou o número.");
  } else {
    window.alert("Tente novamente.");
  }
} while (palpite !== numeroCerto);
