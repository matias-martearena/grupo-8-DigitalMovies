const form = document.querySelector('#loginUserForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const errorsMessage = document.querySelectorAll('.field-feedback')
const errorEmail = document.querySelector('.error-email')
const errorPassword = document.querySelector('.error-password')

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

   if (email.value === '') {
      errorEmail.innerText = 'Please enter an email'
      errorEmail.style.display = 'block'
      errors = true
   } else if (!validateEmail(email.value)) {
      errorEmail.innerText = 'Please enter a valid email'
      errorEmail.style.display = 'block'
      errors = true
   }

   if (password.value === '') {
      errorPassword.innerText = 'Please enter a password'
      errorPassword.style.display = 'block'
      errors = true
   } else if (password.value.length < 8) {
      errorPassword.innerText = 'Password is too short'
      errorPassword.style.display = 'block'
      errors = true
   } else if (password.value.length > 70) {
      errorPassword.innerText = 'Password is too long'
      errorPassword.style.display = 'block'
      errors = true
   }

   if (errors) {
      e.preventDefault()
   }
})
