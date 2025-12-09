let titles = [
    "Python Developer",
    "Data Analyst",
    "Cloud Computing Enthusiast",
    "Full Stack Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let letter = "";

function typeEffect() {
    if (index === titles.length) {
        index = 0;
    }

    currentText = titles[index];
    letter = currentText.slice(0, ++charIndex);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        charIndex = 0;
        index++;
        setTimeout(typeEffect, 1500);
    } else {
        setTimeout(typeEffect, 120);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
