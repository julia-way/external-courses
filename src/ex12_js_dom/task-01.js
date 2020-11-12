const photoArray = document.getElementsByClassName('.slide');
const buttonToPrevious = document.getElementById('toPreviousPhoto');
const buttonToNext = document.getElementById('toNextPhoto');
let index = 0;
let ammountOfSlides = 3;

const getSlides = () => {
    const leftSlide = document.querySelector('.slide.slide_left');
    const rightSlide = document.querySelector('.slide.slide_right');
    const centralSlide = document.querySelector('.slide.slide_central');

    return {
        leftSlide,
        rightSlide,
        centralSlide,
    };
};

const shiftToLeft = () => {
    const { leftSlide, rightSlide, centralSlide } = getSlides();
    index = index >= (photoArray.length - 1) ? 0 : index + 1;

    leftSlide.classList.remove('slide_left', 'slide_to-right');
    rightSlide.classList.remove('slide_right', 'slide_to-right');
    centralSlide.classList.remove('slide_central', 'slide_to-right');

    leftSlide.classList.add('slide_right', 'slide_to-left');
    rightSlide.classList.add('slide_central', 'slide_to-left');
    centralSlide.classList.add('slide_left', 'slide_to-left');

    rightSlide.innerText = photoArray[index];
};

const shiftToRight = () => {
    const { leftSlide, rightSlide, centralSlide } = getSlides();
    index = index <= 0 ? (photoArray - 1) : index - 1;

    leftSlide.classList.remove('slide_left', 'slide_to-left');
    rightSlide.classList.remove('slide_right', 'slide_to-left');
    centralSlide.classList.remove('slide_central', 'slide_to-left');

    leftSlide.classList.add('slide_central', 'slide_to-right');
    rightSlide.classList.add('slide_left', 'slide_to-right');
    centralSlide.classList.add('slide_right', 'slide_to-right');

    leftSlide.innerText = photoArray[index];
};

buttonToPrevious.addEventListener('click', shiftToRight);
buttonToNext.addEventListener('click', shiftToLeft);
