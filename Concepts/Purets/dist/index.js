"use strict";
// class User {
//     email: string
//     name: string
//     private readonly city: string = "Hisar" //Private do not allow city to get called outside the class. Everything you do not mark is public naturally.
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
//public/private/protected -> Access Modifier
//set courseCount(courseNum): void {}    // We cannot make setter a void type. it is naturaaly a non return type func
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; //protected - can be used in same class or inherited class
        this.city = "Hisar";
    }
    deleteToken() {
        console.log("Token Deleted!");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const mohit = new User("m@mohit.com", "Mohit Tayal");
