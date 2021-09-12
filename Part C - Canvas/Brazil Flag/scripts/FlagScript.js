window.addEventListener('load', drawFlag); //Calls drawFlag function when load event triggered

function drawFlag()
{
    var canvas = document.getElementById('myCanvas'); //Grabs canvas element from HTML and stores in canvas variable
    var context = canvas.getContext('2d'); //Stores 2d rendering context in variable
    
    context.fillStyle='#009B3A'; //Background of flag (green)
    context.fillRect(0,0,800,560); //x,y,width,height 
    
    drawTriangle();
    drawCircle();
}

function drawTriangle() //Rhombus
{
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.fillStyle='#FFCC29'; //Colour of rhombus (yellow)
    context.beginPath(); //Begins path for line to be drawn
    context.moveTo(68,280); //The starting point for drawing the line (x,y)
    context.lineTo(400,68); //lineTo adds a point & draws line to that point from last specified point in canvas
    context.lineTo(732,280);
    context.lineTo(400, 492);
    context.fill(); //Fills triangle with colour specified above
    context.closePath(); //Closes path for next shape to be drawn
}

function drawCircle()
{
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d'); 
    context.fillStyle = '#3E4095'; //Colour of circle (blue)
    context.beginPath(); 
    context.arc(400,280,140,0,Math.PI*2,true); //Parameters: x,y,radius,startAngle,endAngle,anticlockwise
    context.closePath(); 
    context.fill(); 
}