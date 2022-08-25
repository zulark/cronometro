window.onload = function () {

    var seconds = 00;
    var ms = 00;
    var minutes = 00;
    // var lapMs = document.getElementById("lap-ms");
    // var lapSec = document.getElementById("lap-sec");
    // var lapMin = document.getElementById("lap-min");
    var appendMs = document.getElementById("ms");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval); //Interval
        // lapMin.innerHTML = "Last lap: " + minutes;
        // lapSec.innerHTML = ":" + seconds;
        // lapMs.innerHTML = ":" + ms;
    }
    buttonReset.onclick = function () {
        clearInterval(Interval);
        ms = "00";
        seconds = "00";
        minutes = "00";
        appendMs.innerHTML = ms;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;

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
    }
}
