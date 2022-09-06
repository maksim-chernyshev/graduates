document.addEventListener('DOMContentLoaded', function () {
    const DEFAULT_REF = 'ef45402a410905ec'

    const missionSwiper = document.querySelector('.mission__cards')
    const reviewsSwiper = document.querySelector('.reviews__inner')

    const headerSection = document.querySelector('[data-section="header"]')
    const navigationModal = document.querySelector('[data-section="modalNav"]')
    const openNavigationModalButton = document.querySelector('[data-btn="openNavigation"]')
    const closeNavigationModalButton = document.querySelector('[data-btn="closeNavigation"]')
    const logoLinks = document.querySelectorAll('[data-js="logoLink"]')
    const forms = document.querySelectorAll('form')

    const headerLinks = headerSection.querySelectorAll('[data-anchor]')
    const modalLinks = navigationModal.querySelectorAll('[data-anchor]')

    const urlParams = new URLSearchParams(window.location.search)

    /* добавляем в ссылку-логотип текущий url со всеми гет-параметрами*/
    logoLinks?.forEach(function(link) {
        link.setAttribute('href', `${window.location.toString()}`)
    })

    /* плавный скролл к блокам на странице (декстоп) */
    headerLinks?.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const scrollTarget = document.querySelector(`#${link.dataset.anchor}`)
            scrollTo(scrollTarget, 'center')
        })
    })

    openNavigationModalButton?.addEventListener('click', showModal)

    closeNavigationModalButton?.addEventListener('click', hideModal)


    modalLinks?.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const scrollTarget = document.querySelector(`#${link.dataset.anchor}`)
            hideModal();

            if (scrollTarget.id === 'hero') {
                document.querySelector('.hero-form__input').focus();
            }

            scrollTo(scrollTarget, 'start')
        })
    })

    forms?.forEach(function(form) {
        const formAction = form.getAttribute('action')
        const inputs = form.querySelectorAll('input')

        /* подстановка корректных гет-параметров в экшн формы */
        if (urlParams.has('ref')) {
            form.setAttribute('action', `${formAction}?${urlParams.toString()}`)
        } else if (urlParams.toString()) {
            form.setAttribute('action', `${formAction}?ref=${DEFAULT_REF}&${urlParams.toString()}`)
        } else {
            form.setAttribute('action', `${formAction}?ref=${DEFAULT_REF}`)
        }

        /* проверка инпутов на заполнение и вывод красной рамки */
        inputs.forEach(function(input) {
            input.addEventListener('input', function() {
                input.checkValidity()
            })

            input.addEventListener('invalid', function() {
                if (input.value === '') {
                    input.classList.add('error')

                    setTimeout(function() {
                        input.classList.remove('error')
                    }, 5000)
                }
            })
        })
    })

    const swiperMission = new Swiper(missionSwiper, {
        loop: true,
        slidesPerView: 'auto',
        autoplay: true,
        speed: 1000,

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
        speed: 1000,
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

    function scrollTo(targetElement, position) {
        targetElement.scrollIntoView( {
            block: position,
            behavior: 'smooth'
        })
    }

    function showModal() {
        document.body.classList.add('lock-scroll')
        navigationModal.classList.remove('hidden');
    }

    function hideModal() {
        document.body.classList.remove('lock-scroll')
        navigationModal.classList.add('hidden');
    }
})

