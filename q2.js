/**Utilizando arrow function, escreva uma função chamada capitalizarTitulos que use o 
método map para transformar uma lista de títulos de livros (strings) em uma lista com 
cada palavra dos títulos capitalizada. Por exemplo, se a função receber o array ["o 
pequeno príncipe", "dom casmurro", "a metamorfose"], ela deve retornar ["O Pequeno 
Príncipe", "Dom Casmurro", "A Metamorfose"] */


const capitalizarTitulos = ((livros) => {
    livros.map(livro => {
        livro = livro.toUpperCase();
    })
    return livros;
});

const livros = ["o pequeno príncipe", "dom casmurro", "a metamorfose"];
//capitalizarTitulos(livros);

