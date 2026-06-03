# Desafios de Lógica em JavaScript 🚀

Este repositório contém a resolução de 4 exercícios práticos de lógica de programação utilizando **JavaScript**. 

O principal objetivo deste desafio foi desenvolver a lógica estrutural pura ("raiz"), utilizando estruturas de repetição tradicionais (`for`), condicionais (`if`) e variáveis de escopo local (`let`), **sem o uso de funções nativas de manipulação de arrays** (como `.push()`, `.reverse()`, `.filter()`, `.includes()`, etc.).

---

## 📋 Exercícios Desenvolvidos

### 1️⃣ Inversão de Nomes
* **Enunciado:** Leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
* **Lógica utilizada:** Preenchimento dinâmico de um vetor de tamanho 7 através de um laço `for` crescente. A exibição foi feita utilizando um segundo laço `for` decrescente, iniciando do índice `6` até o `0`.

### 2️⃣ Média de Números Reais
* **Enunciado:** Leia um vetor com 8 números reais e calcule a média dos valores armazenados. Após isso, exiba os valores do vetor que estão acima da média.
* **Lógica utilizada:** Um laço `for` acumula a soma dos valores inseridos via `prompt` e calcula a média aritmética. Um segundo laço varre o vetor comparando cada item individualmente com a média calculada, exibindo apenas os maiores.

### 3️⃣ Filtro de Menores de Idade (Vetores Paralelos)
* **Enunciado:** Leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade (nome e idade).
* **Lógica utilizada:** Aplicação do conceito de vetores paralelos, onde o índice `i` do vetor de nomes corresponde exatamente ao mesmo índice `i` do vetor de idades. O programa filtra os dados baseado na condição `idades[i] < 18`.

### 4️⃣ Interseção de Vetores sem Repetição
* **Enunciado:** Leia dois vetores de 5 elementos cada (valores inteiros). Crie um terceiro vetor que contenha apenas os elementos que estão em ambos os vetores (interseção, sem repetição).
* **Lógica utilizada:** Foram utilizados laços aninhados (`for` dentro de `for`). O primeiro compara os elementos comuns entre o `vetor1` e `vetor2`. Caso encontre, um terceiro laço faz uma varredura interna no vetor de `resultado` para garantir que o número já não foi adicionado, impedindo a duplicidade de dados sem usar o objeto `Set` ou métodos como `.includes()`.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)** - Interação com o usuário via `prompt()` e `alert()`.
* **Git & GitHub** - Controle de versão e hospedagem do código.

---

## 🚀 Como Executar o Projeto

Como os códigos utilizam comandos de tela nativos do navegador (`prompt` e `alert`), você pode executá-los de duas formas:

1.  **Pelo Navegador (Console):**
    * Abra o seu navegador (Chrome, Edge, Firefox).
    * Pressione `F12` e vá até a aba **Console**.
    * Cole o código do exercício desejado e pressione `Enter`.

2.  **Vinculado a um arquivo HTML:**
    * Crie um arquivo `index.html` básico e vincule o arquivo `.js` utilizando a tag `<script src="nome_do_arquivo.js"></script>`.
    * Abra o arquivo HTML no seu navegador.

---

## 📦 Histórico de Comandos Git Utilizados

Durante o desenvolvimento, os seguintes comandos foram utilizados para versionar e subir os arquivos para o repositório remoto:

# Inicializar o repositório local
git status

# Adicionar os arquivos criados/modificados para a área de preparação
git add .

# Gravar as alterações com uma mensagem descritiva
git commit -m "Vetores js"

git push -u origin main

