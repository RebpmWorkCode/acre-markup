import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
import $ from 'jquery';
import 'select2';

/* Стилизация select */
$(document).ready(function () {
	$('.select').select2({
		minimumResultsForSearch: Infinity,
		//multiple: true,
	});
});

/* Код на меню */
const burger = document.querySelector('.header-burger');
if (burger) {
	const menu = document.querySelector('.header');
	burger.addEventListener("click", function (e) {
		menu.classList.toggle('burger-active');
	});
}


/* Слайдер на главном экране */
const swiper = new Swiper('.popular-block', {
	modules: [Navigation, Pagination],
	loop: true,
	breakpoints: {
		576: {
			slidesPerView: 1,
			centeredSlides: true,
		},
		767.98: {
			slidesPerView: 2,
			spaceBetween: 30,
			centeredSlides: false
		},
		991.98: {
			slidesPerView: 3,
			spaceBetween: 10
		},
		1199.98: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.popular-navigation-next',
		prevEl: '.popular-navigation-prev',
	},
});

const swiper1 = new Swiper('.search-swiper', {
	modules: [Navigation, Pagination],
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 600,

	pagination: {
		el: '.search-pagination',
		clickable: true,
	},
});

const swiper2 = new Swiper('.search-grid-swiper', {
	modules: [Navigation, Pagination],
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 600,

	pagination: {
		el: '.search-grid-pagination',
		clickable: true,
	},
});

const swiper3 = new Swiper('.description-swiper', {
	modules: [Navigation, Pagination],
	loop: false,
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 600,

	navigation: {
		nextEl: '.description-button-next',
		prevEl: '.description-button-prev',
	},
});

const swiper4 = new Swiper('.description-rent-swiper', {
	modules: [Navigation, Pagination],
	loop: false,
	speed: 600,

	navigation: {
		nextEl: '.description-rent-button-next',
		prevEl: '.description-rent-button-prev',
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: true,
		},
		576: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 44,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 44,
		}
	}
});


const tabsOpen = document.querySelector('.tabs-open');
if (tabsOpen) {
	tabsOpen.addEventListener("click", function (e) {
		tabsOpen.classList.toggle('active');
	});
}

const moreA = document.querySelector('.more-open-one');
if (moreA) {
	const additionalA = document.querySelector('.additional-open-one');
	const closeA = document.querySelector('.additional-hide-one');
	moreA.addEventListener("click", function (e) {
		additionalA.classList.toggle('active');
		moreA.classList.toggle('active');
	});
	closeA.addEventListener("click", function (e) {
		additionalA.classList.remove('active');
		moreA.classList.remove('active');
	});
}

const moreB = document.querySelector('.more-open-two');
if (moreB) {
	const additionalB = document.querySelector('.additional-open-two');
	const closeB = document.querySelector('.additional-hide-two');
	moreB.addEventListener("click", function (e) {
		additionalB.classList.toggle('active');
		moreB.classList.toggle('active');
	});
	closeB.addEventListener("click", function (e) {
		additionalB.classList.remove('active');
		moreB.classList.remove('active');
	});
}

const moreC = document.querySelector('.more-open-three');
if (moreC) {
	const additionalC = document.querySelector('.additional-open-three');
	const closeC = document.querySelector('.additional-hide-three');
	moreC.addEventListener("click", function (e) {
		additionalC.classList.toggle('active');
		moreC.classList.toggle('active');
	});
	closeC.addEventListener("click", function (e) {
		additionalC.classList.remove('active');
		moreC.classList.remove('active');
	});
}

const moreD = document.querySelector('.more-open-four');
if (moreD) {
	const additionalD = document.querySelector('.additional-open-four');
	const closeD = document.querySelector('.additional-hide-four');
	moreD.addEventListener("click", function (e) {
		additionalD.classList.toggle('active');
		moreD.classList.toggle('active');
	});
	closeD.addEventListener("click", function (e) {
		additionalD.classList.remove('active');
		moreD.classList.remove('active');
	});
}

/* Табы */
document.addEventListener('DOMContentLoaded', function () {
	tabs('tabs');
	tabs('aboutus_carouselTab');
}, false);

