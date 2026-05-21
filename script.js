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

const table = ['よ', 'う', 'こ', 'そ', '!', ' ', '私', 'の', 'プ', 'ロ', 'フ', 'ィ', 'ー', 'ル', 'へ'];
const original = ['S', 'H', 'U', 'T', 'O', ' ', 'T', 'A', 'N', 'I', 'G', 'U', 'C', 'H', 'I'];
const spans = document.querySelectorAll('.profile__label-text span');

function animate() {
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.textContent = table[index];
        }, 200 * index + 3000);
    });

    setTimeout(() => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.textContent = original[index];
            }, 200 * (spans.length - 1 - index));
        });
    }, 200 * spans.length + 5000);
}

animate();

setInterval(() => {
    animate();
}, 200 * spans.length * 4);

const element = document.querySelector('.hero__contact');
const audio = document.querySelector('#contact-sound');
element.addEventListener('mouseenter', () => {
    audio.play();
});
element.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 0;
});