/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const juroSimples = (capInicial, taxaJuros, tempo) => {
    return console.log('Montante da aplicação sob juros simples: R$' + (capInicial * (taxaJuros / 100) * tempo).toFixed(2))
}

const juroComposto = (capInicial, taxaJuros, tempo) => {
    return console.log('Montante da aplicação sob juros compostos: R$' + (capInicial * Math.pow((1 + taxaJuros / 100), tempo)).toFixed(2))
}

juroSimples(1000, 10, 3)

juroComposto(1400, 7, 2)

juroComposto(800, 20, 2)
