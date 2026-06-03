let numeros = [];
let soma = 0; 

for (let i = 0; i < 8; i++) {
    numeros[i] = parseFloat(prompt("Digite o " + (i + 1) + "° o numero real:"));
    soma = soma + numeros[i];
}

let media = soma / 8;
alert("Média dos valores: " + media);
alert("Valores acima da média:");

for (let i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        alert(numeros[i]);
    }
}