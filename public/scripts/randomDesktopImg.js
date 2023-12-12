const img = [
   'deadpool.png',
   'halloween.png',
   'ice-age-2.png',
   'ice-age.png',
   'interestellar.png',
   'it.png',
   'madagascar.png',
   'spartacus.png',
   'ted-2.png',
   'zootopia.png',
]

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomImg() {
   const numeroAleatorio = getRandomInt(0, 9)
   return img[numeroAleatorio]
}

module.exports = getRandomImg
