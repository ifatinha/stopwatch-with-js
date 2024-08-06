window.addEventListener("DOMContentLoaded", () => {
    let days = document.querySelector("#days")
    let hours = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")
    let currentSecond = 0;
    let currentMinutes = 0;
    let currentHours = 0;
    let currentDays = 0;

    function format(unit) {
        return unit < 10 ? `0${unit}` : unit
    }

    function updateDisplay() {
        seconds.innerHTML = format(currentSecond);
        minutes.innerHTML = format(currentMinutes);
        hours.innerHTML = format(currentHours);
        days.innerHTML = format(currentHours)
    }

    setInterval(() => {

        currentSecond++;

        if (currentSecond >= 60) {
            currentSecond = 0
            currentMinutes++
            if (currentMinutes >= 60) {
                currentMinutes = 0
                currentHours++
                if (currentHours >= 24) {
                    currentHours = 0
                    currentDays++
                }
            }
        }

        updateDisplay()
    }, 1000)
})