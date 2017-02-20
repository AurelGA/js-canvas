document.addEventListener("DOMContentLoaded", main);

function main() {
  // Get a reference to the canvas and grab something called the "context" off
  // it.  The context defines how we interact with the canvas. We're not doing
  // 3D so we grab 2D.
  var canvas = document.getElementById("easel");
  var ctx = canvas.getContext("2d");

  // It's possible for the canvas to be a different size than the element on the
  // page. If the canvas were smaller than the element than it would be stretched.
  // Let's use jQuery to measure the size of the element and set the canvas to that.
  canvas.width = $(canvas).width();
  canvas.height = $(canvas).height();

  // Define some variables for the x,y coordinates of where we'll draw
  // and the width and height of rectangles we'll draw.
  var xx = 50;
  var yy = 80;
  var width = 100;
  var height = 150;

  // The ctx is like our paintbrush. Let's set the width of a line we'll draw
  // and choose different colors for fill (the inside of shapes) and for it's
  // stroke (a line on the border of shapes).
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  
  // fill an entire rectangle
  // then stroke around it's edges with red.
  ctx.fillRect(xx, yy, width, height);
  ctx.strokeRect(xx, yy, width, height);
}
