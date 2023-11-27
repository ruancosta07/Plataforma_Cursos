window.addEventListener('DOMContentLoaded', ()=>{
    
const swiperTecnologias = new Swiper('.swiper1', {
    speed: 1000,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 10,
        },
        200: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 50,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false
            }
        }
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    allowTouchMove: false
}
)

const swiperMaisPopulares = new Swiper('.swiper2', {
    speed: 400,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        100: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 25
        }
    },

    navigation: {
        nextEl: '.avanca-slide',
        prevEl: '.volta-slide'
    }
}
)

const swiperFrontEnd = new Swiper('.swiper3', {
    speed: 400,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        100: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 25
        }
    },

    navigation: {
        nextEl: '.avanca-slide',
        prevEl: '.volta-slide'
    }
}
)
const swiperBackEnd = new Swiper('.swiper4', {
    speed: 400,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        100: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 25
        }
    },

    navigation: {
        nextEl: '.avanca-slide',
        prevEl: '.volta-slide'
    }
}
)
})