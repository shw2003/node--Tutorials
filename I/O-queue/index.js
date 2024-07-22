const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("this is readFile 1"); //3
});

process.nextTick(() => console.log("nextTick 1")); //1
Promise.resolve().then(() => console.log("promise resolve 1")); //2

// https://chromium.googlesource.com/chromium/blink/+/master/Source/core/frame/DOMTimer.cpp

setImmediate(() => console.log("setImmediate 1"));
setTimeout(() => console.log("timeout"));
