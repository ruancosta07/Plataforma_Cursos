let elementosMain = document.querySelectorAll('[data-main]')

function mostraElementosInicio() {
    elementosMain.forEach((elemento, index) => {
        setTimeout(() => {
            elemento.classList.add('anima-elemento')
        }, 500 * index)
    })
}

mostraElementosInicio()

let slideTecnologias = document.querySelector('[data-slide-tecnologias]')

function mostraSlideTecnologias() {
    setTimeout(() => {
        slideTecnologias.classList.add('anima-elemento')
    }, 2000)
}

mostraSlideTecnologias()

let slidesMaisPopulares = document.querySelectorAll('[data-slide-populares]')
function mostraSlideMaisPopulares() {
    let distanciaTopo = window.scrollY + (window.innerHeight * 0.75)
    slidesMaisPopulares.forEach((slide, index) => {
        if (!slide.classList.contains('anima-slide') && distanciaTopo > slide.offsetTop) {
            setTimeout(() => {
                slide.classList.add('anima-slide')
            }, 500 * index)
        }
    })

}


let slidesFrontEnd = document.querySelectorAll('[data-front-end]')

function mostraSlidesFrontEnd() {
    let distanciaTopo = window.scrollY + (window.innerHeight * 0.65)
    slidesFrontEnd.forEach((slide, index) => {
        if (!slide.classList.contains('anima-slide') && distanciaTopo > slide.offsetTop) {
            setTimeout(() => {
                slide.classList.add('anima-slide')
            }, 500 * index)
        }
    })
}


window.addEventListener('scroll', () => {
    if (document.querySelector('#front-end').getBoundingClientRect().top <= 450) {
        window.addEventListener('scroll', mostraSlidesFrontEnd)
    }
})

let slidesBackEnd = document.querySelectorAll('[data-back-end]')

function mostraSlidesBackEnd() {
    let distanciaTopo = window.scrollY + (window.innerHeight * 0.8)

    slidesBackEnd.forEach((slide, index) => {
        let slideTop = slide.getBoundingClientRect().top
        if (distanciaTopo > slideTop) {
            setTimeout(() => {
                slide.classList.add('anima-slide')
            }, 500 * index)
        }
    })
}

let maisPopulares = document.querySelector('#mais-populares')
let frontEnd = document.querySelector('#front-end')
let backEnd = document.querySelector('#back-end')


if (maisPopulares.getBoundingClientRect().top <= 650) {
    mostraSlideMaisPopulares()
}
if (frontEnd.getBoundingClientRect().top <= 650) {
    mostraSlidesFrontEnd()
}
if (backEnd.getBoundingClientRect().top <= 650) {
    mostraSlidesBackEnd()
}

window.addEventListener('scroll', () => {
    if (maisPopulares.getBoundingClientRect().top <= 650 && frontEnd.getBoundingClientRect().top <= 1500) {
        window.addEventListener('scroll', mostraSlideMaisPopulares)
    }
})


window.addEventListener('scroll', () => {
    if (document.querySelector('#back-end').getBoundingClientRect().top <= 650) {
        window.addEventListener('scroll', mostraSlidesBackEnd)
    }
})

function animaTitulo(titulo) {
    let distanciaTopo = window.scrollY + (window.innerHeight * 0.8)
    if (distanciaTopo > titulo.offsetTop) {
        titulo.classList.add('anima-elemento')
    }
}

let maisPopularesTitulo = document.querySelector('[data-titulo-populares]')
let frontEndTitulo = document.querySelector('[data-front-titulo]')
let backEndTitulo = document.querySelector('[data-back-titulo]')

window.addEventListener('scroll', () => {
    animaTitulo(maisPopularesTitulo)
    animaTitulo(frontEndTitulo)
    animaTitulo(backEndTitulo)
})

document.querySelector('#ativa-cursos').addEventListener('mouseenter', () => {
    document.querySelector('#cursos-accordion').style.display = 'flex'
    setTimeout(() => {
        document.querySelector('#ativa-cursos i').classList.add('rotate-180')
        document.querySelector('#cursos-accordion').classList.add('anima-cursos')
    }, 100)
})
document.querySelector('#ativa-cursos').addEventListener('mouseleave', () => {
    document.querySelector('#cursos-accordion').classList.remove('anima-cursos')
    document.querySelector('#ativa-cursos i').classList.remove('rotate-180')
    setTimeout(() => {
        document.querySelector('#cursos-accordion').style.display = 'none'
    }, 200)
})