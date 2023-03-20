AOS.init();

const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
	if (window.innerWidth > 500 && window.scrollY >= 56) {
		navEl.classList.add('navbar-scrolled');
	}
	else if (window.innerWidth > 500 && window.scrollY < 56){
		navEl.classList.remove('navbar-scrolled');
	}
	else if (window.innerWidth <= 500 && window.scrollY >= 2) {
		navEl.classList.add('navbar-scrolled');
	}
	else if (window.innerWidth <= 500 && window.scrollY < 2) {
		navEl.classList.remove('navbar-scrolled');
	}
});