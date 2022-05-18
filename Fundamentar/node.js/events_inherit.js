const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`));

const mayk = new Character('Mayk')
mayk.on('help', () => console.log(`O ${mayk.name} vai deixar isso pro ${chapolin.name}!`))

console.log("Oh! E agora, quem poderá me defender?!")
chapolin.emit('help')
mayk.emit('help')