function maiorQueNum(array, num) {

    var maior = []
    for (i in array) {
        if (array[i] > num) {
            maior.push(array[i])
        }
    }

    return maior
}