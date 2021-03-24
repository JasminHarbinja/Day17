const array1 = ["MON", "TUE", "WED", "THU", "FRI"];

function main(arr) {
    // only

    let array2 = [...array1]; // change

    return array2;
    // only 
}
console.log(main(array1));
module.exports = main;