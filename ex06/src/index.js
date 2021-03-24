const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";

    // only

    const [d, e, ...array2] = list;

    // only

    return array2;
}

console.log(removeFirstTwo(array1));
module.exports = removeFirstTwo;