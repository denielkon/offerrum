const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.burger-menu')
const anchors = document.querySelectorAll('a[href*="#"]')
window.addEventListener("scroll", function (e) {
	if (window.pageYOffset < 10) {
		header.classList.remove("scrolled")
	} else {
		header.classList.add("scrolled")
	}
});
if (window.pageYOffset > 10) {
	header.classList.add("scrolled")
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
	e.preventDefault();
	if (e.target === headerBurger) {
		headerBurger.classList.toggle('header__burger-active');
		headerMenu.classList.toggle('burger-menu-active');
		header.classList.toggle('lock')
		document.querySelector('body').classList.toggle('lock')
	}
	if (e.target === document.querySelector('.main__button')) {
		document.querySelector('.popup__wrapper').classList.add('popup-active')
		document.querySelector('body').classList.add('lock')
	}
	if (e.target === document.querySelector('.popup__close-cross')) {
		document.querySelector('.popup__wrapper').classList.remove('popup-active')
		document.querySelector('body').classList.remove('lock')
	}
	if (e.target === document.querySelector('.popup__wrapper')){
		document.querySelector('.popup__wrapper').classList.remove('popup-active')
		document.querySelector('body').classList.remove('lock')
	}
	if (e.target === document.querySelectorAll('.burger-menu__anchor')[0]
	|| e.target === document.querySelectorAll('.burger-menu__anchor')[1]) {
		headerMenu.classList.remove('burger-menu-active')
		header.classList.remove('lock')
		document.querySelector('body').classList.remove('lock')
	}

	if (e.target === document.querySelector('.popup__submit')
		&& !document.querySelector('.popup__submit').classList.contains('popup__submit-disabled')) {
		if(document.querySelector('.popup__submit').textContent !== 'Хорошо'){
			document.querySelector('.popup__title').textContent = 'Отлично!'
			document.querySelector('.popup__text').textContent = 'Вам на почту выслано письмо с подтверждением регистрации'
			document.querySelector('.popup__mail-input').remove()
			document.querySelector('.popup__submit').textContent = 'Хорошо'
		} else {
			document.querySelector('.popup__wrapper').classList.remove('popup-active')
			document.querySelector('body').classList.remove('lock')
		}
	}

	
})
document.querySelector('.popup__mail-input').addEventListener('input', function () {
	if (document.querySelector('.popup__mail-input').value.length > 0
	&& document.querySelector('.popup__mail-input').value.includes('@')) {
		document.querySelector('.popup__submit').classList.remove('popup__submit-disabled')
	} else {
		document.querySelector('.popup__submit').classList.add('popup__submit-disabled')
	}
	
})
document.addEventListener('keydown', function (e) { 
	if(e.keyCode == 27){
		document.querySelector('.popup__wrapper').classList.remove('popup-active');
		document.querySelector('body').classList.remove('lock');
	}
})