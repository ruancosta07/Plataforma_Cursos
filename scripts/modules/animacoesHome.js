export default function initAnimacoesHome() {
    const botaoAtivaCursos = document.querySelector('#ativa-cursos')
    const setaAtivaCursos = document.querySelector('#ativa-cursos i')
    const listaCursos = document.querySelector('#cursos-accordion')
    const botaoAtivaCursos2 = document.querySelector('#ativa-cursos2')
    const setaAtivaCursos2 = document.querySelector('#ativa-cursos2 i')
    const listaCursos2 = document.querySelector('#cursos-accordion2')
    botaoAtivaCursos.addEventListener('click', (event) => {
        event.preventDefault()
        if (!setaAtivaCursos.classList.contains('rotate-180') && !listaCursos.classList.contains('anima-cursos')) {
            setaAtivaCursos.classList.add('rotate-180')
            listaCursos.style.display = 'flex'
            setTimeout(() => {
                listaCursos.classList.add('anima-cursos')
            }, 100)
        }
    })

    botaoAtivaCursos.addEventListener('click', () => {
        if (setaAtivaCursos.classList.contains('rotate-180') && listaCursos.classList.contains('anima-cursos')) {
            setaAtivaCursos.classList.remove('rotate-180')
            listaCursos.classList.remove('anima-cursos')
            setTimeout(() => {
                listaCursos.style.display = 'none'
            }, 200)
        }
    })
    if (botaoAtivaCursos2) {


        botaoAtivaCursos2.addEventListener('click', (event) => {
            event.preventDefault()
            if (!setaAtivaCursos2.classList.contains('rotate-180') && !listaCursos2.classList.contains('anima-cursos')) {
                setaAtivaCursos2.classList.add('rotate-180')
                listaCursos2.style.display = 'flex'
                setTimeout(() => {
                    listaCursos2.classList.add('anima-cursos')
                }, 100)
            }
        })

        botaoAtivaCursos2.addEventListener('click', () => {
            if (setaAtivaCursos2.classList.contains('rotate-180') && listaCursos2.classList.contains('anima-cursos')) {
                setaAtivaCursos2.classList.remove('rotate-180')
                listaCursos2.classList.remove('anima-cursos')
                setTimeout(() => {
                    listaCursos2.style.display = 'none'
                }, 200)
            }
        })
    }

    let menuMobile = document.getElementById('menu-mobile')
    let navMobile = document.getElementById('nav-mobile')
    menuMobile.addEventListener('change', () => {
        if (menuMobile.checked) {
            navMobile.classList.replace('-top-28', 'top-[70px]')
            navMobile.classList.replace('z-0', 'z-[2]')
        }
        else {
            navMobile.classList.replace('top-[70px]', '-top-28')
            navMobile.classList.replace('z-[2]', 'z-0')
        }
    })

    //constructor function que cria objetos dos slides para serem animados
    function animaElementos(elemento) {
        //propriedade que faz referência ao objeto criado a partir dessa função
        this.elemento = document.querySelectorAll(elemento)
        //função que anima os itens do início da página logo ao recarregar ou entrar na mesma
        this.animaInicio = () => {
            this.elemento.forEach((item, index) => {
                if (item.hasAttribute('data-main')) {
                    setTimeout(() => {
                        item.classList.add('anima-elemento')
                    }, 250 * index)
                }
            })
        }
        //função que anima os elementos ao dar scroll na página
        this.animaScroll = () => {
            this.elemento.forEach((item, index) => {
                let distanciaTopo = window.scrollY + (window.innerHeight * .75)
                let slideTop = item.getBoundingClientRect().top
                //verificações para ativar a animação dos slides aparecendo, sem elas todos os slides seriam animados ao mesmo tempo
                if (item.hasAttribute('data-populares') && slideTop <= 850) {
                    if (distanciaTopo > item.offsetTop) {
                        setTimeout(() => {
                            item.classList.add('anima-elemento')
                        }, 250 * index)
                    }
                }
                else if (item.hasAttribute('data-front-end') && slideTop <= 850) {
                    if (distanciaTopo > item.offsetTop) {
                        setTimeout(() => {
                            item.classList.add('anima-elemento')
                        }, 250 * index)
                    }
                }
                else if (item.hasAttribute('data-back-end') && slideTop <= 850) {
                    if (distanciaTopo > item.offsetTop) {
                        setTimeout(() => {
                            item.classList.add('anima-elemento')
                        }, 250 * index)
                    }
                }
            })
        }
    }

    // declaração dos objetos e chamada das funções com a função construtora
    const inicio = new animaElementos('[data-main]')
    const maisPopulares = new animaElementos('[data-populares]')
    const frontEnd = new animaElementos('[data-front-end]')
    const backEnd = new animaElementos('[data-back-end]')
    if (inicio && maisPopulares && frontEnd && backEnd) {
        inicio.animaInicio()
        window.addEventListener('scroll', maisPopulares.animaScroll)
        window.addEventListener('scroll', frontEnd.animaScroll)
        window.addEventListener('scroll', backEnd.animaScroll)
    }

    //criação de variáveis que fazem referência aos containers dos cursos
    let maisPopularesContainer = document.getElementById('mais-populares')
    let frontEndContainer = document.getElementById('front-end')
    let backEndContainer = document.getElementById('back-end')

    // verificações para ver se os containers estão visíveis para os usuários, se estiver e o usuário recarregar a página, os slides serão ativados automaticamente, sem necessidade de dar scroll para ativar
    if (maisPopularesContainer) {
        if (maisPopularesContainer.getBoundingClientRect().top <= 650) {
            maisPopulares.animaScroll()
        }
    }
    if (frontEndContainer) {
        if (frontEndContainer.getBoundingClientRect().top <= 650) {
            frontEnd.animaScroll()
        }
    }

    if (backEndContainer) {
        if (backEndContainer.getBoundingClientRect().top <= 650) {
            backEnd.animaScroll()
        }
    }
}