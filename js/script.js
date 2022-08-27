
let seconds = 00;
let ms = 00;
let minutes = 00;
const laps = document.querySelector("#laps");
const lap_min = document.getElementById("lap-min");
const lap_sec = document.getElementById("lap-sec");
const lap_ms = document.getElementById("lap-ms");
const appendMs = document.getElementById("ms");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("button-start");
const buttonTurn = document.getElementById("button-count-turns");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
var Interval;

buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function () {
    clearInterval(Interval); //Interval


}

buttonTurn.onclick = function () { 
    if( appendMs.textContent == "00"){ 
        lap_min.innerHTML = "Inicie o cronômetro";
        laps.style.backgroundColor = '#DB1F48'
        laps.style.color = '#f2e7dc'
    }
    else{ 
        lap_min.innerHTML = "Última volta: " + appendMinutes.textContent + ":";
        lap_sec.innerHTML = appendSeconds.textContent + ":";
        lap_ms.innerHTML = appendMs.textContent;
        laps.style.backgroundColor = '#004369';
        laps.style.color = '#f2e7dc';
    }
}
buttonReset.onclick = function () {
    clearInterval(Interval);
    ms = "00";
    seconds = "00";
    minutes = "00";
    appendMs.innerHTML = ms;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    lap_min.innerHTML = "", lap_sec.innerHTML = "", lap_ms.innerHTML = ""

}

function startTimer() {
    ms++;

    if (ms <= 9) {
        appendMs.innerHTML = "0" + ms;
    }
    if (ms > 9) {
        appendMs.innerHTML = ms;
    }
    if (ms > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        ms = 0;
        appendMs.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes > 9) { 
        appendMinutes.innerHTML = minutes;
    }
}

