let numero = parseInt(prompt("Digite um numero: "));


if (numero <= 1) {
    console.log("O número não é primo.");
} else {
    let i = 2;
    let primo = true;
    while (i < numero) {
        if (numero % i === 0) {
            primo = false;
            break; 
        }
        i++;
    }
    if (primo) {
        document.write("O número é primo.");
    } else {
        document.write("O número não é primo.");
    }
}