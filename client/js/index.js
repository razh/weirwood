/* eslint-env es6 */

class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Body {
  constructor() {
    this.position = new Vector2();
    this.velocity = new Vector2();

    this.angle = 0;
    this.angularVelocity = 0;
  }
}
