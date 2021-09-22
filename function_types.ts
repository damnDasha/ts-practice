function stringFunction() {
  console.log("why god why");
}

function cal(val1: number, val2: number): number {
  let total: number = val1 + val2;
  return total;
}

cal(2, 2);

let universal = cal;

console.log(universal(2431, 1309));

// let universal2 : () => string
// universal = stringFunction
