const img = [
   'blackPhanter.png',
   'fnaf.jpg',
   'godzilla.png',
   'joker.png',
   'quickSilver.png',
]

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomImg() {
   const numeroAleatorio = getRandomInt(0, 4)
   return img[numeroAleatorio]
}

module.exports = getRandomImg
