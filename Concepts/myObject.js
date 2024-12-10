"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Mohit",
    email: "mohit@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser() - > throws error
createUser({ name: "Mohit", isPaid: false });
// createUser({name: 'Mohit', isPaid: false, email: 'm@m.com'})    // Will throw error on email
//--------
var newUser = { name: "Mohit", isPaid: false, email: "m@m.com" };
createUser(newUser); //This won't throw any error
//---------------
function createCourse() {
    return { name: "TypeScript", price: 399 };
}
// type myString = string;   // So now we can use myString in place string anwhere
function createUser1(user) {
    return { name: "", email: "", isActive: false };
}
createUser1({ name: "", email: "", isActive: false });
var myUser = {
    _id: "1234",
    name: "M",
    email: "mohit@m.com",
    isActive: false,
};
myUser.email = 'm@mohit.com';
