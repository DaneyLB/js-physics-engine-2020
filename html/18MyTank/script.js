const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace

let spriteSheet,sw,sh,greenTank;

spriteSheet = new Image();
spriteSheet.src = "images/tanksheet.png";

backGround = [0,0,31,0,0,31,31,31,0,0,0,0];

let tileWidth = 84;
let tileHeight = 84;
let tilesOnOneRow = 4;


greenTank = {};
greenTank.animationArray = [8,7,6,5,4,3,2,1];
greenTank.index = 0;
greenTank.direction = 0;

greenTank.x = 100;
greenTank.y = 100;

greenTank.vx = 0;
greenTank.vy = -10;
greenTank.indexPosition = 0;


greenTank.draw = function(){
  greenTank.sx = greenTank.animationArray[greenTank.index]%8 * 84;
  greenTank.sy = Math.floor(greenTank.animationArray[greenTank.index]/8) * 84;
  context.save();
  context.translate(greenTank.x,greenTank.y)
  context.rotate(greenTank.direction)

  context.drawImage(spriteSheet,greenTank.sx,greenTank.sy,84,84,-42,-42,84,84);
  context.restore();
}

greenTank.update = function(){
  greenTank.indexPosition = Math.floor(greenTank.y/84) * tilesOnOneRow;
  greenTank.x += greenTank.vx;
  greenTank.y += greenTank.vy;
  if(greenTank.y <0){
    greenTank.y = height;
  }
  if(greenTank.x <0){
    greenTank.x = width;
  }
  if(greenTank.y > height){
    greenTank.y = 0;
  }
  if(greenTank.x > width){
    greenTank.x = 0;
  }
}

window.addEventListener('keydown',(e)=>{
  switch (e.key) {
    case "ArrowRight":
        greenTank.vx = 10;
        greenTank.vy = 0;
        greenTank.direction = 0.5 * Math.PI;
      break;
      case "ArrowDown":
          greenTank.vx = 0;
          greenTank.vy = 10;
          greenTank.direction = Math.PI;
      break;
      case "ArrowLeft":
          greenTank.vx = -10;
          greenTank.vy = 0;
          greenTank.direction = 1.5 * Math.PI;
      break;
      case "ArrowUp":
          greenTank.vx = 0;
          greenTank.vy = -10;
          greenTank.direction = 0;
      break;
    default:
  }
})


spriteSheet.addEventListener('load',()=>{
  sw = spriteSheet.width/8;
  sh = spriteSheet.height/4
  setInterval(animate,100);
});

function animate(){
  context.clearRect(0,0,width,height);
  drawBackGround();
  greenTank.update();
  greenTank.draw();
  greenTank.index += 1;
  if(greenTank.index >= greenTank.animationArray.length){
    greenTank.index = 0
  }
  // console.log(greenTank.index)
  function drawBackGround(){
    //context.drawImage(spriteSheet,0,0,84,84,0,0,84,84);
    //context.drawImage(spriteSheet,0,0,84,84,83,0,84,84);
    for(i=0; i<backGround.length ;i++){
      

      let tileX = (i % tilesOnOneRow) * tileWidth;
      let tileY = Math.floor(i/tilesOnOneRow) * tileHeight;

      let sX = (backGround [i] % 8  ) * tileWidth;
      let sY = Math.floor(backGround[i]/ 8) * tileHeight;

      context.drawImage(spriteSheet,sX,sY,84,84,tileX,tileY,84,84);
    }
  }

}



