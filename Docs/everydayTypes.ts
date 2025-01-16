let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
// const n: number = obj;

//--------------------------------------------

//type annotation on variables
let myName: string = "Mohit";

//--------------------------------------------

//functions
//->Parameter Type Annotation
function greet(name: string) {
  console.log(`Hello ${name} !!`);
}

greet("Mohit");

//--------------------------------------------

//->Return Type Annotation
function getFavNumber(): number {
  return 2812;
}

//--------------------------------------------

//-> Function with return promises
async function getFavNumber1(): Promise<number> {
  return 2812;
}

//--------------------------------------------

//-> Anonymous Functions
const names = ["Mahima", "Mohit", "Diksha"];
names.forEach((s) => {
  console.log(s.toUpperCase());
});

//--------------------------------------------

//Object Types
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//optional properties
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//------------------

function printName1(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  // console.log(obj.last.toUpperCase());    //'obj.last' is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

//--------------------------------------------

//Union Types
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//   printId({ myID: 22342 }); // -> Error Argument of type '{myID: number}' is not assignable to parameter of type 'string | number'

//-----------
function printId1(id: number | string) {
  //   console.log(id.toUpperCase());
  // Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
}

//------------
function printId2(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

//-------------
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

//-------------
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

//--------------------------------------------

//Type Aliases
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord1(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord1({ x: 100, y: 100 });

//--------------

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = "new input";
