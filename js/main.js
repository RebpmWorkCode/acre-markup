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

document.addEventListener('DOMContentLoaded', () => {
    lazyLoadInstance.update();

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
