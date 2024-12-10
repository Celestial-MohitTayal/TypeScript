// const user: string[] = ['mt']
let tUser: [string, number, boolean]
tUser = ['mt', 131, true];  // We cannot reverse the order it should specify the tuple order -> [string, number, boolean]
//tuple is all about restricting you to have a order of data

//-----------------------------------

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]
const newUser: User = [112, 'example@google.com']

newUser[1] = 'mt@google.com';
newUser.push(111);


//------------------------------------
























export {};