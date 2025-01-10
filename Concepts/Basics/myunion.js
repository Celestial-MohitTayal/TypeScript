var score = 33; // | donates union and allow variable to have multiple types
score = 44;
score = "55";
var mohit = {
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
function getDbId(id) {
    //   id.toLowerCase(); //throws error: property "toLowerCase()" does not exist on type 'string | number'.
    if (typeof id === "string") {
        id.toLowerCase(); //This will work
    }
    console.log(id);
}
//---------------------
//Array
// const data: number[] = [1, 2, 3, '4']   //not possible as array is defined of type number
var data1 = ["1", "2", 3, true, 5, false];
var data2 = ["1", "2", 3, true, 5, false];
var pi = 3.14;
// pi = 3.145   // This will not happen because we allow this to be very strict and should always be 3.14
var seatAllotment;
seatAllotment = "aisle"; //This is fine
// seatAllotment = "crew"; //Won't work
