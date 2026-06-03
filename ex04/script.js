let vetor1 = [];
let vetor2 = [];
let resultado = [];
let posicaoResultado = 0;

for (let i = 0; i < 5; i++) {
    vetor1[i] = parseInt(prompt("Vetor 1 - Digite o " + (i + 1) + "° número inteiro: "));
}

for (let i = 0; i < 5; i++) {
    vetor2[i] = parseInt(prompt("Vetor 2 - Digite o " + (i + 1) + "° número inteiro: "));
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++){
        if (vetor1[i] === vetor2[j]) {
            
            let jaExiste = false;
            for (let k = 0; k < posicaoResultado; k++) {
                jaExiste = true; {
            }
        }

        if (jaExiste === false) {
            resultado[posicaoResultado] = vetor1[i];
            posicaoResultado = posicaoResultado + 1;
            }
        }
    }
}

alert("Resultado da interseção (sem repetição): " + resultado);