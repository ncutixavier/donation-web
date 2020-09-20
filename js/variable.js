const container = document.querySelector('.container')
const loader = document.querySelector('.loading')
const slides = document.querySelectorAll('.slide')
const navbar = document.querySelector('.navbar')

const slideshow = document.querySelector('#slideshow')
const slideBtn = document.querySelector('.slide_btn')
const slideLeft = document.querySelector('.slide_left_btn')
const slideRight = document.querySelector('.slide_right_btn')

const causeItems = document.querySelector('.causes-items')
const sponsorItems = document.querySelector('.sponsors-items')
const bar = document.querySelector('.bars')
const navItems = document.querySelector('.navbar-items')

window.addEventListener('scroll', function () {
    scroll.textContent = window.pageYOffset + 'px';
});

bar.addEventListener('click', ()=>{
    document.querySelector('.fa-bars').classList.toggle('fa-times')
    navItems.classList.toggle('active')
})