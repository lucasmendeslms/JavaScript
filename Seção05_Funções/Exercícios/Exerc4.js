/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const divide = (dividendo, divisor) => {
    return console.log('\nResultado da divisão: ' + (dividendo / divisor).toFixed(0) + '\nResto da Divisão: ' + dividendo % divisor)
}

divide(10, 2)

divide(10, 3)

divide(21, 5)

divide (37, 5)
