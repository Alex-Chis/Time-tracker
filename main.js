const startBtn = document.getElementById("start");
const counterTime = document.getElementById("counter-time");
const tasks = document.getElementById("tasks");

let intervalID = null;
let startTime = null;
let elapsedTime = null;
let isRunning = false;
let descriptionText = null;
let durationText = null;

function addTask(durationText, descriptionText) {
  let p = document.createElement("p");
  p.textContent = "Duration:";
  let p2 = document.createElement("p");
  p2.textContent = durationText;
  let d = document.createElement("p");
  d.textContent = "Description:";
  let d2 = document.createElement("p");
  d2.textContent = descriptionText;
  let l = document.createElement("li");
  let l2 = document.createElement("li");
  tasks.appendChild(l);
  tasks.appendChild(l2);
  l.appendChild(p);
  l.appendChild(p2);
  l2.appendChild(d);
  l2.appendChild(d2);
}

function updateCounter() {
  elapsedTime = new Date() - startTime;
  let seconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  counterTime.textContent = hours + ":" + minutes + ":" + seconds;
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    startBtn.textContent = "Stop";
    descriptionText = document.getElementById("desArea").value;
    startTime = new Date();
    intervalID = setInterval(updateCounter, 1000);
    isRunning = !isRunning;
  } else if (isRunning) {
    startBtn.textContent = "Start";
    durationText = counterTime.textContent;
    addTask(durationText, descriptionText);
    clearInterval(intervalID);
    counterTime.textContent = "00:00:00";

    isRunning = !isRunning;
  }
});
