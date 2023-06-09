const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileLinks = document.querySelectorAll(".menu-a");
const btn = document.querySelector('#top');
const slides = document.getElementsByClassName("mySlides");
const prev = document.querySelector(".prev-slideshow");
const next = document.querySelector(".next-slideshow");
const modal = document.getElementById("modal");
const btnModal = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle("active");
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle("active");
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
    mobileMenu.classList.remove("active");
    });
});
const menuLinks = document.querySelectorAll(".scroll");

function getOffsetTop(element) {
    let offsetTop = 0;
    while(element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
}

menuLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const targetElement = document.querySelector(href);
        const offsetTop = getOffsetTop(targetElement);
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});

btn.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
    btn.classList.add('scrolled');
    } else {
    btn.classList.remove('scrolled');
    }
});

let slideIndex = 0;
const showSlides = (auto = true) => {
    clearTimeout(autoSlideshow);

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (auto) {
        slideIndex++;
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = "block";

    autoSlideshow = setTimeout(showSlides, 4000);
};

const moveSlides = (step) => {
    slideIndex += step;
    showSlides(false);
};

prev.addEventListener("click", () => {
    moveSlides(-1);
});

next.addEventListener("click", () => {
    moveSlides(1);
});

let autoSlideshow = setTimeout(showSlides, 0);

let scrollAmount = 0;
const container = document.querySelector('.image-scroll-container');
const imageScroll = setInterval(function(){
    scrollAmount += 2;
    container.scrollTo(scrollAmount, 0);
    if(scrollAmount >= container.scrollWidth/2){
    scrollAmount = 0;
    }
}, 50);

btnModal.addEventListener("click", function() {
    modal.style.display = "block";
    document.querySelector('body').classList.add('modal-open');
});
span.addEventListener("click", function() {
    modal.style.display = "none";
    document.querySelector('body').classList.remove('modal-open');
});
window.addEventListener("click", function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector('body').classList.remove('modal-open');
}
});

let slideIndexReview = 1;
showSlide(slideIndexReview);
function changeSlide(n) {
showSlide(slideIndexReview += n);
}
function showSlide(n) {
const slidesReview = document.getElementsByClassName("slide");
if (n > slidesReview.length) {slideIndexReview = 1}
if (n < 1) {slideIndexReview = slidesReview.length}
for (let i = 0; i < slidesReview.length; i++) {
slidesReview[i].style.display = "none";
}
slidesReview[slideIndexReview-1].style.display = "block";
}
document.querySelector(".prev").addEventListener("click", function() {
changeSlide(-1);
});
document.querySelector(".next").addEventListener("click", function() {
changeSlide(1);
});

