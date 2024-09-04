// Set the date we are counting from
var countFromDate = new Date("June 17, 2024 00:00:00").getTime();

// Update the timer every second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the time difference between now and the countFromDate
    var difference = now - countFromDate;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours "
    + minutes + " Minutes " + seconds + " Seconds ";

}, 1000);
