const questions = [
    "Qual é o seu nome?",
    "O que você fez hoje?",
    "O que você aprendeu hoje?",
    "O que te deixou triste?",
    "O que podes fazer para melhorar?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }else {
        process.exit()
    }
})

process.on('exit', ()=> {
    console.log(`
        Bacana ${answers[0]}!

        O que você fez hoje foi: 
        ${answers[1]}

        O que você aprendeu foi: 
        ${answers[2]}

        O que te deixou triste foi: 
        ${answers[3]}

        O que você pode fazer para melhorar é: 
        ${answers[4]}
    `)
})