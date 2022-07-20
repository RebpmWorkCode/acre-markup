const lazyLoadInstance = new LazyLoad({});
const TwigGallery = {
    run: () => {
        document.querySelector('.description-swiper')?.swiper.on('slideChange', function () {
            lazyLoadInstance.update();
        });
        document.querySelector('.popular-block')?.swiper.on('slideChange', function () {
            lazyLoadInstance.update();
        });
        document.querySelectorAll('.search-swiper').forEach((swiperBlock) => {
            swiperBlock.swiper.on('slideChange', function () {
                lazyLoadInstance.update();
            });
            swiperBlock.querySelectorAll('.swiper-pagination-bullet').forEach((swiperPaginationBullet) => {
                swiperPaginationBullet.addEventListener('mouseover', (e) => {
                    swiperPaginationBullet.dispatchEvent(new MouseEvent('click', {bubbles: true}))
                })
            })
        })
    },
    runLightbox: (selector) => {
        let galleryList = [];
        document.querySelectorAll(selector)?.forEach((swiperSlidePicture) => {
            galleryList.push(swiperSlidePicture.dataset.full);
        })
        const lightbox = new FsLightbox();
        lightbox.props.sources = galleryList;

        document.querySelectorAll(selector).forEach((swiperSlidePicture, position) => {
            swiperSlidePicture.addEventListener('click', (e) => {
                e.preventDefault();
                lightbox.open(position);
            })
        })
    }
}
const TwigSorting = {
    run: () => {
        $('body').on('click', '.parent-offers-sorting-link', e => {
            e.preventDefault();
            fetch(e.currentTarget.href).then(res => res.text()).then(res => {
                const parser = new DOMParser();
                const content = parser.parseFromString(res, "text/html");
                content.documentElement.querySelectorAll(".tabs-object__content").forEach((tabContent, position) => {
                    document.querySelector(`#tabs-object .tabs-object__content:nth-child(${position + 2})`).innerHTML = tabContent.innerHTML;
                });
            })
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lazyLoadInstance.update();

    TwigSorting.run();

    TwigGallery.run();
    TwigGallery.runLightbox('.description-slide');
    TwigGallery.runLightbox('.description-rent-slide');

    document.querySelector('.description-info__more')?.addEventListener('click', (e) => {
        e.preventDefault();
        let tabButton = document.querySelector(`button${e.target.getAttribute('href')}`);
        tabButton.scrollIntoView();
        tabButton.dispatchEvent(new MouseEvent('click'));
    })

    document.querySelector('.description__button-form')?.addEventListener('click', (e) => {
        e.preventDefault();
        let container = document.querySelector(e.target.getAttribute('href'));
        container.scrollIntoView();
    })

    $('.phone-mask').mask('+7 (000) 000-00-00');

    let formFlash = document.querySelector('.form #flashMessage')
    if (formFlash) {
        formFlash.scrollIntoView();
    }
})
