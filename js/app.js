//disable loading
function hide() {
    loader.classList.add('slideOutDown')
    loader.style.display = 'none'
    container.style.display = 'block'
}
setTimeout(() => { hide() }, 2000);


//slideshow button
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

slideRight.addEventListener('click', () => {
    plusSlides(1)
})
slideLeft.addEventListener('click', () => {
    plusSlides(-1)
})


// ***************************************
//slideshow automatic
var slideIndex = 0
showSlide();

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlide, 15000);
}
// ******************************************************
