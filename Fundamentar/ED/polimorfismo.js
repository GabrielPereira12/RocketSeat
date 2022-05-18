class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = "Infantil"
        }
        else if (this.peso <= 65) {
            this.categoria = "Juvenil"
        }
        else {
            this.categoria = "Adulto"
        }
        return this.categoria
    }
}

const mario = new Atleta(70)
console.log(mario.definirCategoria())


// A classe lutador está herdando as características da classe Atleta
class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = "Pluma"
        }
        else if (this.peso <= 65) {
            this.categoria = "Leve"
        }
        else if (this.peso <= 73) {
            this.categoria = "Meio-leve"
        }
        else {
            this.categoria = "Pesado"
        }
        return this.categoria
    }
}

const rui = new Lutador(40)
console.log(rui.definirCategoria())