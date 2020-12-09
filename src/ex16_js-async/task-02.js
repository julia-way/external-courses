const searchInput = document.getElementById('seachInput');

const request = () => {
const searchedElem = furniture.find(el => el === searchInput.value);

if (searchedElem) {
    console.log(searchedElem);
} else {
    console.log('Element is not found');
}
};

const debounce = (func, wait) => {
    let timeout;

    return function() {
        const call = () => {
          func.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(call, wait);
    };
};

searchInput.addEventListener('input', debounce(request, 2000));
