function stringFunction() {
    console.log("why god why");
}
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
cal(2, 2);
var universal = cal;
console.log(universal(2431, 1309));
// let universal2 : () => string
// universal = stringFunction
