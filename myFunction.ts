function addTwo(num: number) {
  // num.toUpperCase()   //this will throw error if num: number is defined
  //   return num + 2;
  return "HELLO"; //It won't show any error
}
// addTwo("5"); //Possible if : number is not defined
addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
// getUpper(4); //not possible as val is of type string
getUpper("mohit");

function signUpUser(name: string, email: string, isPaid: boolean) {}
// signUpUser(1, 2, 3)  //because name email and password is defined as any by default
signUpUser("Mohit", "mohit@gmail.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
// loginUser(1, 2)
loginUser("Mohit", "mohit@gmail.com");

function getValue(myVal: number): boolean {
  if (myVal > 5) {
    return true;
  }
  return false;
  // return '200 OK' -> will throw error as function defined as boolean
}

const getHello = (s: string): string => {
  return "";
};

// const heros = ['thor', 'spiderman', 'ironman']   //TS will define hero as string
const heros = [1, 2, 3]; //TS will define hero as number
heros.map((hero): string => {
  //return statement can only be string now else it will throw error
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  //it won't return anything as it is of void type
  console.log(errmsg);
  // return errmsg -> this won't work as return is not allowed in void type functions
}

function handleError(errmsg: string): never {
    //It don't require return statement or anything 
    throw new Error(errmsg)
} 

export {};
