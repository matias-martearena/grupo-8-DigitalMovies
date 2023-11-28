const form = document.querySelector('#ticketForm')
const price = document.querySelector('#price')
const room = document.querySelector('#room')
const genre = document.querySelector('#genre')
const image = document.querySelector('#image')
const synopsis = document.querySelector('#synopsis')
const title = document.querySelector('#title')

const errorsMessage = document.querySelectorAll('.field-feedback')

const errorPrice = document.querySelector('.error-price')
const errorRoom = document.querySelector('.error-room')
const errorGenre = document.querySelector('.error-genre')
const errorImage = document.querySelector('.error-image')
const errorSynopsis = document.querySelector('.error-synopsis')
const errorTitle = document.querySelector('.error-title')

function resetErrors() {
   errorsMessage.forEach(errorMessage => {
      errorMessage.style.display = 'none'
   })
}

form.addEventListener('submit', function (e) {
   let errors = false

   resetErrors()

   if (price.value === '') {
      errorPrice.innerText = 'Please enter a price'
      errorPrice.style.display = 'block'
      errors = true
   } else if (price.value.length < 3) {
      errorPrice.innerText = 'Price is too short'
      errorPrice.style.display = 'block'
      errors = true
   }

   function isNumeric(valor) {
      return /^\d+$/.test(valor)
   }

   if (room.value === '') {
      errorRoom.innerText = 'Please enter a room'
      errorRoom.style.display = 'block'
      errors = true
   } else if (!isNumeric(room.value)) {
      errorRoom.innerText = 'Room must be a numeric value'
      errorRoom.style.display = 'block'
      errors = true
   }

   if (genre.value === '') {
      errorGenre.innerText = 'Please enter a genre'
      errorGenre.style.display = 'block'
      errors = true
   } else if (genre.value.length < 4) {
      errorGenre.innerText = 'Genre is too short'
      errorGenre.style.display = 'block'
      errors = true
   } else if (genre.value.length > 255) {
      errorGenre.innerText = 'Genre is too long'
      errorGenre.style.display = 'block'
      errors = true
   }

   if (image.files.length > 0) {
      const fileName = image.files[0].name.toLowerCase()
      const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i

      if (!allowedExtensions.test(fileName)) {
         errorImage.innerText =
            'Please enter an image with format .jpg, .jpeg, or .png'
         errorImage.style.display = 'block'
         errors = true
      }
   }

   if (synopsis.value === '') {
      errorSynopsis.innerText = 'Please enter a synopsis'
      errorSynopsis.style.display = 'block'
      errors = true
   } else if (synopsis.value.length < 4) {
      errorSynopsis.innerText = 'Synopsis is too short'
      errorSynopsis.style.display = 'block'
      errors = true
   }

   if (title.value === '') {
      errorTitle.innerText = 'Please enter a title'
      errorTitle.style.display = 'block'
      errors = true
   } else if (title.value.length < 4) {
      errorTitle.innerText = 'Title is too short'
      errorTitle.style.display = 'block'
      errors = true
   } else if (title.value.length > 255) {
      errorTitle.innerText = 'Title is too long'
      errorTitle.style.display = 'block'
      errors = true
   }

   if (errors) {
      e.preventDefault()
   }
})
