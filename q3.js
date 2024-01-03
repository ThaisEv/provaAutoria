/**Escreva uma função chamada verificarNumero que retorne uma Promise. 
 * A função deve
gerar um número aleatório entre 1 e 10.
 * => numeroGerado = sort(1, 10);
Se o número gerado for maior que 5, a Promise
 * if(numero > 5) {
    return "Número alto!";
 } else if ()
deve ser resolvida com a mensagem "Número alto!". Se for 5 ou menor, a Promise deve
ser rejeitada com a mensagem "Número baixo!".
 */

const numeroSorteado = 1;

const verificarNumero = (numero, message) => {
    new Promise( verificar => {
        if(numero > 5){
            message = "Número alto";
        } else if(numero) {
            message = "Número baixo";
        }
    })
    return message;
}

const res = verificarNumero(numeroSorteado, null);
console.log(res);
