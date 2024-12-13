let currentIndex = 0;

const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

const slideWidth = 800; 

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    moveSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    moveSlider();
}

function moveSlider() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

const dots = document.querySelectorAll('.dots a');
dots.forEach((dot, index) => {
    
    dot.addEventListener('click', (event) => {
        event.preventDefault(); 
        currentIndex = index; 
        moveSlider(); 
    });
});

moveSlider();
