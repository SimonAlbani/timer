let timer = 0,
  seconds;

let startTimer = function() {
  let display = document.querySelector(".time");

  setInterval(function() {
    seconds = parseInt(timer);
    display.innerHTML = seconds;
    ++timer;
  }, 1000);
};

let resetTimer = function() {
  return (timer = 0);
};

let pauseTimer = function() {
  timer = timer;
};

document.querySelector(".pause").addEventListener("click", pauseTimer);
document.querySelector(".reset").addEventListener("click", resetTimer);
document.querySelector(".start").addEventListener("click", startTimer);
