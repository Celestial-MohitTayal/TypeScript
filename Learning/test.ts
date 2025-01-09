//even if it shows error or red lines code will still run and give output
//typescript do static type checking which determines whats an error and whats not based on the inds of values being operated on



let x = 5;
if (1 < x < 3) {
  console.log("entered");
}

const obj1 = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj1.width * obj1.heigth;

console.log(area);

console.log(4 / []);
