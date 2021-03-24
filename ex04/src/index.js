const BAKING_TEMPERATURES = {
    cake: { low: 180, high: 250 },
    bread: { low: 150, high: 220 },
    pie: { low: 200, high: 230 }
};

function main(baking) {

    //Only 

    const { bread: { low: lowBread } } = BAKING_TEMPERATURES;
    const { bread: { high: highBread } } = BAKING_TEMPERATURES;

    return { lowBread, highBread };

    //Only 

}
console.log(main(BAKING_TEMPERATURES));
module.exports = main;