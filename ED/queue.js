//USANDO UM ARRAY DE TIPO QUEUE(FILA)

class Queue {
    constructor() {
        // Criando o array
        this.data = []
    }

    // Adicionar um novo elemento(dado) ao final da fila(array)
    enqueue(item) {
        // push() adiciona um elemento ao final array
        this.data.push(item)
        console.log(`${item} entrou na fila`)
    }

    // Retirando o primeiro elemento(dado) da frente da fila(array)
    dequeue() {
        // shift() retira o primeiro elemento do array
        const item = this.data.shift()
        console.log(`${item} saiu da fila`)
    }
}

const fila = new Queue()

fila.enqueue("Máriozinho")
fila.enqueue("Rodriguinho")
fila.enqueue("Leonardozinho")

fila.dequeue()
fila.dequeue()
fila.dequeue()