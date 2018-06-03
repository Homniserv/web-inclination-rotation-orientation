(function(){
console.log("no18");
  
  
  
  
  
  
  var betax   = document.querySelector('.betax');
var gammay = document.querySelector('.gammay');
var alphaz = document.querySelector('.alphaz');

  //https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  var z = event.alpha;  // 

  betax.innerHTML  = "beta : " + x + "\n";
  gammay.innerHTML += "gamma: " + y + "\n";
alphaz.innerHTML += "alpha: " + z + "\n";
  

document.getElementById("betax").innerHTML = x;
  
  document.getElementById("gammay").innerHTML = y;
  
  document.getElementById("alphaz").innerHTML = z;
  
  
  
  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);
  
  
  
  
  
  
  
})();
