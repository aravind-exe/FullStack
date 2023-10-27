let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

let timerInterval;

function updateTimerDisplay() {
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("mins").textContent = minutes;
    document.getElementById("secs").textContent = seconds;
}

function setTimer() {
    let daysin = parseInt(document.getElementById("daysIn").value);
    let hoursin = parseInt(document.getElementById("hoursIn").value);
    let minutesin = parseInt(document.getElementById("minsIn").value);
    let secondsin = parseInt(document.getElementById("secsIn").value);

    let totalsec = daysin * 24 * 60 * 60 + hoursin * 60 * 60 + minutesin * 60 + secondsin;
    days = Math.floor(totalsec / (24 * 60 * 60));
    totalsec %= (24 * 60 * 60);
    hours = Math.floor(totalsec / (60 * 60));
    totalsec %= (60 * 60);
    minutes = Math.floor(totalsec / 60);
    seconds = totalsec % 60;

    updateTimerDisplay();
    document.getElementById("daysIn").value = "0";
    document.getElementById("hoursIn").value = "0";
    document.getElementById("minsIn").value = "0";
    document.getElementById("secsIn").value = "0";
}

function start() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() { 
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;

    updateTimerDisplay();
    stop();
}

function updateTimer() {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                } else {
                    stop();
                }
            }
        }
    }
    updateTimerDisplay();
}

updateTimerDisplay();