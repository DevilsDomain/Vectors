require = require('esm')(module /*, options*/);
const { Vector } = require('./vector.js');

// Constructing a vector
const a = new Vector(1, 2);
console.log("Constructing a vector", JSON.stringify(a));

// Another possible way to construct a vector
const b = Vector.of(2, 0.5);
console.log("Another possible way to construct a vector", JSON.stringify(b));

// Adding vectors
const sum = a.add(b);
console.log("Adding vectors", JSON.stringify(sum));

// Calculating vector length
const abs = sum.length();
console.log("Calculating vector length", abs);

//use node -r esm index.js to run the file.