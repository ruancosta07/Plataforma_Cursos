export default function animaLogin() {
    let elementos = document.querySelectorAll('[data-elemento]')
    elementos.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('anima-elemento')
        }, 500 * index)
    })
}

