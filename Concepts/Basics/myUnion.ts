let score: number | string = 33; // | donates union and allow variable to have multiple types
score = 44;
score = "55";

//-----------------

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let mohit: User | Admin = {
  name: "Mohit Tayal",
  id: 334,
};

mohit = { username: "MT", id: 334 }; // variable can accept both Admin and User types

//-------------------

// function getDbId(id: number | string) {
//     console.log(id);
// }

getDbId(334);
getDbId("334");
//both will work because of union type of number and string

function getDbId(id: number | string) {
  //   id.toLowerCase(); //throws error: property "toLowerCase()" does not exist on type 'string | number'.

  if (typeof id === "string") {
    id.toLowerCase(); //This will work
  }
  console.log(id);
}

//---------------------

//Array
// const data: number[] = [1, 2, 3, '4']   //not possible as array is defined of type number

const data1: (string | number | boolean)[] = ["1", "2", 3, true, 5, false];
const data2: any[] = ["1", "2", 3, true, 5, false];

let pi: 3.14 = 3.14;
// pi = 3.145   // This will not happen because we allow this to be very strict and should always be 3.14

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"; //This is fine
// seatAllotment = "crew"; //Won't work



export {}