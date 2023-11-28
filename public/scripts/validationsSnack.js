const form = document.querySelector('#snacks-form')
const image = document.querySelector('#image')
const price = document.querySelector('#price')
const description = document.querySelector('#description')

const errorsMessage = document.querySelectorAll('.field-feedback')

const errorImage = document.querySelector('.error-image')
const errorPrice = document.querySelector('.error-price')
const errorDescription = document.querySelector('.error-description')

function resetErrors() {
   errorsMessage.forEach(errorMessage => {
      errorMessage.style.display = 'none'
   })
}

form.addEventListener('submit', function (e) {
   let errors = false

   resetErrors()

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

   if (price.value === '') {
      errorPrice.innerText = 'Please enter a price'
      errorPrice.style.display = 'block'
      errors = true
   } else if (price.value.length < 3) {
      errorPrice.innerText = 'Price is too short'
      errorPrice.style.display = 'block'
      errors = true
   }

   if (description.value === '') {
      errorDescription.innerText = 'Please enter a description'
      errorDescription.style.display = 'block'
      errors = true
   } else if (description.value.length < 4) {
      errorDescription.innerText = 'Description is too short'
      errorDescription.style.display = 'block'
      errors = true
   } else if (description.value.length > 255) {
      errorDescription.innerText = 'Description is too long'
      errorDescription.style.display = 'block'
      errors = true
   }

   if (errors) {
      e.preventDefault()
   }
})
