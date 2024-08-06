window.addEventListener("DOMContentLoaded", () => {
    let days = document.querySelector("#days")
    let hours = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")


    // Função para formatar o tempo
    function format(unit) {
        return unit < 10 ? `0${unit}` : unit
    }

    // Função para atualizar o display
    function updateDisplay() {
        seconds.innerHTML = format(currentSecond);
        minutes.innerHTML = format(currentMinute);
        hours.innerHTML = format(currentHour);
        days.innerHTML = format(currentHour)
    }

    // Função para salvar o tempo inicial no localstorage
    

    // Função para salvar o tempo no localstorage
    function saveTime() {
        const timeToSave = {
            second: currentSecond,
            minute: currentMinute,
            hour: currentHour,
            day: currentDay
        };

        localStorage.setItem("time", JSON.stringify(timeToSave));
    }

    // Função para carregar o tempo do localstorage
    function loadTime() {
        const saveTime = JSON.parse(localStorage.getItem("time"));
        console.log(saveTime);
        if (saveTime) {
            currentSecond = saveTime.second;
            currentMinute = saveTime.minute;
            currentHour = saveTime.hour;
            currentDay = saveTime.day
        }
    }

    // Inicializa o tempo
    let currentSecond = 0;
    let currentMinute = 0;
    let currentHour = 0;
    let currentDay = 0;

    loadTime();
    updateDisplay();

    setInterval(() => {

        currentSecond++;

        if (currentSecond >= 60) {
            currentSecond = 0
            currentMinute++
            if (currentMinute >= 60) {
                currentMinute = 0
                currentHour++
                if (currentHour >= 24) {
                    currentHour = 0
                    currentDay++
                }
            }
        }

        updateDisplay()
        saveTime()
    }, 1000)
})