const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn_js');
const closePopup = document.querySelector('.close');
const input = document.querySelector('.contact__input-name');
const overlay = document.querySelector('.overlay');
const checkboxInput = document.querySelector('.checkbox__input');
const submit = document.querySelector('.submit');
console.log(closePopup)


btn.addEventListener('click', function() {
    popup.classList.add('open');
    input.focus();
})

closePopup.addEventListener('click', function () {
    popup.classList.remove('open');
})

overlay.addEventListener('click', function() {
    popup.classList.remove('open');
})

checkboxInput.addEventListener('change', function() {
    if(!checkboxInput.hasAttribute('checked')) {
        submit.setAttribute("disabled", "disabled");        
    }
})