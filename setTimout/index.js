// setTimeout(() => console.log("st 1"), 0);
// setTimeout(() => {
//   console.log("st 2");
//   process.nextTick(() => console.log("inner next tick inside setTimeout"));
// }, 0);
// setTimeout(() => console.log("st 3"), 0);

// process.nextTick(() => console.log("nextTick 1")); //1
// process.nextTick(() => {
//   console.log("2 next"); //2
//   process.nextTick(() => console.log("inner next tick")); //4
// });

// process.nextTick(() => {
//   console.log("nextTick 3"); //3
// });

// Promise.resolve().then(() => console.log("PROMISE 1")); //1
// Promise.resolve().then(() => {
//   console.log("promise.resolve 2"); //2
//   process.nextTick(() => {
//     console.log("inner next Tick promise"); //4
//   });
// });
// Promise.resolve().then(() => console.log("promise 3")); //3

setTimeout(() => console.log("st 1"), 1000);
setTimeout(() => console.log("st 2"), 500);
setTimeout(() => console.log("st 3"), 0);
