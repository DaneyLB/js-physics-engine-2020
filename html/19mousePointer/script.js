const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace

let PointA,PointB,arrow;

PointA = new Point(100,100,15,"red",true);
PointB = new Point(400,300,15,"blue",true);
//x,y,radius,color,draggable,label

arrow = {};

arrow.sh = 10;
arrow.sw = 150;
arrow.hh = 20;
arrow.hw = 37;
arrow.color = "rgba(255,255,0,0.5)"

arrow.draw = function(){
  context.beginPath();
  context.fillStyle = arrow.color;
  context.moveTo(0,0);
  context.lineTo(0,arrow.sh);
  context.lineTo(arrow.sw,arrow.sh);
  context.lineTo(arrow.sw,arrow.hh)
  context.lineTo(arrow.sw +arrow.hw,0)
  context.closePath();
  context.stroke();
  context.fill();
}

animate();

function animate() {
  context.clearRect(0,0,width,height);
  window.reqeustAnimationFrame(animate)
  PointA.draw();
  PointB.draw();
  arrow.draw();
}
