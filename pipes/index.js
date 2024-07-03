let fs = require("fs");
const zlib = require("node:zlib");
// Use fs.createReadStream() method
// to read the file
reader = fs.createReadStream("./file.txt");

const gzip = zlib.createGzip();

// Read and display the file data on console
reader.on("data", function (chunk) {
  console.log(chunk.toString());
});

const writeableStream = fs.createWriteStream("./file2.txt");

reader.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
reader.pipe(writeableStream);
