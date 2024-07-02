function greet(name) {
  console.log(`hello ${name}`);
}

function higherOrderFn(callback) {
  const name = "Vishwas";
  callback(name);
}

higherOrderFn(greet);
