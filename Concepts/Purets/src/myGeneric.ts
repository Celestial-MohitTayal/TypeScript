const score: Array<number> = [];
const names: Array<string> = [];

//------------------
function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}
//-------------------

function IdentityThree<Type>(Val: Type): Type {
  return Val;
}

// IdentityThree(true);

function identityFour<T>(val: T): T {
  //Same as indentityThree
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "Johney Walker", type: 4 });

function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  //<T> is a generic we use comma <T,> in generic to differentiate it form html tag and let someone know that it is a generic
  //do some db operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunc<T, U extends Database>(val1: T, val2: U): object {
  return { val1, val2 };
}


// anotherFunc(3, '4');    // Throws error because U extends Database
anotherFunc(3, {connection: '1', username: '2', password: '3'});

interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product)
    }
}