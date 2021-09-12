window.addEventListener('load', drawCanvas); //Calls drawCanvas function when load event triggered

function drawCanvas()
{
    var canvas = document.getElementById('myCanvas'); //Grabs canvas element from HTML and stores in canvas variable
    var context = canvas.getContext('2d'); //Stores 2d rendering context in variable
    
    //Variables used to plug into strokeRect
    var rectX; 
    var rectY; 
    var rectWidth;
    var rectHeight;
 
    context.strokeStyle='#009B3A'; //Colour of rectangles (green)
    
    for (var i=0;i<100;i++) //Loops 100 times (therefore draws 100 rectangles)
        {
            rectX = Math.random() * (canvas.width); //Randomized using canvas width value
            rectY = Math.random() * (canvas.height); //Randomized using canvas height value
            rectWidth = Math.random() * (canvas.width);
            rectHeight = Math.random() * (canvas.height);
            
            context.strokeRect(rectX,rectY,rectWidth,rectHeight); //Parameters: x,y,width,height  
        }
}