const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.burger-menu');
const anchors = document.querySelectorAll('a[href*="#"]');
const popUpWrapper = document.querySelector('.popup__wrapper');
const submit = document.querySelector('.popup__submit');
const body = document.querySelector('body');
const input = document.querySelector('.popup__mail-input');
window.addEventListener("scroll", function (e) {
	if (window.pageYOffset < 10) {
		header.classList.remove("scrolled");
	} else {
		header.classList.add("scrolled");
	}
});
if (window.pageYOffset > 10) {
	header.classList.add("scrolled");
}
for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
    })
  })
}
document.addEventListener('click', function (e) {
	
	if (e.target === headerBurger) {
		headerBurger.classList.toggle('header__burger-active');
		headerMenu.classList.toggle('burger-menu-active');
		header.classList.toggle('lock');
		body.classList.toggle('lock');
	}

	if (e.target === document.querySelector('.main__button')) {
		popUpWrapper.classList.add('popup-active');
		body.classList.add('lock');
	}

	if (e.target === popUpWrapper || e.target === document.querySelector('.popup__close-cross')){
		popUpWrapper.classList.remove('popup-active');
		body.classList.remove('lock');
	}

	if (e.target === document.querySelectorAll('.burger-menu__anchor')[0]
	|| e.target === document.querySelectorAll('.burger-menu__anchor')[1]) {
		headerMenu.classList.remove('burger-menu-active');
		header.classList.remove('lock');
		headerBurger.classList.remove('header__burger-active');
		body.classList.remove('lock');
	}

	if (e.target === submit
		&& !submit.classList.contains('popup__submit-disabled')) {
		e.preventDefault();
		if(submit.textContent !== 'Хорошо'){
			document.querySelector('.popup__title').textContent = 'Отлично!';
			document.querySelector('.popup__text').textContent = 'Вам на почту выслано письмо с подтверждением регистрации';
			input.remove();
			submit.textContent = 'Хорошо';
		} else {
			popUpWrapper.classList.remove('popup-active')
			body.classList.remove('lock');
		}
	}
})

input.addEventListener('input', function () {
	if (input.value.length > 0
	&& input.value.includes('@')) {
		submit.classList.remove('popup__submit-disabled');
	} else {
		submit.classList.add('popup__submit-disabled');
	}
})

document.addEventListener('keydown', function (e) { 
	if(e.keyCode == 27){
		popUpWrapper.classList.remove('popup-active');
		body.classList.remove('lock');
	}
})