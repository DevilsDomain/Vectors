class Vector {
  // construct a new vector
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // creates a new vector
  static of(x, y) {
    return new Vector(x, y);
  }

  // Adds a vector to the current vector and returns the result as a new vector.
  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  //Subtracts a vector from the current vector and returns the result as a new vector.
  subtract(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }


  //Multiplies the vector by a scalar and returns the result as a new vector
  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }


  //Calculates the length of the vector.
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }


  // Calculates the unit vector of the current vector.
  unit() {
    const len = this.length();
    if (len === 0) {
      return new Vector(0, 0);
    }
    return new Vector(this.x / len, this.y / len);
  }


  //Calculates the direction angle (in radians) of the current vector
  direction() {
    return Math.atan2(this.y, this.x);
  }
}
//exports the module
module.exports = {
    Vector
  };