function buscarDivisivelPor(array, num) {
    
    console.log(array.lenght)
    for (var i = 0; i < array.lenght; i++) {
        if (array[i] % num == 0 && array[i] != 0) {
            return array[i]      
        }

        else if (array[i] % num == 1 || array[i] == 0) {
            return "Nenhum número válido encontrado!"
        }

    }
}

console.log(buscarDivisivelPor([0, 9, 4, 7, 128, 42, -1, 301, -5], 2))
