const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let myCircle = new Point(getRandomInt(0,width),getRandomInt(0,height),getRandomInt(20,60),RandomColorGet());

function RandomCircleMaker() {
	myCircle.draw();
	myCircle.update(getRandomInt(0,width),getRandomInt(0,height),getRandomInt(20,60),RandomColorGet());
}


setInterval(RandomCircleMaker,100);