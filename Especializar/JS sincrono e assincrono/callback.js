// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado) {
    console.log("Outras tarefas")
    console.log(dado())
}

/*
imprimirDado(1)
imprimirDado('texto')
imprimirDado(true)
imprimirDado([1, 2, 3, 10])
imprimirDado({nome: "João", idade: 15})
*/

imprimirDado(function() {
    return "Tarefa callback"
})