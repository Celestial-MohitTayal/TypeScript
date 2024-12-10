interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTail: () => string,
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {            //This is allowed ->  Reopening of interface that is how it is called.
    githubtoken: string
}

// const mohit: User = {
//   dbId: 22,
//   role: "admin",
//   email: "mt@mohit.com",
//   userId: 2211,
//   startTrail: () => "Trail Started",
//   getCoupon: (cpn: "mohit10", off: 10) => off,
//   githubtoken: "github,"
// };

//----------------------------

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const mohit: Admin = {
    dbId: 22,
    role: "admin",
    email: "mt@mohit.com",
    userId: 2211,
    startTrail: () => "Trail Started",
    getCoupon: (cpn: "mohit10", off: 10) => off,
    githubtoken: "github,"
  };

mohit.email = "mt@mt.com";
// mohit.dbId = 33;     // not possible because of readonly
 

export  {}