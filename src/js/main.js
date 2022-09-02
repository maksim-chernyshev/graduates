const missionSwiper = document.querySelector('.mission__cards')

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(missionSwiper, {
        grabCursor: true,

        freeMode: true,
        slidesPerGroup: 1,

        breakpoints: {
            320: {
                enabled: false,
                slidesPerView: 1
            },
            768: {
                enabled: true,
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {
                spaceBetween: 32
            }
        }
    })
})

