const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier
let A,B,C;
let ab,bc,ca;
let altitudeAB ,altitudeBC, altitudeAC;

A = new Point(100,100,15,"red",true);
B = new Point(600,150,15,"green",true);
C = new Point(300,300,15,"blue", true);

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ac = new LinearFunction(1,1);

mAB = new Point(100,100,10,"black",false);

lAB = new LinearFunction(1,1);
altitudeBC = new LinearFunction(1,1);
altitudeAC = new LinearFunction(1,1);


function animate(){
    context.clearRect(0,0,width,height);
    context.beginPath();
    context.fillstyle = "rgba(255,255,0,0.2)";
    context.moveTo(A.x,A.y);
    context.lineTo(B.x,B.y);
    context.lineTo(C.x,C.y);
    context.closePath();
    context.stroke();

    A.draw();
    B.draw();
    C.draw();

    ab.slope = (B.y - A.y) / (B.x - A.x);
    ab.intercept =  B.y - B.x*ab.slope;
    ab.draw(context);

    bc.slope = (B.y - C.y) / (B.x - C.x);
    bc.intercept =  B.y - B.x*bc.slope;
    bc.draw(context);

    ca.slope = (C.y - A.y) / (C.x - A.x);
    ca.intercept =  C.y - C.x*ca.slope;
    ca.draw(context);

    mAB.x =(A.x + B.x)/2;
    mAB.x =(A.y + B.y)/2;
    mAB.draw();

    lAB.slope = -1/ab.slope;
    lAB.intercept = mAB.y - mAB.x*lAB.slope;
    lAB.draw(context)

    
}

setInterval(animate,10);