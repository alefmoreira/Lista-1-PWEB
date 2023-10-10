
let palavra = prompt("Insira uma palavra: ")

let palavraSemEspacos = palavra.replace(/\s/g, '').toLowerCase()
let palavraInvertida = palavraSemEspacos.split('').reverse().join('')

if (palavraSemEspacos === palavraInvertida) {
  document.write(`"${palavra}" é um palíndromo.`)
} else {
    document.write(`"${palavra}" não é um palíndromo.`)
}