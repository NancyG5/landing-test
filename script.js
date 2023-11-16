 
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 5);

let formattedDate =
            ('0' + currentDate.getDate()).slice(-2) + '.' +
            ('0' + (currentDate.getMonth() + 1)).slice(-2) + '.' +
            currentDate.getFullYear();

// console.log("Текущая дата минус 5 дней: " + formattedDate);

let sectionDate = document.getElementById("section1-date");
sectionDate.textContent += "Опублiковано: " + formattedDate;




document.addEventListener("mouseleave", function (event) {
    if (event.clientY < 0) {
        showPopup();
    }
});

// Задержка появления поп-апа после загрузки страницы (в миллисекундах)
let delayToShowPopup = 20000;

setTimeout(function () {
    showPopup();
}, delayToShowPopup);

// Обработчик для кнопки в поп-апе
document.getElementById("scrollToFormButton").addEventListener("click", function () {
    hidePopup();
    scrollToForm();
});

function showPopup() {
    document.getElementById("popupContainer").style.display = "block";
}

function hidePopup() {
    document.getElementById("popupContainer").style.display = "none";
}

function scrollToForm() {
    let formElement = document.getElementById("footer-form");
    if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
    }
}




document.addEventListener("DOMContentLoaded", function () {
    let startTime = 600; 
    let timer = startTime;

    // Функция обновления таймера
    function updateTimer() {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        // Отображение времени в формате "мм:сс"
        document.getElementById("timer").textContent = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    // Запуск таймера 
    let intervalId = setInterval(function () {
        if (timer > 0) {
            timer--;
            updateTimer();
        } else {
            // Что делать когда время истекло?
            clearInterval(intervalId);
        }
    }, 1000);
    
    updateTimer();
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scrollToFormButton").addEventListener("click", function () {
        document.getElementById("footer-form").scrollIntoView({ behavior: "smooth" });
    });
});