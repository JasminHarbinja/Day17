const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2,
};

function main(myCar) {
    // only

    const { cylinders, size } = myCar;
    return { cylinders, size };

    // only
}

console.log(main(MY_CAR));
module.exports = main;