function tabs(id) {

	let tab = document.getElementById(id);

	if (tab) {
		let tab__navLinks = document.querySelectorAll('#' + id + ' > .tabs__nav .tabs__nav-link');
		let tab__cntContainers = document.querySelectorAll('#' + id + ' > .tabs__content');
		var activeIndex = 0;

		for (let i = 0; i < tab__navLinks.length; i++) {
			let link = tab__navLinks[i];
			link.addEventListener('click', function (e) {
				e.preventDefault();
				if (i !== activeIndex && i >= 0 && i <= tab__navLinks.length) {
					tab__navLinks[activeIndex].classList.remove('tabs__nav-link--active');
					tab__navLinks[i].classList.add('tabs__nav-link--active');
					tab__cntContainers[activeIndex].classList.remove('tabs__content--active');
					tab__cntContainers[i].classList.add('tabs__content--active');
					activeIndex = i;
				}
			});
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
	tabs2('tabs-object');
	tabs2('aboutus_carouselTab');
}, false);

function tabs2(id) {

	let tab = document.getElementById(id);

	if (tab) {
		let tab__navLinks = document.querySelectorAll('#' + id + ' > .tabs-object__nav .tabs-object__nav-link');
		let tab__cntContainers = document.querySelectorAll('#' + id + ' > .tabs-object__content');
		var activeIndex = 0;

		for (let i = 0; i < tab__navLinks.length; i++) {
			let link = tab__navLinks[i];
			link.addEventListener('click', function (e) {
				e.preventDefault();
				if (i !== activeIndex && i >= 0 && i <= tab__navLinks.length) {
					tab__navLinks[activeIndex].classList.remove('tabs-object__nav-link--active');
					tab__navLinks[i].classList.add('tabs-object__nav-link--active');
					tab__cntContainers[activeIndex].classList.remove('tabs-object__content--active');
					tab__cntContainers[i].classList.add('tabs-object__content--active');
					activeIndex = i;
				}
			});
		}
	}
}


document.addEventListener('DOMContentLoaded', function () {
	tabs3('tabs-card');
	tabs3('aboutus_carouselTab');
}, false);

function tabs3(id) {

	let tab = document.getElementById(id);

	if (tab) {
		let tab__navLinks = document.querySelectorAll('#' + id + ' > .tabs-card__nav .tabs-card__btn');
		let tab__cntContainers = document.querySelectorAll('#' + id + ' > .tabs-card__pane');
		var activeIndex = 0;

		for (let i = 0; i < tab__navLinks.length; i++) {
			let link = tab__navLinks[i];
			link.addEventListener('click', function (e) {
				e.preventDefault();
				if (i !== activeIndex && i >= 0 && i <= tab__navLinks.length) {
					tab__navLinks[activeIndex].classList.remove('tabs-card__btn_active');
					tab__navLinks[i].classList.add('tabs-card__btn_active');
					tab__cntContainers[activeIndex].classList.remove('tabs-card__pane_show');
					tab__cntContainers[i].classList.add('tabs-card__pane_show');
					activeIndex = i;
				}
			});
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
	tabs4('tabs-card-a');
	tabs4('aboutus_carouselTab');
}, false);

function tabs4(id) {

	let tab = document.getElementById(id);

	if (tab) {
		let tab__navLinks = document.querySelectorAll('#' + id + ' > .tabs-open' + ' > .tabs__nav .tabs__btn');
		let tab__cntContainers = document.querySelectorAll('#' + id + ' > .tabs__content' + ' > .tabs__pane');
		var activeIndex = 0;

		for (let i = 0; i < tab__navLinks.length; i++) {
			let link = tab__navLinks[i];
			link.addEventListener('click', function (e) {
				e.preventDefault();
				if (i !== activeIndex && i >= 0 && i <= tab__navLinks.length) {
					tab__navLinks[activeIndex].classList.remove('tabs__btn_active');
					tab__navLinks[i].classList.add('tabs__btn_active');
					tab__cntContainers[activeIndex].classList.remove('tabs__pane_show');
					tab__cntContainers[i].classList.add('tabs__pane_show');
					activeIndex = i;
				}
			});
		}
	}
}

/* Работа с картой */

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [55.763914406274836, 37.56132288821894],
		zoom: 14
	}),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			iconLayout: 'default#image',
			iconImageHref: '../img/map/icon-1.svg',
			iconImageSize: [57, 76],
		}),

		myPlacemark2 = new ymaps.Placemark([55.748470627344524, 37.5379173084971], {
			iconLayout: 'default#image',
			iconImageHref: '../img/map/icon-2.svg',
			iconImageSize: [57, 76],
		});

	myMap.geoObjects
		.add(myPlacemark)
		.add(myPlacemark2);

	myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип
	myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	myMap.controls.remove('rulerControl'); // удаляем контрол правил

	myMap.behaviors.disable(['scrollZoom']);
});

