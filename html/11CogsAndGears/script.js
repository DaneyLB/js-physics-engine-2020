const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace

let img,angle;

img =  new Image();
img2 =  new Image();
img3 =  new Image();
img.src = "images/cog.png";
img2.src = "images/cog.png";
img3.src = "images/cog.png";

angle = 0.1;
angle2 = -0.1;
angle3 = 0.1;


img.addEventListener('load',()=>{
	setInterval(animate,10)
})

function animate(){
	context.clearRect(0,0,width,height)
	context.save()
	context.translate(300,300)
	context.rotate(angle);
	context.drawImage(img,-150,-150,300,300);
	context.restore();
	angle += 0.01;

	context.save()
	context.translate(520,475)
	context.rotate(angle2);
	context.drawImage(img2,-150,-150,300,300);
	context.restore();
	angle2 += -0.01;

	context.save()
	context.translate(520,175)
	context.rotate(angle3);
	context.drawImage(img3,-150,-150,300,300);
	context.restore();
	angle3 += 0.01;
}