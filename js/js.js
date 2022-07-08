// O'clock JavaScript

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function turnTheIndicators() {
    let day = new Date();

    // console.log("debug: function called");

    let hours_r = day.getHours() * 30;
    let minutes_r = day.getMinutes() * 6;
    let seconds_r = day.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hours_r+(minutes_r/12)}deg)`;
    minutes.style.transform = `rotateZ(${minutes_r}deg)`;
    seconds.style.transform = `rotateZ(${seconds_r}deg)`;
}

// Digital clock

let digital_hours = document.getElementById("digital_hours");
let digital_minutes = document.getElementById("digital_minutes");
let digital_seconds = document.getElementById("digital_seconds");
let ampm = document.getElementById("ampm");

function UpdateDigitalClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    am_or_pm = "AM"

    if (h >= 12){
        am_or_pm = "PM"
        h -=12  
    }

    h = (h<10) ? "0" + h : h 
    m = (m<10) ? "0" + m : m
    s = (s<10) ? "0" + s : s

    digital_hours.innerHTML = h;
    digital_minutes.innerHTML = m;
    digital_seconds.innerHTML = s;
    ampm.innerHTML = am_or_pm;

}

 

