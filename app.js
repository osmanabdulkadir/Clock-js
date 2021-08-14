// grab variables 

let hoursHand = document.getElementById("hours")
let minHand = document.getElementById("minutes");
let secHand = document.getElementById("second")

//event listers on page


// move hours hand varibales


function Clock() {
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = hr *360/12 + ((min * 360/60) / 12);
let minPostiontion = (min * 360/12) + (sec * 360/60)/60;
let secPosition = sec * 360/60;

hoursHand.style.transform = "rotate(" + hrPosition + "deg)";
minHand.style.transform = "rotate(" + minPostiontion + "deg)";
secHand.style.transform = "roatate(" + secPosition + "deg)";

console.log("hour: " + hr + " minnute: " + min + " Seconds: " +sec);
}

setInterval(Clock, 1000);
Clock();