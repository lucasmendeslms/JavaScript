function filme(personagens, filmes, lancamentos, id) {

    if ((id >= 1) && (id < filme.length)) {
        return (`${personagens[id - 1]} é um personagem do filme ${filmes[id - 1]} que estrou no cinema em ${lancamentos[id - 1]}.`)
    }
    else {
        return ("Essa não é uma opção válida.")
    }
}

console.log(filme(["Hermione", "Trinity", "Leia"], ["Harry Potter", "Matrix", "Star wars"], [2001, 1999, 1977], 4))