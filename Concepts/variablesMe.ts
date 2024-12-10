let greetings: string = "Hello World!";
console.log(greetings);

let mynum = 6;
// mynum.toUpperCase() //Will show an error/warning before running

//number
let userId: number = 334455.5;
userId.toFixed();

//boolean
let isLoggedIn: boolean = false;

//any
let hero: string;

function getHero() {
  return "Thor";
}

hero = getHero();
//when typerscript couldn't figure out whta is the type of the variable it assigns it to any. (let hero: any)

export {}; //it removes error/warning that came on greetings
