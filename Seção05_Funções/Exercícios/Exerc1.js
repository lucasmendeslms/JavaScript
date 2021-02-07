/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores...*/

const operacoes = function (n1, n2) {
    console.log('Soma: ' + (n1 + n2)
        + '\nSubtração: ' + (n1 - n2)
        + '\nDivisão: ' + (n1 / n2)
        + '\nMultiplicação: ' + (n1 * n2))
}

operacoes(5, 2)

//Arrow
console.log('_____________________\n')
 
const soma = (num1, num2) => {
    return console.log('Soma: ' + (num1 + num2)
        + '\nSubtração: ' + (num1 - num2)
        + '\nDivisão: ' + (num1 / num2)
        + '\nMultiplicação: ' + (num1 * num2))
}
soma(1, 2)