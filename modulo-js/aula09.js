const aluno1 = "Dongle"
const aluno2 = "William"
const aluno3 = "Nathan"
const aluno4 = "Xande"
const aluno5 = "Diogo"

// Array/Lista de alunos
const alunos = [
    "Dongle",  // 0
    "William", // 1
    "Nathan",  // 2
    "Xande",   // 3
    "Diogo"    // 4
]

console.log(alunos.length)

// Acessando a posição 1
console.log(alunos[1])
console.log(alunos[alunos.length - 1])

// Alteração/Atribuição de um valor na posição X
alunos[0] = "Diego"
console.log(alunos[0])


//////////////////////////////////////////////////////////////


const livros = ["Harry Potter", "Percy Jackson", "Game of Thrones"]

console.log(livros)

// Adiciono um novo elemento AO FINAL do Array
livros.push("Senhor dos Anéis")
console.log(livros)

// Remove o ÚLTIMO elemento do Array
livros.pop();
console.log(livros)

// Adiciono um novo elemento AO INÍCIO do Array
livros.unshift("Homem de Ferro")
console.log(livros)

// Remove o PRIMEIRO elemento do Array
livros.shift();
console.log(livros)


//////////////////////////////////////////////////////////////



const alunos = [
    "Dongle",  // 0
    "William", // 1
    "Nathan",  // 2
    "Xande",   // 3
    "Diogo"    // 4
]

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}


const idades = [15, 18, 22, 16, 30];

let quantidade = 0;

for (let i = 0; i < idades.length; i++) {
    const idade = idades[i];

    if (idade >= 18) {
        quantidade++;
    }
}

console.log("Maiores de idade:", quantidade);


/////////////////////////////////////////////////////////////////

// for...of
for (const nota of notas) {

    somaNotas += nota;

    if (nota >= 7) {
        notasMaioresOuIguaisSete++;
    }

    if (nota >= maiorNota) {
        maiorNota = nota;
    }

    if (nota <= menorNota) {
        menorNota = nota;
    }

    console.log("Nota:", nota);
}
