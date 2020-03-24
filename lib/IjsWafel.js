/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Polygon{
  constructor(points){
    this.points = points
  }

  draw(context){
    context.fillStyle = this.color
    for (let i=0; i<this.points.length; i++){
      this.points[i].draw()
    }
    context.beginPath()
    context.moveTo(this.points[0].x, this.points[0].y)
    for (let i=0; i<this.points.length; i++){
      context.lineTo(this.points[i].x, this.points[i].y)
    }

    context.closePath();
    context.stroke();
    context.fill();
  }
}