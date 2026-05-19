const image = document.querySelector('.hero__favorite-images');
const leftButton = document.querySelector('.hero__favorite-button--left');
const rightButton = document.querySelector('.hero__favorite-button--right');
const dots = document.querySelectorAll(".hero__favorite-dot");
let currentIndex = 0;

function updateImage() {
    dots.forEach((dot) => {
        dot.classList.remove("hero__favorite-dot--active");
    });
    dots[currentIndex].classList.add("hero__favorite-dot--active");
    const style = window.getComputedStyle(image.children[0]);
    const marginRight = parseInt(style.marginRight);
    const imageWidth = image.children[0].offsetWidth + marginRight;
    image.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
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

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-slide'));
        updateImage();
    });
});
