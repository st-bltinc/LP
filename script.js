const image = document.querySelector('.hero__favorite-images');
const leftButton = document.querySelector('.hero__favorite-button--left');
const rightButton = document.querySelector('.hero__favorite-button--right');
let currentIndex = 0;

function updateImage() {
    const dots = document.querySelectorAll(".hero__favorite-dot");
    dots.forEach((dot) => {
        dot.classList.remove("hero__favorite-dot--active");
    });
    dots[currentIndex].classList.add("hero__favorite-dot--active");
    const offset = -currentIndex * 150;
    image.style.transform = `translateX(${offset}%)`;
};

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + image.children.length) % image.children.length;
    updateImage();
});

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % image.children.length;
    updateImage();
});


setInterval(() => {
    currentIndex = (currentIndex + 1) % image.children.length;
    updateImage();
}, 3000);