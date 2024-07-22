// console.log("1");
// process.nextTick(() => console.log("nextTick"));
// console.log("2");

// Promise.resolve().then(() => console.log("PROMISE"));
// process.nextTick(() => console.log("nextTick"));

process.nextTick(() => console.log("nextTick 1")); //1
process.nextTick(() => {
  console.log("2 next"); //2
  process.nextTick(() => console.log("inner next tick")); //4
});

process.nextTick(() => {
  console.log("nextTick 3"); //3
});

Promise.resolve().then(() => console.log("PROMISE 1")); //1
Promise.resolve().then(() => {
  console.log("promise.resolve 2"); //2
  process.nextTick(() => {
    console.log("inner next Tick promise"); //4
  });
});
Promise.resolve().then(() => console.log("promise 3")); //3
