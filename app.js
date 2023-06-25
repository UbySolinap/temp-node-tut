// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular proj
// npm i (packagename)

// global dependency - use it in any project
// npm install -g (packagename)

// package.json - manifest file (stores important info about project)
// manual approach (create package.json in the root)
// npm init (step by step)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
