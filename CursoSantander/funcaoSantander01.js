function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {

    if (nomesDosPresentes.indexOf(nomeDoAluno) != -1) {
        return true
    }
    else{
        return false
    }
}

    console.log(estavaPresenteNaAula("Caio", ["Matheus", "Leticia", "Caio"]))


    