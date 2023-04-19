const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const seconds = document.getElementById('second');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hourNow = dateToday.getHours();
    let minuteNow = dateToday.getMinutes();
    let secondsNow = dateToday.getSeconds();

    if(hourNow < 10) hourNow = '0' + hourNow;

    if(minuteNow < 10) minuteNow = '0' + minuteNow;

    if(secondsNow < 10) secondsNow = '0' + secondsNow;

    hour.textContent = hourNow;
    minute.textContent = minuteNow;
    seconds.textContent = secondsNow;


})