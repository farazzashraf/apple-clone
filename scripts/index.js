const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Manual navigation

const manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

//  autoplay navigation

const repeat = function () {
    let active = document.getElementsByClassName('active');
    let i = 0; // Initialize i to 0

    const repeater = () => {
        setTimeout(() => { // Fix the setTimeout syntax
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (i === slides.length) { // Use '===' for comparison
                i = 0;
            }

            repeater();
        }, 10000);
    }
    repeater();
}

repeat(); // Call the repeat function



// document.addEventListener("DOMContentLoaded", function () {
//     const dropdown = document.querySelector(".dropdown");
//     const header = document.getElementById("main-header");
//     const backdrop = document.querySelector(".backdrop");

//     dropdown.addEventListener("mouseenter", function () {
//         header.classList.add("header-hovered");
//         backdrop.style.display = "block"; // Show the backdrop
//         setTimeout(() => {
//             backdrop.style.opacity = 1; // Fade in the backdrop
//         }, 10);
//     });

//     dropdown.addEventListener("mouseleave", function () {
//         header.classList.remove("header-hovered");
//         backdrop.style.opacity = 0; // Fade out the backdrop
//         setTimeout(() => {
//             backdrop.style.display = "none"; // Hide the backdrop
//         }, 300); // Adjust the duration to match your transition time
//     });
// });

