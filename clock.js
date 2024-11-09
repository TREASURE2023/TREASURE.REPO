var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(function () {
    d = new Date();
    second = d.getSeconds() * 6;
    minute = d.getMinutes() * 6;
    hour = d.getHours() * 30 + Math.round(minute / 12);

    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const clock = document.querySelector(".clock");
    const frameColorPicker = document.getElementById("frameColorPicker");
    const innerColorPicker = document.getElementById("innerColorPicker");
    const handColorPicker = document.getElementById("handColorPicker");
    const numberColorPicker = document.getElementById("numberColorPicker");

    // Select the clock parts
    const clockFrame = document.querySelector(".clock");
    const clockInner = document.querySelector(".clock-inner"); // Changed selector to target a single element
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
    const clockNumbers = document.querySelectorAll(".hour");

    if (clock && frameColorPicker && innerColorPicker && handColorPicker && numberColorPicker) {
        // Change frame color
        frameColorPicker.addEventListener("input", (event) => {
            clockFrame.style.borderColor = event.target.value;
        });

        // Change inner color
        innerColorPicker.addEventListener("input", (event) => {
            if (clockInner) {
                clockInner.style.backgroundColor = event.target.value;
            }
        });

        // Change clock hand color
        handColorPicker.addEventListener("input", (event) => {
            const color = event.target.value;
            if (secondHand) secondHand.style.backgroundColor = color;
            if (minuteHand) minuteHand.style.backgroundColor = color;
            if (hourHand) hourHand.style.backgroundColor = color;
        });

        // Change Clock Number Color
        numberColorPicker.addEventListener("input", (event) => {
            const color = event.target.value;
            clockNumbers.forEach(number => {
                number.style.color = color;
            });
        });
    } else {
        console.error("One or more elements were not found in the document.");
    }
});
