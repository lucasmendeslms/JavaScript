const Area = (width, height) => 'Valor da Área: ' + width * height

const Perimeter = (width, height) => 'Valor do Perímetro: ' + 2 * (width + height)

const Diagonal = (width, height) => 'Valor da Diagonal: ' + Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))


console.log(Area(3, 4))
console.log(Perimeter(3, 4))
console.log(Diagonal(3, 4))
