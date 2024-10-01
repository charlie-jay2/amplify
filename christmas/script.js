// Set the date for Christmas
const countdownDate = new Date("Dec 25, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

    // Time calculations
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.querySelector('.countdown').innerHTML = "<h2>Merry Christmas!</h2>";
    }
}, 1000);
