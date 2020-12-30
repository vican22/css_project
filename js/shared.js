const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan .button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

for (let index = 0; index < selectPlanButtons.length; index++) {
	selectPlanButtons[index].addEventListener('click', () => {
		// modal.style.display = 'block';
		// backdrop.style.display = 'block';
		// modal.className = 'open' //This will actually overwrite the complete classes with open
		modal.classList.add('open');
		backdrop.style.display = 'block';
		setTimeout(() => {
			backdrop.classList.add('open');
		}, 10);
	});
}

const closeModal = () => {
	// backdrop.style.display = 'none';
	// modal.style.display = 'none';
	// mobileNav.style.display = 'none';
	if (modal) {
		modal.classList.remove('open');
	}

	backdrop.classList.remove('open');
	setTimeout(() => {
		backdrop.style.display = 'none';
	}, 200);

	mobileNav.classList.remove('open');
};

backdrop.addEventListener('click', closeModal);

if (modalNoButton) {
	modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
	// mobileNav.style.display = 'block';
	// backdrop.style.display = 'block';
	mobileNav.classList.add('open');
	backdrop.style.display = 'block';
	setTimeout(() => {
		backdrop.classList.add('open');
	}, 10);
});

ctaButton.addEventListener('animationstart', event => {
	console.log('Animation started');
	console.log(event);
});

ctaButton.addEventListener('animationend', event => {
	console.log('Anaimtion end');
	console.log(event);
});

ctaButton.addEventListener('animationiteration', event => {
	console.log('Animation iteration');
	console.log(event);
});
