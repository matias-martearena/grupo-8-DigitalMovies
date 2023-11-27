const form = document.querySelector('#registerUserForm')
const firstName = document.querySelector('#first_name')
const lastName = document.querySelector('#last_name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirm_password = document.querySelector('#confirm_password')
const image = document.querySelector('#user_image')

const errorsMessage = document.querySelectorAll('.field-feedback')

const errorFirstName = document.querySelector('.error-first-name')
const errorLastName = document.querySelector('.error-last-name')
const errorEmail = document.querySelector('.error-email')
const errorPassword = document.querySelector('.error-password')
const errorConfirmPassword = document.querySelector('.error-confirm-password')
const errorImage = document.querySelector('.error-image')

function resetErrors() {
   errorsMessage.forEach(errorMessage => {
      errorMessage.style.display = 'none'
   })
}

function validateEmail(email) {
   const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   return re.test(String(email).toLowerCase())
}

form.addEventListener('submit', function (e) {
   let errors = false

   resetErrors()

   if (firstName.value === '' || firstName.value.length < 2) {
      errorFirstName.innerText =
         'The name is required and must be at least two characters long'
      errorFirstName.style.display = 'block'
      errors = true
   }

   if (lastName.value === '' || lastName.value.length < 2) {
      errorLastName.innerText =
         'The last name is required and must be at least two characters long'
      errorLastName.style.display = 'block'
      errors = true
   }

   if (!validateEmail(email.value) || email.value === '') {
      errorEmail.innerText = 'Please enter a valid email'
      errorEmail.style.display = 'block'
      errors = true
   }

   if (password.value === '' || password.value.length < 8) {
      errorPassword.innerText =
         'The password is required and must be at least eight characters long'
      errorPassword.style.display = 'block'
      errors = true
   }

   if (
      confirm_password.value === '' ||
      confirm_password.value.length < 8 ||
      confirm_password.value !== password.value
   ) {
      errorConfirmPassword.innerText =
         'The password is required and must be at least eight characters long. Passwords must match'
      errorConfirmPassword.style.display = 'block'
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

   if (errors) {
      e.preventDefault()
   }
})
