var RECTANGLES = [];

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
  
  // It turns out to be useful to attach the width and height properties to the
  // ctx too, so it knows how big it's canvas is.
  ctx.width = canvas.width;
  ctx.height = canvas.height;

  function addRectangle(x, y) {
    var rect = new Rectangle(x, y);
    RECTANGLES.push(rect);
  }
  
  function drawRectangles(ctx, rects) {
    rects.forEach(function(rect) {
      drawRectangle(ctx, rect.x, rect.y);
    });
  }
  
  canvas.addEventListener("click", function(event) {
    addRectangle(event.offsetX, event.offsetY);
    drawRectangle(ctx, event.offsetX, event.offsetY);
  });
  
  canvas.addEventListener("mousemove", function(event) {
    clearCanvas(ctx);
    drawRectangles(ctx, RECTANGLES);
    drawRectangle(ctx, event.offsetX, event.offsetY);
  });
  
  document.getElementById("clear").addEventListener("click", function(event) {
    clearCanvas(ctx);
    RECTANGLES = [];
  });

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

function drawRectangle(ctx, x, y) {
  // these rectangles will be 50x50px squares
  var size = 50;
  
  ctx.fillStyle = 'purple';
  ctx.stokeStyle = 'yellow';
  ctx.lineWidth = 5;
  
  ctx.fillRect(x, y, size, size);
  ctx.strokeRect(x, y, size, size);
}

function clearCanvas(ctx) {
  ctx.clearRect(0, 0, ctx.width, ctx.height);
}
