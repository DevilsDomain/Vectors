import { Vector } from './vector';

/**
 * Constructs a vector with the given coordinates.
 * @param {number} x - The x-coordinate of the vector.
 * @param {number} y - The y-coordinate of the vector.
 * @returns {Vector} The constructed vector.
 */
const constructVector = (x: number, y: number): Vector => {
  return new Vector(x, y);
};

/**
 * Prints a vector to the console.
 * @param {string} message - The message to display.
 * @param {Vector} vector - The vector to print.
 */
const printVector = (message: string, vector: Vector) => {
  console.log(message, JSON.stringify(vector));
};

// Constructing a vector
const a: Vector = constructVector(1, 2);
printVector("Constructing a vector", a);

// Another possible way to construct a vector
const b: Vector = Vector.of(2, 0.5);
printVector("Another possible way to construct a vector", b);

// Adding vectors
const sum: Vector = a.add(b);
printVector("Adding vectors", sum);

// Calculating vector length
const abs: number = sum.length();
console.log("Calculating vector length", abs);
