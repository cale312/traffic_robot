var colorArray = new Array;
colorArray[0] = document.querySelector('.red');
colorArray[1] = document.querySelector('.orange');
colorArray[2] = document.querySelector('.green');

var color = 0;

var start = function runRobot() {
  setInterval(function() {
    console.log(color++);
    if (color === 2) {
      colorArray[0].style.background = 'rgba(255, 0, 0, 0.3)'
      colorArray[1].style.background = 'rgba(255, 255, 0, 0.3)'
      colorArray[2].style.background = 'green'
    } else if (color === 20) {
      colorArray[0].style.background = 'rgba(255, 0, 0, 0.3)'
      colorArray[1].style.background = 'orange'
      colorArray[2].style.background = 'rgba(0, 255, 0, 0.3)'
    } else if (color === 28) {
      colorArray[0].style.background = 'red'
      colorArray[1].style.background = 'rgba(255, 255, 0, 0.3)'
      colorArray[2].style.background = 'rgba(0, 255, 0, 0.3)'
    } else if (color === 38) {
      color = 0;
    }
  }, 500);
}

start();
