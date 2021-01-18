let dobro = function (a){
    return 2 * a
}

// Função Arrow (funções de forma reduzida)

// 1ª forma
dobro = (a) => {
    return 2 * a
}

//2ª forma
dobro = a => 2 * a // return está implícito
console.log(dobro(Math.PI))


let ola = function(){
    return 'Olá'
}

// 1ª forma
ola = () => 'Olá'

//2ª forma
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())


const mover = () => console.log("Você se moveu!")

mover()
