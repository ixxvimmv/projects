let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateTime() {
    seconds++;
    if (seconds === 60) { seconds = 0; minutes++; }
    if (minutes === 60) { minutes = 0; hours++; }

    display.innerText = 
        `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function start() {
    if (!timer) timer = setInterval(updateTime, 1000);
}
function stop() {
    clearInterval(timer);
    timer = null;
}
function reset() {
    stop();
    [seconds, minutes, hours] = [0, 0, 0];
    display.innerText = "00:00:00";
}
