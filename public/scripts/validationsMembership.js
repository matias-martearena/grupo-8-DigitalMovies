const form = document.querySelector('#membership-form')
const description = document.querySelector('#description')
const discount0 = document.querySelector('#discount0')
const discount1 = document.querySelector('#discount1')
const discount2 = document.querySelector('#discount2')
const price = document.querySelector('#price')
const tier = document.querySelector('#tier')

const errorsMessage = document.querySelectorAll('.field-feedback')

const errorDescription = document.querySelector('.error-description')
const errorDiscount0 = document.querySelector('.error-discount0')
const errorDiscount1 = document.querySelector('.error-discount1')
const errorDiscount2 = document.querySelector('.error-discount2')
const errorPrice = document.querySelector('.error-price')
const errorTier = document.querySelector('.error-tier')

function resetErrors() {
   errorsMessage.forEach(errorMessage => {
      errorMessage.style.display = 'none'
   })
}

form.addEventListener('submit', function (e) {
   let errors = false

   resetErrors()

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

   if (discount0.value === '') {
      errorDiscount0.innerText = 'Please enter a discount'
      errorDiscount0.style.display = 'block'
      errors = true
   } else if (discount0.value.length < 4) {
      errorDiscount0.innerText = 'Discount is too short'
      errorDiscount0.style.display = 'block'
      errors = true
   } else if (discount0.value.length > 255) {
      errorDiscount0.innerText = 'Discount is too long'
      errorDiscount0.style.display = 'block'
      errors = true
   }

   if (discount1.value === '') {
      errorDiscount1.innerText = 'Please enter a discount'
      errorDiscount1.style.display = 'block'
      errors = true
   } else if (discount1.value.length < 4) {
      errorDiscount1.innerText = 'Discount is too short'
      errorDiscount1.style.display = 'block'
      errors = true
   } else if (discount1.value.length > 255) {
      errorDiscount1.innerText = 'Discount is too long'
      errorDiscount1.style.display = 'block'
      errors = true
   }

   if (discount2.value === '') {
      errorDiscount2.innerText = 'Please enter a discount'
      errorDiscount2.style.display = 'block'
      errors = true
   } else if (discount2.value.length < 4) {
      errorDiscount2.innerText = 'Discount is too short'
      errorDiscount2.style.display = 'block'
      errors = true
   } else if (discount2.value.length > 255) {
      errorDiscount2.innerText = 'Discount is too long'
      errorDiscount2.style.display = 'block'
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

   function isNumeric(valor) {
      return /^\d+$/.test(valor)
   }

   if (tier.value === '') {
      errorTier.innerText = 'Please enter a tier'
      errorTier.style.display = 'block'
      errors = true
   } else if (!isNumeric(tier.value)) {
      errorTier.innerText = 'Tier must be a numeric value'
      errorTier.style.display = 'block'
      errors = true
   }

   if (errors) {
      e.preventDefault()
   }
})
