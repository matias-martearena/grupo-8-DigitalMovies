const trailers = [
   'Barbie-trailer.mp4',
   'interstellar-trailer.mp4',
   'oppenheimer-trailer.mp4',
]

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomMovie() {
   const numeroAleatorio = getRandomInt(0, 2)
   return trailers[numeroAleatorio]
}

module.exports = getRandomMovie
