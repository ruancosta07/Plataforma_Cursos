export default function cursos() {
    let titulo = document.querySelectorAll('[data-elemento]')
    titulo.forEach((elemento, index) => {
        setTimeout(() => {
            elemento.classList.add('anima-elemento')
        }, 500 * index)
    })


    let proxima = document.querySelector('.proxima')
    let anterior = document.querySelector('.anterior')
    let titleAnterior = document.createElement('span')
    let titleProxima = document.createElement('span')
    if (proxima && anterior && titleAnterior && titleProxima) {
        anterior.classList.add('relative', 'z-[2]')
        proxima.classList.add('relative', 'z-[2]')

        titleAnterior.innerHTML = anterior.getAttribute('href').slice(0, -5).replace(/[-]+/g, ' ')
        titleAnterior.classList.add('text-gray-8', 'text-[.8rem]', 'absolute', 'left-8', 'top-12', 'hidden', 'transition', 'z-[1]', 'opacity-0')
        document.querySelector('main div.relative div.flex').appendChild(titleAnterior)
        titleProxima.innerHTML = proxima.getAttribute('href').slice(0, -5).replace(/[-]+/g, ' ')
        titleProxima.classList.add('text-gray-8', 'text-[.8rem]', 'absolute', 'right-8', 'top-12', 'hidden', 'transition', 'z-[1]', 'opacity-0')
        document.querySelector('main div.relative div.flex').appendChild(titleProxima)

        anterior.addEventListener('mouseenter', () => {
            titleAnterior.classList.remove('hidden')
            setTimeout(() => {
                titleAnterior.classList.remove('opacity-0')
                titleAnterior.classList.replace('left-8', 'left-0')
            }, 100)
        })
        anterior.addEventListener('mouseleave', () => {
            titleAnterior.classList.add('opacity-0')
            titleAnterior.classList.replace('left-0', 'left-8')
            setTimeout(() => {
                titleAnterior.classList.add('hidden')
            }, 100)
        })

        proxima.addEventListener('mouseenter', () => {
            titleProxima.classList.remove('hidden')
            setTimeout(() => {
                titleProxima.classList.remove('opacity-0')
                titleProxima.classList.replace('right-8', 'right-0')
            }, 100)
        })
        proxima.addEventListener('mouseleave', () => {
            titleProxima.classList.add('opacity-0')
            titleProxima.classList.replace('right-0', 'right-8')
            setTimeout(() => {
                titleProxima.classList.add('hidden')
            }, 100)
        })

        document.querySelector('head title').innerHTML = document.querySelector('h1').innerHTML
    }
}