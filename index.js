import characters from './characters.js'

const passwordBtn = document.querySelector('#password-btn')
const passwordOneEl = document.querySelector('#password-one')
const passwordTwoEl = document.querySelector('#password-two')

passwordBtn.addEventListener('click', () => {
  let passwordOne = ''
  let passwordTwo = ''

  for (let i = 0; i < 15; i++) {
    passwordOne += characters[Math.floor(Math.random() * characters.length)]
    passwordTwo += characters[Math.floor(Math.random() * characters.length)]
  }
  passwordOneEl.textContent = passwordOne
  passwordTwoEl.textContent = passwordTwo
})
