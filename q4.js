/**Você está desenvolvendo uma aplicação web para exibir informações sobre diferentes 
tipos de frutas.
 
No lado do cliente, você quer permitir que os usuários cliquem em um 
botão para solicitar informações sobre uma fruta específica. 
No lado do servidor, um 
aplicativo Node.js com Express deve atender a essas solicitações e enviar de volta os 
detalhes da fruta solicitada. */

const bdFrutas = [
    {
        nome: "Banana",
        informações: "Apresenta cor amarela, ..."
    },
    {
        nome: "Maçã",
        informações: "Apresenta cor vermelha, ..."
    }
]

function redenrizarInformacoes(frutas) {
    let info = ``;
    frutas.forEach((fruta) => {
        info += `<h5>Informações sobre ${fruta.nome}</h5>
                <p>${fruta.informacoes}</p>`
    
    });

    return info;
}

const componentePrincipal = document.querySelector("#conteudo_principal");
redenrizarInformacoes(bdFrutas);

let $ = document.querySelector.bind(document);
$("#teste").addEventListener("click", () => {
    redenrizarInformacoes(bdFrutas);
});



