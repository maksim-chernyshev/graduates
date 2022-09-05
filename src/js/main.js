const missionSwiper = document.querySelector('.mission__cards')
const reviewsSwiper = document.querySelector('.reviews__inner')

document.addEventListener('DOMContentLoaded', function () {
    const swiperMission = new Swiper(missionSwiper, {
        loop: true,
        slidesPerView: 'auto',
        autoplay: true,
        speed: 500,

        breakpoints: {
            320: {
                loop: false,
                enabled: false,
            },
            768: {
                spaceBetween: 24,
            },
            1024: {
                spaceBetween: 32
            }
        }
    })

    const swiperReviews = new Swiper(reviewsSwiper, {
        loop: true,
        slidesPerView: 'auto',
        autoplay: true,
        speed: 500,
        navigation: {
            nextEl: '.reviews__btn--next',
            prevEl: '.reviews__btn--prev',
        },

        breakpoints: {
            320: {
                spaceBetween: 20,
            },
            768: {
                autoplay: false,
                spaceBetween: 16,
            },
            1024: {
                autoplay: false,
                spaceBetween: 32,
            }
        }
    })
})

