/**
 * Represents a 2D vector.
 */
class Vector {
  /**
   * The x-coordinate of the vector.
   */
  x: number;

  /**
   * The y-coordinate of the vector.
   */
  y: number;

  /**
   * Construct a new vector.
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Creates a new vector.
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   * @returns {Vector} The created vector.
   */
  static of(x: number, y: number): Vector {
    return new Vector(x, y);
  }

  /**
   * Adds a vector to the current vector and returns the result as a new vector.
   * @param {Vector} vector - The vector to add.
   * @returns {Vector} The resulting vector.
   */
  add(vector: Vector): Vector {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  /**
   * Subtracts a vector from the current vector and returns the result as a new vector.
   * @param {Vector} vector - The vector to subtract.
   * @returns {Vector} The resulting vector.
   */
  subtract(vector: Vector): Vector {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  /**
   * Multiplies the vector by a scalar and returns the result as a new vector.
   * @param {number} scalar - The scalar value to multiply.
   * @returns {Vector} The resulting vector.
   */
  multiply(scalar: number): Vector {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  /**
   * Calculates the length of the vector.
   * @returns {number} The length of the vector.
   */
  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Calculates the unit vector of the current vector.
   * @returns {Vector} The unit vector.
   */
  unit(): Vector {
    const len = this.length();
    if (len === 0) {
      return new Vector(0, 0);
    }
    return new Vector(this.x / len, this.y / len);
  }

  /**
   * Calculates the direction angle (in radians) of the current vector.
   * @returns {number} The direction angle in radians.
   */
  direction(): number {
    return Math.atan2(this.y, this.x);
  }
}

export { Vector };
