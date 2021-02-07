/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false..*/

const divisivel = (numero) => {
    if (numero % 3 == 0) {
        return console.log('\n' + numero + ' = True!')
    } else {
        return console.log('\n' + numero + ' = False!')
    }
}

divisivel(9)

divisivel(10)

divisivel(3)

divisivel(5000)