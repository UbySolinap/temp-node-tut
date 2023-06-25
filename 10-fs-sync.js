const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// This reads the txt files
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// Writes a file if it does not exist, if it exists, Replaces the current txt

// (flag: "a") = adding this will trigger append.
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
