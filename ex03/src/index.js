const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(myCar) {

    //Only 
    const { cylinders: carCylinders } = MY_CAR
    const { size: carSize } = MY_CAR

    return { carCylinders, carSize }
    //Only 
}
console.log(main(MY_CAR));
module.exports = main;