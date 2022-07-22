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
const TwigFilter = {
    activeCategoryId: document.querySelector('.filter-field-categoryId').value,
    run: () => {
        TwigFilter.listenerCategoryChange();
        TwigFilter.listenerFilterExtraToggle();
        TwigFilter.listenerPriceFieldChange();
        TwigFilter.listenerLocationToggle();
        //filter-behavior-form-reset
        //search-grid__filter
        TwigFilter.listenerToggleMobileFilter();
    },
    listenerCategoryChange: () => {
        document.querySelectorAll('.filter-change-category').forEach((categoryButton) => {
            categoryButton.addEventListener('click', (evt) => {
                if (evt.target.classList.contains('tabs__btn_active')) {
                    return;
                }
                document.querySelector('.filter-change-category.tabs__btn_active').classList.remove('tabs__btn_active');
                evt.target.classList.add('tabs__btn_active');
                let fieldCategoryId = document.querySelector('.filter-field-categoryId');
                fieldCategoryId.value = evt.target.dataset.categoryId;
                fieldCategoryId.dispatchEvent(new Event('change'))
            })
        })
        document.querySelector('.filter-field-categoryId').addEventListener('change', (evt) => {
            TwigFilter.activeCategoryId = evt.target.value;
        })
    },
    listenerFilterExtraToggle: () => {
        const toggleExtraFilterButtonOpened = document.querySelector(".filter-toggle-extra-filter-open");
        if (toggleExtraFilterButtonOpened) {
            const filterExtraFilter = document.querySelector(".filter-extra-filter"),
                toggleExtraFilterButtonClosed = document.querySelector(".filter-toggle-extra-filter-close");

            toggleExtraFilterButtonOpened.addEventListener("click", () => {
                filterExtraFilter.classList.toggle("active");
                toggleExtraFilterButtonOpened.classList.toggle("active");
            });
            toggleExtraFilterButtonClosed.addEventListener("click", () => {
                filterExtraFilter.classList.remove("active");
                toggleExtraFilterButtonOpened.classList.remove("active");
            })
        }
    },
    listenerPriceFieldChange: () => {
        let fieldPriceFrom = document.querySelector('.filter-field-priceFrom');
        let fieldPriceTo = document.querySelector('.filter-field-priceTo');

        $('.filter-toggle-price-field').select2({minimumResultsForSearch: Infinity,}).on('change', (evt) => {
            let priceField = evt.target.value;
            TwigFilter._processChangeFieldPrice(fieldPriceFrom, fieldPriceFrom.getAttribute('name'), priceField);
            TwigFilter._processChangeFieldPrice(fieldPriceTo, fieldPriceTo.getAttribute('name'), priceField);
        });
    },
    _processChangeFieldPrice: (priceField, currentName, newPartName) => {
        priceField.setAttribute('name', currentName.replace(priceField.dataset.togglePartName, newPartName));
        priceField.dataset.togglePartName = newPartName;
    },
    listenerLocationToggle: () => {
        let filterLocation = document.querySelector('#filter-location');
        document.querySelector('.filter-behavior-open-modal-location').addEventListener('click', (evt) => {
            $(filterLocation).fadeIn("slow");
            filterLocation.addEventListener('click', TwigFilter._processLocationClickOutsideHandler)
        })
    },
    _processLocationClickOutsideHandler: (evt) => {
        if (evt.target === evt.currentTarget) {
            let filterLocation = document.querySelector('#filter-location');
            $(filterLocation).fadeOut("slow");
            filterLocation.removeEventListener('click', TwigFilter._processLocationClickOutsideHandler)
        }
    },
    listenerToggleMobileFilter: () => {
        document.querySelector('.search-grid__filter').addEventListener('click', (evt) => {
            document.querySelector('.main-screen-home.filter').classList.toggle('d-none');
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lazyLoadInstance.update();

    TwigSorting.run();

    TwigFilter.run();

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
    $('.price-mask').mask('000 000 000 000 000', {reverse: true});

    let formFlash = document.querySelector('.form #flashMessage')
    if (formFlash) {
        formFlash.scrollIntoView();
    }
})
