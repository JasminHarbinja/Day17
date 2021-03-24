let foo = 12,
    boo = 45;

function main(foo, boo) {

    //Only 

    [foo, boo] = [boo, foo];

    //Only 

    return { foo, boo }
}
console.log(main(foo, boo));
module.exports = main;