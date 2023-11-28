const form = document.querySelector('#card-form')
const genres = document.querySelector('#genres')
const image = document.querySelector('#image')
const link = document.querySelector('#link')
const rating = document.querySelector('#rating')
const synopsis = document.querySelector('#synopsis')
const title = document.querySelector('#title')
const price = document.querySelector('#price')

const errorsMessage = document.querySelectorAll('.field-feedback')

const errorGenres = document.querySelector('.error-genres')
const errorImage = document.querySelector('.error-image')
const errorLink = document.querySelector('.error-link')
const errorRating = document.querySelector('.error-rating')
const errorSynopsis = document.querySelector('.error-synopsis')
const errorTitle = document.querySelector('.error-title')
const errorPrice = document.querySelector('.error-price')

function resetErrors() {
   errorsMessage.forEach(errorMessage => {
      errorMessage.style.display = 'none'
   })
}

form.addEventListener('submit', function (e) {
   let errors = false

   resetErrors()

   if (genres.value === '') {
      errorGenres.innerText = 'Please enter genres'
      errorGenres.style.display = 'block'
      errors = true
   } else if (genres.value.length < 4) {
      errorGenres.innerText = 'Genres are too short'
      errorGenres.style.display = 'block'
      errors = true
   } else if (genres.value.length > 255) {
      errorGenres.innerText = 'Genres are too long'
      errorGenres.style.display = 'block'
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

   if (link.value.length > 255) {
      errorLink.innerText = 'Link is too long'
      errorLink.style.display = 'block'
      errors = true
   }

   function isNumeric(valor) {
      return /^\d+$/.test(valor)
   }

   if (rating.value === '') {
      errorRating.innerText = 'Please enter a rating'
      errorRating.style.display = 'block'
      errors = true
   } else if (!isNumeric(rating.value)) {
      errorRating.innerText = 'Rating must be a numeric value'
      errorRating.style.display = 'block'
      errors = true
   } else if (rating.value < 1 || rating.value > 100) {
      errorRating.innerText = 'Rating value must be a number between 1 and 100'
      errorRating.style.display = 'block'
      errors = true
   } else if (rating.value.length < 1 || rating.value.length > 3) {
      errorRating.innerText = 'Rating value must be a number between 1 and 100'
      errorRating.style.display = 'block'
      errors = true
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

   if (price.value === '') {
      errorPrice.innerText = 'Please enter a price'
      errorPrice.style.display = 'block'
      errors = true
   } else if (price.value.length < 3) {
      errorPrice.innerText = 'Price is too short'
      errorPrice.style.display = 'block'
      errors = true
   }

   if (errors) {
      e.preventDefault()
   }
})
