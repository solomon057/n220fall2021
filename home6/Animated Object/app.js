function setup()
{
createCanvas(400, 400);
}


function draw(){

this.x=100;
this.y=500;
this.size=1000;

background(0,0,0);
let clr = color(0, 0, 255);
fill(clr);  
circle(x,y,size);

}