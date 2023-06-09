const modal = document.getElementById("modal");
const btnModal = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];
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

let slideIndex = 1;
showSlide(slideIndex);
function changeSlide(n) {
    showSlide(slideIndex += n);
}
function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
document.querySelector(".prev").addEventListener("click", function() {
    changeSlide(-1);
});
document.querySelector(".next").addEventListener("click", function() {
    changeSlide(1);
});

