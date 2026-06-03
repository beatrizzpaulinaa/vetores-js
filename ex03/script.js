let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    nomes[i] = prompt("Digite o nome da " + (i + 1) + "° pessoa:");
    idades[i] = parseInt(prompt("Digite a idade de " + nomes[i] + ":"));
}

alert("Listagem de pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        alert("Nome: " + nomes[i] + " - Idade: " + idades[i]);
    }
}