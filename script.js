const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

// rectangle
ctx.fillStyle = "blue";
ctx.fillRect(50, 20, 200, 80);  

// circle
ctx.beginPath();
ctx.arc(200, 300, 100, 0, 2 * Math.PI);
ctx.fillStyle= "green";
ctx.fill();

// text
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.fillText("Aman gupta", 85, 150);

//line
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(200, 100);
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.stroke();
