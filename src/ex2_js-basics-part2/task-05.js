let array = [];
let maxElement = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
        array.splice(i--, 1);
        };
        };
    let max = array[0];
    let min;
    for(let i = 1; i < array.length; i++) {
        if((array[i]) > max) {
            max = array[i]; 
        } else {
            min = array[i];
        }
    }
    return max;
}
module.exports = maxElement;
