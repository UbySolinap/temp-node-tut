const path = require("path");

// This will return the path separator = "/"
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);

// Prints the basename of the file path
const base = path.basename(filePath);
console.log(base);

// Prints the absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
