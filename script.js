

const familyTrack = document.querySelector(".family-track");
const familySlides = document.querySelectorAll(".family-track .slide");

const familyNext = document.querySelector(".family-next");
const familyPrev = document.querySelector(".family-prev");

const familyDots = document.getElementById("familyDots");

let familyIndex = 0;



familySlides.forEach((slide, index) => {

    const dot = document.createElement("div");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        familyIndex = index;
        showFamily();

    });

    familyDots.appendChild(dot);

});


function showFamily() {

    familyTrack.style.transform =
        `translateX(-${familyIndex * 100}%)`;

    document
        .querySelectorAll("#familyDots .dot")
        .forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === familyIndex
            );

        });

}


familyNext.addEventListener("click", () => {

    familyIndex++;

    if (familyIndex >= familySlides.length) {
        familyIndex = 0;
    }

    showFamily();

});


familyPrev.addEventListener("click", () => {

    familyIndex--;

    if (familyIndex < 0) {
        familyIndex = familySlides.length - 1;
    }

    showFamily();

});


setInterval(() => {

    familyIndex++;

    if (familyIndex >= familySlides.length) {
        familyIndex = 0;
    }

    showFamily();

}, 4500);



const classTrack = document.querySelector(".carousel-track");
const classSlides = document.querySelectorAll(".carousel-track .slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const friendDots = document.getElementById("friendDots");

let currentSlide = 0;



classSlides.forEach((slide, index) => {

    const dot = document.createElement("div");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        currentSlide = index;
        showSlide();

    });

    friendDots.appendChild(dot);

});


function showSlide() {

    classTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    document
        .querySelectorAll("#friendDots .dot")
        .forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });

}


nextBtn.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= classSlides.length) {
        currentSlide = 0;
    }

    showSlide();

});


prevBtn.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = classSlides.length - 1;
    }

    showSlide();

});


setInterval(() => {

    currentSlide++;

    if (currentSlide >= classSlides.length) {
        currentSlide = 0;
    }

    showSlide();

}, 4000);


function openProject() {

    alert(
        "My IT Project\n\n" +
        "Personal Portfolio Website\n\n" +
        "Created with HTML, CSS and JavaScript."
    );

}