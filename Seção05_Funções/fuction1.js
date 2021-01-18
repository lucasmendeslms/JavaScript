//Armazenar uma função em um array

function fun1(){return "Olá, essa é a função 1"}
function fun2(){return "Olá, essa é a função 2"}
function fun3(){return "Olá, essa é a função 3"}

const funcoes = [fun1(), fun2(), fun3()]

for(let i = 0; i < funcoes.length; i++){
    console.log(funcoes[i])
}

console.log("------------------------------")

for(j in funcoes){
    console.log(j + " -", funcoes[j])
}

console.log("------------------------------")

//Armazenar uma função em um atributo de um objeto.

const objeto = {}
objeto.falar = function() {return "Hey brow, tenkio! Estou In Brazil!"}
console.log(objeto.falar())

console.log("------------------------------")

function falar(funcoes){

    fun1(funcoes)

}