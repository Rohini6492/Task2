let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = document.getElementById("display").textContent;
    const lapList = document.getElementById("laps");
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(lapItem);
  }
}



