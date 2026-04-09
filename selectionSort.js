const livros = require('./listaLivro');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length - 1; atual++) {
 let menor = menorValor(livros, atual)

let livrosAtual = livros[atual];
console.log('posição atual', atual)
console.log('livro atual', livros[atual])
let livrosMonorPreco = livros[menor];
console.log('livro menor preço', livros[menor])

livros[atual] = livrosMonorPreco
livros[menor] = livrosAtual
}

console.log(livros)

