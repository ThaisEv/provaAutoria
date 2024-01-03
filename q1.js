/*Utilizando destructuring, escreva uma função chamada formatarContato que aceite um 
objeto contato com propriedades como nome, email e telefone. A função deve extrair 
essas informações usando destructuring e retornar uma string formatada com essas 
informações. Por exemplo, se o objeto for {nome: "Ana Silva", email: 
"ana.silva@example.com", telefone: "123456789"}, a função deve retornar a string: 
"Nome: Ana Silva, Email: ana.silva@example.com, Telefone: 123456789". */

function formatarContato(contato) {
    const nomeVal = contato.nome;
    const emailVal = contato.email;
    const telefoneVal = contato.telefone;
    
    return `Nome: ${nomeVal}, Email: ${emailVal}, Telefone: ${telefoneVal}`;
}

const exemplo = {
    nome: "Ana Silva", 
    email: "ana.silva@example.com", 
    telefone: "123456789"
}

formatarContato(exemplo);