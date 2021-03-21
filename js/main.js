'use strict';

const about = document.querySelector('.aboutInner');
const premiumTitle = document.querySelector('.premium__title');
const premiumBanner = document.querySelector('.premium__banner');
document.addEventListener('scroll', () => {
	console.log(window.scrollY);
	if (window.scrollY > 300) {
		about.classList.add('inner');
	}
	if (window.scrollY > 1100) {
		premiumTitle.classList.add('title');
		premiumBanner.classList.add('banner');
	}
});
