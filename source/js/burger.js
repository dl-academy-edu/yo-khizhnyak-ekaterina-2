const burgerBtn = document.querySelector('.header__menu')
const mobileMenu = document.querySelector('.header__burger')
const closeMenu = document.querySelector('.header__burger__close')

burgerBtn.addEventListener('click',function() {
    mobileMenu.classList.add('header__burger__open')
})

closeMenu.addEventListener('click',function() {
    mobileMenu.classList.remove('header__burger__open')
})