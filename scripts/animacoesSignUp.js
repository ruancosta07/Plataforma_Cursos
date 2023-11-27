let elementos = document.querySelectorAll('[data-elemento]')
function animaLogin() {
    elementos.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('anima-elemento')
        }, 500 * index)
    })
}

animaLogin()