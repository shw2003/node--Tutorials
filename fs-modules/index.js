// const fs = require("node:fs");

// console.log("first");
// const fileContents = fs.readFileSync("./file.txt", "utf-8");

// console.log("second");

// console.log(fileContents);
// console.log("third");

// // The fs.readFileSync() method is an inbuilt application programming interface of the fs module which is used to read the file and return
// // its content. In the fs.readFile() method, we can read a file in a non-blocking asynchronous way, but in the fs.readFileSync() method,
// // we can synchronously read files, i.e. we are telling node.js to block other parallel processes and do the current file reading process.
// //  That is, when the fs.readFileSync() method is called the original node program stops executing.

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
// console.log("forth");

// fs.writeFileSync("./greet.txt", "heelo world");

// fs.writeFile("./grrtes.txt", "heelo vishwas", { flag: "a" }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file written");
//   }
// });

const fs = require("node:fs/promises");

fs.readFile("file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();
