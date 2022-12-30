var header = document.querySelector('header')
console.log(header)
window.onscroll = ()=>{
    if(window.scrollY > 60){
        header.classList.add('fixed')
    }else{
        header.classList.remove('fixed')
    }
}

  // Get the canvas element
var canvas = document.getElementById('progressCircle');
var percent =document.querySelector('.percent')

// Get the context to draw on the canvas
var ctx = canvas.getContext('2d');

// Set the dimensions of the progress circle
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 50;
var endPercent = 80;
var curPerc = 0;
var counterClockwise = false;
var circ = Math.PI * 2;
var quart = Math.PI / 2;

// Set the color and width of the circle
ctx.lineWidth = 5;
ctx.strokeStyle = '#34C635';
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;

// Function to animate the progress bar
function animate(current) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
  ctx.stroke();
  curPerc++;
  if (curPerc < endPercent) {
    requestAnimationFrame(function () {
      animate(curPerc / 100);
    });
  }
}
percent.innerHTML=endPercent + "%"
// Start the animation
animate();

