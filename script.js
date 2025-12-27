function togglemenu(){
    const menu = document.querySelector(".menu-links") /*targetting menu-link elemments*/
    const icon = document.querySelector(".hamburger-icon") /*targetting hamburger-icon elemments*/
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}



//Wrapping slideshow in DOM to load
document.addEventListener('DOMContentLoaded', function() {
//Slideshow function and reqs
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let autoplayInterval;

function showSlide(index){
    //Remove active class from slides/dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    //Handle wrap around of images
    if(index >= slides.length){
        currentSlide =0;
    } else if (index<0){
        currentSlide = slides.length -1;
    }else{
        currentSlide = index;
    }

    // adding the active class to dots or slides
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Change slide to next or previous
function changeSlide(direction){
    showSlide(currentSlide + direction);
    resetAutoplay();
}

// Go to a specific slide
function goToSlide(index){
    showSlide(index);
    resetAutoplay();
}

//Autoplay slideshow
function startAutoplay(){
    autoplayInterval = setInterval(() =>{
        showSlide(currentSlide+1);
    }, 4000); //4 seconds
}

function resetAutoplay(){
    clearInterval(autoplayInterval);
    startAutoplay();
}

// Starts autoplay when page loads
startAutoplay();

const conatiner = document.querySelector('.section_pic-container1');
conatiner.addEventListener('mouseenter', ()=>{
    clearInterval(autoplayInterval);
});
conatiner.addEventListener('mouseleave', ()=> {
    startAutoplay();
});

//Touch screen functionality
let touchStartX = 0;
let touchEndX = 0;

conatiner.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

conatiner.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe(){
    if(touchEndX < touchStartX-50){
        changeSlide(1);
    }
    if (touchEndX > touchStartX + 50){
        changeSlide(-1);
    }
}

window.changeSlide = changeSlide;
window.goToSlide = goToSlide;

});
