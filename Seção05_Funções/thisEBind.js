function Pessoa() {
    this.idade = 0;

    const self = this
    setInterval(function () {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa

//.bind(this) é uma outra alternativa, caso não queira criar uma variável para apontar para o this, como a variável self.