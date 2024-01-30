let canvas = document.getElementById("cvs");
let ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;

// ctx.moveTo(350,250);
// ctx.lineTo(350,50);
// ctx.lineTo(500,50);
// ctx.lineTo(500,250);
// ctx.lineTo(350,250);
// ctx.stroke();
// ctx.fill();

// ctx.moveTo(100,400);
// ctx.lineTo(200,400);
// ctx.lineWidth = 10;
// ctx.moveTo(150,350);
// ctx.lineTo(150,450);
// ctx.stroke();


// ctx.moveTo(100,100);
// ctx.lineTo(200,100);

// ctx.moveTo(100,150);
// ctx.lineTo(200,150);
// ctx.lineWidth = 10;
// ctx.stroke();



// ctx.moveTo(300,300);
// ctx.lineTo(400,500);
// ctx.lineTo(550,275);
// ctx.stroke();



ctx.beginPath();
ctx.arc(350, 250, 100, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.lineWidth = 2;
ctx.stroke();


ctx.beginPath();
ctx.arc(300, 200, 20, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.lineWidth = 2;
ctx.stroke();



ctx.beginPath();
ctx.arc(400, 200, 20, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.lineWidth = 2;
ctx.stroke();


ctx.beginPath();
ctx.fillRect(300,350,100,100);
ctx.fillStyle = "red";
ctx.closePath();