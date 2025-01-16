console.log("Hello World");
//---------------------------------
function greet1(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
}
greet1("Brendan", "15th July, 2024");
//----------------------------------
function greet2(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet2("Maddison", new Date());
//----------------------------------
let msg = 'hello there!';
//let msg: string -> on hover
//----------------------------------
