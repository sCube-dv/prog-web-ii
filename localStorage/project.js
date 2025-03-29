const nameForm = document.querySelector('#name-form')
const welcomeContainer = document.querySelector('#welcome')
const logoutBtn = document.querySelector('#logout')

function checkUser() {
    const userName = localStorage.getItem('name')

    /* verify if has a name saved in localStorage */
    if (userName) {
        /* change display from form to none */
        nameForm.style.display = 'none'

        /* containe welcome display block */
        welcomeContainer.style.display = 'block'

        const userNameElement = document.querySelector('#username')

        userNameElement.textContent = userName

    } else {
        nameForm.style.display = 'block'
        welcomeContainer.style.display = 'none'
    }
}

nameForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const nameInput = document.querySelector('#name')

    /* store name in localStorage */
    localStorage.setItem('name', nameInput.value)
    nameInput.value = ''

    checkUser()
})

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('name')
    checkUser()
})

/* application start */
checkUser()