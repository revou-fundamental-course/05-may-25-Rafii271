// Banner Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
    });

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 3000);
}
showSlides();

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const destination = document.getElementById("destination").value.trim();

    if (name === "" || email === "" || destination === "") {
        alert("All fields are required!");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email!");
        return false;
    }

    alert("Form submitted successfully!");
    this.reset();
});
