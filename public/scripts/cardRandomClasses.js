const classes = ['wide', 'tall', 'big']

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomClasses() {
   const numeroAleatorio = getRandomInt(0, 2)
   return classes[numeroAleatorio]
}

module.exports = getRandomClasses
