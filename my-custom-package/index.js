const { upperCase } = require("upper-case");

function greet(name) {
  console.log(upperCase(`hello ${name}, Welcome to node js`));
}

greet("shweta");

module.exports = greet; // Use module.exports instead of export default
