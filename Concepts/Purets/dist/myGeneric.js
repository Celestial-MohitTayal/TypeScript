"use strict";
const score = [];
const names = [];
//------------------
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//-------------------
function IdentityThree(Val) {
    return Val;
}
// IdentityThree(true);
function identityFour(val) {
    //Same as indentityThree
    return val;
}
identityFour({ brand: "Johney Walker", type: 4 });
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //<T> is a generic we use comma <T,> in generic to differentiate it form html tag and let someone know that it is a generic
    //do some db operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunc(val1, val2) {
    return { val1, val2 };
}
// anotherFunc(3, '4');    // Throws error because U extends Database
anotherFunc(3, { connection: '1', username: '2', password: '3' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
