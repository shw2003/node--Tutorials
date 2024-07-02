// const PizzaShop = require("./pizza-shop");
const PizzaShop = require("./pizza-shop");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`order reciened! ${size}, ${topping}`);
});
pizzaShop.order("large", "mushrooms");
pizzaShop.order("large", "panner");
pizzaShop.displayOrderNumber();
// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("oreder-pizza", (size, topping) => {
//   console.log(`order recieved!! ${size} ${topping}`);
// });

// console.log("heelo");
// emitter.emit("oreder-pizza", " large", "mushroom");
