let a;
let typeOf = function(a) {
if (typeof a === 'string') {
return typeof a;
} else {
if (typeof a === 'number' && isNaN(a) === false) {
return typeof a;
}
return undefined;
};
};
