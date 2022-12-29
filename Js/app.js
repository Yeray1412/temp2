const navPopUp = document.querySelector('.navPopUp');
const mainXmark = document.querySelector('.mainXmark');
const navToggle = document.querySelector('.navToggle');

navToggle.addEventListener('click', ()=> {
    navPopUp.style.transform = 'translateX(0px)'
    document.body.classList.add('stopScroll')
});

mainXmark.addEventListener('click', ()=> {
    navPopUp.style.transform = 'translateX(-100vw)'
    document.body.classList.remove('stopScroll')
});
