//we create a date object and set the time to the day we want it to count down to
//getTime is to get the timestamp in milliseconds
var countDownDate = new Date ("Mar 2, 2024").getTime();
//we set an interval that is executed every one second(1000millisecond)
var x = setInterval(function(){
//this collects the current date and time and assigns it to the  variable now
var now = new Date().getTime();
//this calculates the difference
var distance =countDownDate - now;
//calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 *24));
var hours = Math.floor((distance %(1000 * 60 *60 * 24)) / (1000 *60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//below we want to write a code that when time id is not written in double digits  a zero can ber added to it from behind
days = days < 10 ? "0" + days : days
hours =hours < 10 ? "0" + hours : hours
minutes =minutes < 10 ? "0" + minutes : minutes
seconds =seconds < 10 ? "0" + seconds  : seconds

//this with display the upadate time in the html file
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("secs").innerHTML = seconds;
},1000);