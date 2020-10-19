const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let dice,sw,sh,roll,roll_2,score;

dice = {};

dice.image = new Image();
dice.image.src = "images/dice.png";

dice.image.addEventListener('load',()=>{
	sw = dice.image.width/6;
	sh = dice.image.height;
	roll = Math.floor(Math.random()*6)+1;
	roll_2 = Math.floor(Math.random()*6)+1;
	score = roll + roll_2;

	animate();
})

function animate(){
	context.drawImage(dice.image,(roll-1)*sw,0,sw,sh,200,200,sw,sh)
	context.drawImage(dice.image,(roll_2-1)*sw,0,sw,sh,400,200,sw,sh);
	console.log(score)
}