const math = require("./math");

console.log(math.add(2, 7));
console.log(math.subtract(2, 7));

const { add, subtract } = math;

console.log(add(3, 7), subtract(8, 4));
