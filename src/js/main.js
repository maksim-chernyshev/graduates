const missionSwiper = document.querySelector('.mission__cards')

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(missionSwiper, {
        grabCursor: true,
        slidesPerView: 3,
        freeMode: true,
        slidesPerGroup: 1,

        breakpoints: {
            320: {
                enabled: false,
                slidesPerView: 1
            },
            768: {
                enabled: true,
                spaceBetween: 24,
            },
            1024: {
                spaceBetween: 32
            }
        }
    })
})

