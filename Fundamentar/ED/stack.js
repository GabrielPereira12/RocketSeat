//USANDO UM ARRAY DE TIPO STACK(PILHA)

class Stack {
    constructor() {
        // Criando o array e o topo do array
        this.data = []
        this.top = -1
    }
    
    // Função push que irá adicionar um novo valor(value) ao array
    push(value) {
        // Primeiro define-se o topo do array, no momento o topo é -1 então adicionamos +1 para ir a posição 0 do array
        this.top++

        // Aqui estamos definindo um valor para o topo do array
        this.data[this.top] = value

        // E então retornamos o array com o valor adicionado
        return this.data
    }

    // Funão pop que irá retirar/apagar o valor no topo do array
    pop() {
        // Definimos uma condião que se caso o topo for menor que zero é porquê está vazio, então o pop não faz nada e retorna um valor indefinido
        if (this.top < 0) return undefined
    
        // Criamos uma váriavel constante com o valor do topo do array
        const poppedTop = this.data[this.top]

        // Deletamos o valor do topo do array
        delete this.data[this.top]

        // Diminuimos o valor do topo do array em -1 para que possa fazer sentido, visto que o antigo topo não é mais o topo e sim o valor a baixo dele
        this.top--

        // E por fim retornamos o array (?)
        return poppedTop
    }

    // peek é responsável por exibir o valor no topo do stack(array)
    peek() {

        // Aqui está funcionando como um "if", o programa diz que, caso o valor topo for maior ou igual a 0 será retornado o valor do topo, caso seja menor que zero o valor retornado será indefinido(undefined)
        return this.top >= 0 ? this.data[this.top] : undefined
    }  
}

const stack = new Stack()

// Adicionando dados ao Array
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

// Ver o dado do topo
console.log(stack.peek())

// Remover o dado do topo
stack.pop()
console.log(stack.pop())

// Ver o dado do topo novamente
console.log(stack.peek())