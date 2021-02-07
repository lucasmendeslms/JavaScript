/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo)...
*/

const triangulo = (L1, L2, L3) => {
    if (L1 == L2 && L1 == L3) {
        return console.log('Triângulo Equilátero!')
    }
    else if (L1 != L2 && L1 != L3 && L2 != L3) {
        return console.log('Triângulo Escaleno!')
    }
    else {
        return console.log('Triângulo Isósceles!')
    }
}

triangulo(1, 2, 3)

triangulo(1, 1, 3)

triangulo(1, 1, 1)

triangulo(1, 3, 3)