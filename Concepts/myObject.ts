const User = {
  name: "Mohit",
  email: "mohit@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
// createUser() - > throws error
createUser({ name: "Mohit", isPaid: false });
// createUser({name: 'Mohit', isPaid: false, email: 'm@m.com'})    // Will throw error on email
//----
const newUser = { name: "Mohit", isPaid: false, email: "m@m.com" };
createUser(newUser); //This won't throw any error

//---------------

function createCourse(): { name: string; price: number } {
  return { name: "TypeScript", price: 399 };
}
//---------------

type User1 = {
  name: string;
  email: string;
  isActive: boolean;
};

// type myString = string;   // So now we can use myString in place string anwhere

function createUser1(user: User1): User1 {
  return { name: "", email: "", isActive: false };
}
createUser1({ name: "", email: "", isActive: false });

//-----------------

type User2 = {
  readonly _id: string; //Thats a keyword in ts which will not allow anyone to change _id
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;   // ? will make this optional
};

let myUser: User2 = {
  _id: "1234",
  name: "M",
  email: "mohit@m.com",
  isActive: false,
};

//-------------------

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardCvv = {
    cardCvv: number
}


type cardDetails = cardNumber & cardDate & cardCvv

myUser.email = 'm@mohit.com';

// function createUser2(u: User2) {}

export {};
