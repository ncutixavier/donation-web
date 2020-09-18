const container = document.querySelector('.container')
const loader = document.querySelector('.loading')
const slides = document.querySelectorAll('.slide')
const navbar = document.querySelector('.navbar')

const slideshow = document.querySelector('#slideshow')
const slideBtn = document.querySelector('.slide_btn')
const slideLeft = document.querySelector('.slide_left_btn')
const slideRight = document.querySelector('.slide_right_btn')

window.addEventListener('scroll', function () {
    scroll.textContent = window.pageYOffset + 'px';
});