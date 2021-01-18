const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
console.log("----------------")


imprimirResultado(3, 4, soma)
console.log("----------------")


imprimirResultado(3, 4, function (x, y){
    return x - y
})
console.log("----------------")

imprimirResultado(3, 4, (x, y) => x * y)

console.log("----------------")

// Outro exemplo de função anônima
const pessoa = {
    falar: function (){
        console.log('Opa!')
    }
}

pessoa.falar()


