const photoArray = document.getElementsByClassName("photo");
const buttonToPrevious = document.querySelector(".toPreviousPhoto");
const buttonToNext = document.querySelector(".toNextPhoto");
let index = 0;

buttonToPrevious.addEventListener("click", switchToPrevious);
function switchToPrevious () {
    photoArray[index].classList.remove("visible");
    index--;
    if (index < 0) {
        index = photoArray.length - 1;
    }
    photoArray[index].classList.add("visible");
};

buttonToNext.addEventListener("click", switchToNext);
function switchToNext () {
    photoArray[index].classList.remove("visible");
    index++;
    if (index >= photoArray.length) {
        index = 0;
    }
    photoArray[index].classList.add("visible");
};
