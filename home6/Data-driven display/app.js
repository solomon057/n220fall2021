let object;

function setup() {
    createCanvas (500,500);
    CreateGraphics (401,250);
    
}
function draw()
{
    fill(0,12);

    rect(0,0,width,height);

    fill(255);

    nostroke();

    ellipse(mousex,mousey,60,60);

    object.nofill(mousex);

    object.background(51);

    object.stroke(255);

    object.ellipse(mousex-150,mousey-150,60,60);
    image(object,150,75);
}