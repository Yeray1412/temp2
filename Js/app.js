const navPopUp = document.querySelector('.navPopUp');
const mainXmark = document.querySelector('.mainXmark');
const navToggle = document.querySelector('.navToggle');
const navbarNav = document.querySelector('.navbar-nav');
const mainSection = document.querySelector('.mainSection')
const aboutMe = document.querySelector('.aboutMe')
const footer = document.querySelector('footer')
const ulCon = document.querySelector('.ulCon')

navToggle.addEventListener('click', ()=> {
    navPopUp.style.transform = 'translateX(0px)'
    document.body.classList.add('stopScroll')
});

mainXmark.addEventListener('click', ()=> {
    navPopUp.style.transform = 'translateX(-100vw)'
    document.body.classList.remove('stopScroll')
});

for(const li of navbarNav.children) {
    if(li.firstElementChild.textContent.includes('Portfolio')) {
        li.firstElementChild.addEventListener('click',()=> {
            mainSection.scrollIntoView({behavior: "smooth"})
        })
    }

    if(li.firstElementChild.textContent.includes('About')) {
        li.firstElementChild.addEventListener('click',()=> {
            aboutMe.scrollIntoView({behavior: "smooth"})
        })
    }

    if(li.firstElementChild.textContent.includes('Contact')) {
        li.firstElementChild.addEventListener('click',()=> {
            footer.scrollIntoView({behavior: "smooth"})
        })
    }
}

for(const li of ulCon.children[0].children) {
    if(li.textContent.includes('Portfolio')) {
        li.addEventListener('click',()=> {
            navPopUp.style.transform = 'translateX(-100vw)'
            document.body.classList.remove('stopScroll')
            mainSection.scrollIntoView({behavior: "smooth"})
        })
    }

    if(li.textContent.includes('About')) {
        li.addEventListener('click',()=> {
            navPopUp.style.transform = 'translateX(-100vw)'
            document.body.classList.remove('stopScroll')
            aboutMe.scrollIntoView({behavior: "smooth"})
        })
    }

    if(li.textContent.includes('Contact')) {
        li.addEventListener('click',()=> {
            navPopUp.style.transform = 'translateX(-100vw)'
            document.body.classList.remove('stopScroll')
            footer.scrollIntoView({behavior: "smooth"})
        })
    }
}