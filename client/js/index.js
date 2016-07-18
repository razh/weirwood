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


const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const state = {
  bodies: [],
};

function draw(ctx, state) {
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = '#fff';

  state.bodies.forEach(body => {
    ctx.beginPath();
    ctx.arc(body.position.x, body.position.y, 2, 0, 2 * Math.PI);
    ctx.stroke();
  });
}

for (let i = 0; i < 1000; i++) {
  const body = new Body();
  body.position.x = Math.random() * canvas.width;
  body.position.y = Math.random() * canvas.height;

  state.bodies.push(body);
}

draw(ctx, state);
