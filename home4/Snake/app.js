var radius = 30;
var x = [0,0,0,0];
var y = [0,0,0,0];
function setup() {
createCanvas( 500, 500 );
}

function draw() {

x.shift();

x.push(mouseX);

y.shift();

y.push(mouseY);

background('gray');

for(let i=0;i<10;i++){

ellipse( x[i], y[i], radius, radius );
}
}