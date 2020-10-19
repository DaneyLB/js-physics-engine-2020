const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let runningCat,sw,sh,sx,sy,x,y,w,h,index;

runningCat = new Image()
runningCat.src = "images/runningcat.png";
index = 0;

xpeed = 2;

runningCat.addEventListener('load',()=>{
	sw = runningCat.width/2;
	sh = runningCat.height/4;

	setInterval(animate,100)
})

function animate(){
	sx = index%2 * sw;
	sy = Math.floor(index/2) * sh;
	x = 100;
	y = 100;
	w = sw;
	h = sh;

	context.clearRect(0,0,width,height)
	context.drawImage(runningCat,sx,sy,sw,sh,x,y,w,h);
	

	index++;
	if(index>7){
		index =  0;
	}
	x += xpeed;
	if(x>width){
		x= -sw
	}
}